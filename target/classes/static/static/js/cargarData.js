function cargarDatos(){
    menuInicial();
}

function menuInicial(){
    var userSinLogear = "<div class=\"padre\">\n" +
        "        <a href=\"index.html\"><div class=\"ngo\">\n" +
        "            NGO Donations\n" +
        "        </div></a>\n" +
        "        <div class=\"tutorial\" style=\"width: 70%; float: left\">\n" +
        "            <ul style=\"width: 100%\">\n" +
        "                <a href='login.html'><li class=\"flotante-d\">\n" +
        "                    <img src=\"static/images/login.png\" width=\"40 px\">\n" +
        "                </li></a>\n" +
        "                 <a href='Organizations.html'><li class=\"flotante-d\">Organizations</li></a>\n" +
        "                <li class=\"flotante-d\">Categories<i class=\"fa fa-angle-down\"></i>\n" +
        "                    <ul>\n" +
        "                        <li onclick='showProjectsCategorie(\"Education\")'>Education</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Food Security\")'>Food Security</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Environment\")'>Enviroment</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Human Rights\")'>Human Rights</li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <a href='index.html'><li class=\"flotante-d\">Home</li></a>\n" +
        "\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>"
    var userLogeado = "<div class=\"padre\">\n" +
        "        <a href=\"index.html\"><div class=\"ngo\">\n" +
        "            NGO Donations\n" +
        "        </div></a>\n" +
        "        <div class=\"tutorial\" style=\"width: 70%; float: left\">\n" +
        "            <ul style=\"width: 100%\">\n" +
        "                <li onclick='disconnect()' class=\"flotante-d\">\n" +
        "                    <img src=\"static/images/disconnect.png\" width=\"40 px\">\n" +
        "                </li>\n" +
        "                <li class=\"flotante-d\"><i>Hi, "+localStorage.getItem('User name')+"</i></li>\n" +
        "                 <a href='Organizations.html'><li class=\"flotante-d\">Organizations</li></a>\n" +
        "                <li class=\"flotante-d\">Categories<i class=\"fa fa-angle-down\"></i>\n" +
        "                    <ul>\n" +
        "                        <li onclick='showProjectsCategorie(\"Education\")'>Education</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Food Security\")'>Food Security</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Environment\")'>Enviroment</li>\n" +
        "                        <li onclick='showProjectsCategorie(\"Human Rights\")'>Human Rights</li>\n" +
        "                    </ul>\n" +
        "                </li>\n" +
        "                <a href='index.html'><li class=\"flotante-d\">Home</li></a>\n" +
        "\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>"
    if(localStorage.getItem('email')==null)
        document.getElementById('barra-panel').innerHTML=userSinLogear;
    else
        document.getElementById('barra-panel').innerHTML=userLogeado;
}
function disconnect() {
    localStorage.clear();
    location.href="index.html"
}

function showProjectsCategorie(categorie) {
    localStorage.setItem('categorie',categorie)
    location.href="ProjectsCategorie.html"

}
