var organizationIdByEmail = 'http://localhost:8080/api/getOrganizationIdByEmail';
var projectsOrganizationURL = 'http://localhost:8080/api/getProjectByOrganizationAll';

function cargarInfo(){
    document.getElementById('organization-name').innerText="Welcome "+localStorage.getItem("User name")+"!"
    getOrganizationId()
}
function getOrganizationId(){
    var email = localStorage.getItem('email')
    var url = new URL(organizationIdByEmail)
    var params = [['email', email]]
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
            document.getElementById('projects-title').innerHTML="Projects <i>("+r.projectnumber+")</i>"
            loadProjectsByOrganization(r.id,)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function loadProjectsByOrganization(id) {
    var url = new URL(projectsOrganizationURL)
    var params = [['organization', id]]
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
            showProjects(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function showProjects(projects) {
    for (let step = 0; step < projects.length; step++) {
        addContentProject(projects[step])
    }
}

function addContentProject(project) {
    var name = localStorage.getItem("User name")
    var texto = project.summary
    var s = texto.substr(175,30)
    var pos = s.indexOf(" ")
    var final = texto.substr(0,175+pos)+"..."
    document.getElementById('projects').innerHTML += "<div class=\"project\">\n" +
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
                "                            <div class=\"block hermano\" style=\"width: 75%;\">\n" +
                "                                <p class=\"descripcion-text\">\n" +
                                                    final+
                "                                </p>\n" +
            "                                <div id='"+project.publicaddress+"-bar'>\n" +
            "                                </div>\n" +
                "                         </div>\n" +
            "                            <div class=\"hermano\" style=\"width: 25%; display:flex; justify-content: center\">\n" +
            "                                <div id='edit"+project.publicaddress+"' style=\"width: 20%;margin-top: 20%;cursor: pointer\" onClick='editProject(this.id)'>\n" +
            "                                    <img src=\"static/images/Organizations/edit.png\" class=\"img-project\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
            "                                </div>\n" +
            "                            </div>"+
"                                   </div>\n" +
    "                                <div id='"+project.publicaddress+"-bar'>\n" +
    "                                </div>\n" +
"                                   </div>\n" +
        "                        </div>\n" +
        "                    </div>"
    projectOrganization(project.publicaddress,name)
    cargarProgressBar(project.publicaddress, project.goal,project.publicaddress+"-bar")
}

function projectOrganization(publicaddress,name) {
    document.getElementById(publicaddress).innerText=name
}

function cargarProyecto(id) {
    localStorage.setItem('project',id)
    location.href = 'OrganizationInformation.html'
}

function cargarProgressBar(publicaddress, goal, id) {
    contract.methods.balanceOf(publicaddress).call((err,result)=>{
        console.log(result)
        var porcentaje = result/goal*100;
        porcentaje = porcentaje.toFixed(2);
        document.getElementById(id).innerHTML = "<progress class=\" barra-porcentaje hermano\" max=\"100\" value='"+porcentaje+"'> </progress>\n" +
            "                                    <div id='"+publicaddress+"' class='btn-more hermano' onClick='showID(this.id)'><p class=\"more-text\">more</p></div>\n";
    })
}

function editProject(id) {
    localStorage.setItem('Edit address',id.substr(4,id.length))
    location.href="editProject.html"
}

function showID(clicked_id)
{
    localStorage.setItem('Project publicaddress',clicked_id)
    location.href = 'ProjectInformation.html'
}

function createProject() {
    location.href="CreateProject.html"
}