var projectsCategorieURL = 'http://localhost:8080/api/getProjectByCategorie';
var organizationURL = 'http://localhost:8080/api/getOrganizationsById';

function loadProjectsByCategorie() {
    var categorie = localStorage.getItem('categorie')
    document.getElementById('categorie-title').innerHTML = categorie +
        "            <p class=\"choose-category\">Choose the project that matches your mission</p>"
    var url = new URL(projectsCategorieURL)
    var params = [['categorie', categorie.toUpperCase()]]
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
            showProjects(r,name)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function showProjects(projects,name) {
    for (let step = 0; step < projects.length; step++) {
        addContentProject(projects[step],name)
    }
}

function addContentProject(project) {
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