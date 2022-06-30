var projectURL = 'http://localhost:8080/api/getProjectByDate';
var organizationURL = 'http://localhost:8080/api/getOrganizationsById';

var index = 0;
var projects = []

function loadProjects() {
    var url = new URL(projectURL)
    fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            if(res.ok){
                //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                return res.json();
            }else{
                throw res;
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            console.log(r)
            showProjects(r)
            projects=r
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function showProjects(projects) {
    if((index+5)>=projects.length){
        for (let step = index; step < projects.length; step++) {
            addContent(projects[step])
        }
    }else{
        for (let step = index; step < index+5; step++) {
            addContent(projects[step])
        }
    }
    index +=5
    console.log(index)
    console.log(projects.length)
    if(index<projects.length){
        document.getElementById('all-projects').innerHTML="<div class=\"btn-style hvr-icon-down\" onclick='showMoreProjects()'>\n" +
            "                    SEE 5 MORE\n" +
            "                    <i class=\"fa fa-arrow-circle-o-down hvr-icon flecha\"></i>\n" +
            "                </div>"
    }else{
        document.getElementById('all-projects').innerHTML=""
    }
}
function addContent(project) {
    var texto = project.summary
    var s = texto.substr(175,30)
    var pos = s.indexOf(" ")
    var final = texto.substr(0,175+pos)+"..."
    document.getElementById('project-list').innerHTML += "<div class=\"project\">\n" +
        "                        <div class=\"project-container hermano\">\n" +
        "                            <img src=\"static/images/"+project.image+"\" id=\"proyecto-1\" class=\"img-project\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
        "                        </div>\n" +
        "                        <div class=\"info hermano\">\n" +
        "                            <div>\n" +
        "                                <div>\n" +
        "                                    "+project.categorie+" | "+project.country+"\n" +
        "                                </div>\n" +
        "                                <div class=\"block\">\n" +
        "                                    <p class=\"project-name hermano\">"+project.name+"</p>\n" +
        "                                    <div onclick='cargarProyecto("+project.organization+")' style='cursor:pointer;'><p class=\"organization hermano\" id="+project.publicaddress+"></p></div>\n" +
        "                                </div>\n" +
        "                                <div class=\"block descripcion\">\n" +
        "                                    <p class=\"descripcion-text\">\n" +
                                                final+
        "                                    </p>\n" +
        "                                </div>\n" +
        "                                <div id='"+project.publicaddress+"-bar'>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>"
    projectOrganization(project.organization,project.publicaddress)
    cargarProgressBar(project.publicaddress, project.goal,project.publicaddress+"-bar")
}

async function projectOrganization(id,publicaddress) {
    var url = new URL(organizationURL)
    var params = [['id', id]]
    url.search = new URLSearchParams(params).toString();
    fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            if(res.ok){
                //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                return res.json();
            }else{
                throw res;
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            document.getElementById(publicaddress).innerText=r.name
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function cargarProyecto(id) {
    localStorage.setItem('project',id)
    location.href = 'OrganizationInformation.html'
}

function cargarProgressBar(publicaddress, goal, id) {
    contract.methods.balanceOf(publicaddress).call((err,result)=>{
        var porcentaje = result/goal*100;
        porcentaje = porcentaje.toFixed(2);
        document.getElementById(id).innerHTML = "<progress class=\" barra-porcentaje hermano\" max=\"100\" value='"+porcentaje+"'> </progress>\n" +
            "                                    <div id='"+publicaddress+"' class='btn-more hermano' onClick='showID(this.id)'><p class=\"more-text\">more</p></div>\n";
    })
}
function showID(clicked_id)
{
    localStorage.setItem('Project publicaddress',clicked_id)
    location.href = 'ProjectInformation.html'
}

function showAllOrganizations() {
    location.href = 'Organizations.html'
}
function showCategories() {
    location.href = 'Transactions.html'
}

function showMoreProjects(){
    showProjects(projects)
}
