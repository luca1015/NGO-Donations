function showOrganization(organizations){
    for (let step = 0; step < organizations.length; step++) {
        addContent(organizations[step])
    }
    document.getElementById('title').innerHTML += "Organizations <i>("+organizations.length+")</i>\n"
}
function addContent(organization) {
    document.getElementById('organizations-content').innerHTML += "<div class=\"organization hermano hvr-bob\" onclick='seeDetailInfo("+organization.id+")'>\n" +
        "                <div class=\"imagen hermano\">\n" +
        "                    <img src=\"static/images/"+organization.image+"\" id=\"\" alt=\"\" width=\"100%\" height=\"100%\"/>\n" +
        "                </div>\n" +
        "                <div class=\"info-organization hermano\">\n" +
        "                    <div style=\"font-size: 25px; font-weight:bold;text-align: center; text-align: center\">"+organization.name+"</div>\n" +
        "                    <div style=\"overflow: hidden; margin-top: 2%\">\n" +
        "                        <div class=\" box hermano hvr-bob\">\n" +
        "                            <div class=\"title-box\">\n" +
        "                                Categoria\n" +
        "                            </div>\n" +
        "                            <div class=\"info-box\">\n" +
        "                                "+organization.categorie+"\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\" box hermano hvr-bob\">\n" +
        "                            <div class=\"title-box\">\n" +
        "                                Country\n" +
        "                            </div>\n" +
        "                            <div class=\"info-box\">\n" +
        "                                "+organization.country.toUpperCase()+"\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\" box hermano hvr-bob\">\n" +
        "                            <div class=\"title-box\">\n" +
        "                                Projects\n" +
        "                            </div>\n" +
        "                            <div class=\"info-box-number\">\n" +
        "                                "+organization.projectnumber+"\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\" box hermano hvr-bob\">\n" +
        "                            <div class=\"title-box\">\n" +
        "                                Year founded\n" +
        "                            </div>\n" +
        "                            <div class=\"info-box-number\">\n" +
        "                                "+organization.yearfounded+"\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>"
}

function createOrganization() {
    window.location='CreateOrganization.html';

}
function seeDetailInfo(id) {
    localStorage.setItem("project",id)
    window.location='OrganizationInformation.html';
}