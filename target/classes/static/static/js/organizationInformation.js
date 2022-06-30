var projectsOrganizationURL = 'http://localhost:8080/api/getProjectByOrganization';

function showOrganization(organizations) {
    for (let step = 0; step < organizations.length; step++) {
        if(organizations[step].id==localStorage.getItem('project')){
            document.getElementById('title').innerHTML = "Projects <i>("+organizations[step].projectnumber+")</i>\n"
            addContent(organizations[step])
            loadProjectsByOrganization(organizations[step].id,organizations[step].name)
            step = organizations.length
        }
    }
}
function addContent(organization) {
    document.getElementById('organization-info').innerHTML += "<div class=\"organization-title center\">\n" +
    "                "+organization.name+"\n" +
    "            </div>\n" +
    "            <h3 class=\"title-container\">Organization Information</h3>\n" +
    "            <hr style=\"height: 2px\">\n" +
    "            <div class=\"summary\">\n" +
    "                <div class=\"img hermano\">\n" +
    "                    <img src=\"static/images/"+organization.image+"\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
    "                </div>\n" +
    "                <div class=\"summary-right hermano\">\n" +
    "                    <div class=\"summary-text\">\n" +
    "                        <b>Mission: </b>"+organization.mission+"\n" +
    "                        <br><br><b>Year founded: </b>"+organization.yearfounded+"\n" +
    "                        <br><br><b>Country: </b>"+organization.country.toUpperCase()+"\n" +
    "                        <br><br><b>Categorie: </b>"+organization.categorie+"\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"stats\" style=\"overflow: hidden; width: 100%; margin-top: 4%\">\n" +
    "                <div class=\"box hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Total Revenue\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.totalrevenue+"m\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Total Expenses\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.totalexpense+"m\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Net Income\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.netincome+"m\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Program Expense\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box-expense\">\n" +
    "                        "+organization.programexpense+"%\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Administrative Expense\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box-expense\">\n" +
    "                        "+organization.administrativeexpense+"%\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"stats\" style=\"overflow: hidden; width: 100%; margin-top: 2%\">\n" +
    "                <div class=\"box hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Total Assets\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.totalasset+"m\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Total Liabilities\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.totalliabilitie+"m\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Net Assets\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box\">\n" +
    "                        $"+organization.netassets+"k\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Fundraising Expense\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box-expense\">\n" +
    "                        "+organization.fundraisingexpense+"%\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"box-derecha hermano hvr-bob\">\n" +
    "                    <div class=\"title-box\">\n" +
    "                        Working Capital\n" +
    "                    </div>\n" +
    "                    <div class=\"info-box-expense\">\n" +
    "                        "+organization.workingcapital+" yrs\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>"
}

function loadProjectsByOrganization(id,name) {
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

function addContentProject(project,name) {
    var texto = project.summary
    var s = texto.substr(175,30)
    var pos = s.indexOf(" ")
    var final = texto.substr(0,175+pos)+"..."
    document.getElementById('organization-projects').innerHTML += "<div class=\"project\">\n" +
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

function showID(clicked_id)
{
    localStorage.setItem('Project publicaddress',clicked_id)
    location.href = 'ProjectInformation.html'
}

