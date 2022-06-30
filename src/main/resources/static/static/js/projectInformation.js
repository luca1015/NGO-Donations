var projectURL = 'http://localhost:8080/api/getProjectById';
var organizationURL = 'http://localhost:8080/api/getOrganizationsById';

function loadProject() {
    var publicaddress = localStorage.getItem('Project publicaddress')
    var url = new URL(projectURL)
    var params = [['publicaddress', publicaddress]]
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
            showInfoHTML(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function showInfoHTML(project) {
    localStorage.setItem('objetivo',project.goal)
    document.getElementById('project-info').innerHTML="<div class=\"categorie center\">\n" +
        "            "+project.categorie+" | "+project.country+"\n" +
        "        </div>\n" +
        "        <div class=\"project-title center\">\n" +
        "            "+project.name+"\n" +
        "        </div>\n" +
        "        <div class=\"summary\">\n" +
        "            <div class=\"img hermano\">\n" +
        "                <img src=\"static/images/"+project.image+"\" id=\"proyecto-1.1\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
        "            </div>\n" +
        "            <div class=\"summary-right hermano\">\n" +
        "                <div class=\"summary-text\">\n" +
        "                    <b>Summary: </b>"+project.summary+"\n" +
        "                </div>\n" +
        "                <div id=\"project-value\" class=\"pts-info\">\n" +
        "                </div>\n" +
        "                <button class=\"btn-donate\" onclick=\"donar()\">\n" +
        "                    <p class=\"text-donate\">D O N A T E</p>\n" +
        "                </button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"contenedor\">\n" +
        "            <div class=\"project-container hermano\">\n" +
        "                <h3 class=\"title-container\">Project Information</h3>\n" +
        "                <hr tyle=\"height: 2px\">\n" +
        "                <div style=\"font-size: 20px;\">\n" +
        "                    <b>Challenge</b><br>\n" +
        "                    "+project.challenge+"\n" +
        "                    <br><br><b>Solution</b><br>\n" +
        "                    "+project.solution+"\n" +
        "                    <br><br><b>Long-Term Impact</b><br>\n" +
        "                    "+project.longimpact+"\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div id='organization' class=\"organization-container hermano\" onclick='showOrganizationCompleteInfo("+project.organization+")' style='cursor: pointer'>\n" +
        "            </div>\n" +
        "        </div>"
    cargarProgressBar(project.goal,project.publicaddress)
    projectOrganization(project.organization)
}
function showOrganizationCompleteInfo(id){
    localStorage.setItem('project',id)
    location.href = 'OrganizationInformation.html'
}
async function cargarProgressBar(goal,publicaddress) {
    contract.methods.balanceOf(publicaddress).call((err,result)=>{
        console.log(result)
        var porcentaje = result/goal*100;
        porcentaje = porcentaje.toFixed(2);
        document.getElementById('project-value').innerHTML = "<p class=\"porcentage-text\">"+porcentaje+"%</p><p class=\"pts-text top\">"+result+" PTS</p>\n" +
            "                        <progress id=\"\" class=\" barra-porcentaje\" max=\"100\" value=\'"+porcentaje+"\'></progress>\n" +
            "                        <p class=\"pts-text bottom\">"+goal+" PTS</p>";
    })
}

async function projectOrganization(id) {
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
            datosOrganization(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function datosOrganization(organization) {

    document.getElementById('organization').innerHTML = "<h3 class=\"title-container\">Organization Information</h3>\n" +
        "                <hr style=\"height: 2px\">\n" +
        "                <div style=\"overflow: hidden\">\n" +
        "                    <div class=\"hermano\" style=\"width: 30%; border: lightgrey 1px solid;\">\n" +
        "                        <img src=\"static/images/"+organization.image+"\" id=\"\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
        "                    </div>\n" +
        "                    <div class=\"hermano organization-basic-info\" style=\"font-size: 20px\">\n" +
        "                        <b>"+organization.name+"</b><br><br>\n" +
        "                        <b>Country: </b> "+organization.country+" <br><br>\n" +
        "                        <b>Category: </b> "+organization.categorie+"\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div style=\"margin-top: 2%; font-size: 20px\">\n" +
        "                    <b>Mission: </b><br>\n" +
        "                    "+organization.mission+"\n" +
        "                </div>\n" +
        "                <div style=\"overflow: hidden; width: 100%; margin-top: 4%\">\n" +
        "                    <div class=\" box hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Total Revenue\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.totalrevenue+"m\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"box-derecha hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Total Expenses\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.totalexpense+"m\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"box-derecha hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Net Income\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.netincome+"k\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div style=\"overflow: hidden; width: 100%; margin-top: 4%\">\n" +
        "                    <div class=\" box hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Total Assets\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.totalasset+"m\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"box-derecha hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Total Liabilities\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.totalliabilitie+"k\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"box-derecha hermano hvr-bob\">\n" +
        "                        <div class=\"title-box\">\n" +
        "                            Net Assets\n" +
        "                        </div>\n" +
        "                        <div class=\"info-box\">\n" +
        "                            $"+organization.netassets+"m\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n"

}

function donar() {
    var user = localStorage.getItem('User type')
    if(user=="user"){
        location.href = "Donation.html"
    }else{
        alert("Solo los usuarios pueden donar")
    }
}