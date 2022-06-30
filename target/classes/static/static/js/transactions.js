function loadTransactions() {
    dataAllTransactions();
    loadProjects()
    if(localStorage.getItem("User type")=="user"){
        document.getElementById('transactions-options').innerHTML="<a onclick='loadProjects2()' class=\"cursor\">Donations By Project</a> | <a onclick='showAllTransactions()' class=\"cursor\">See All</a> | <a onclick='showMyTransactions()' class=\"cursor\">My Donations</a>"
    }else{
        document.getElementById('transactions-options').innerHTML="<a onclick='loadProjects2()' class=\"cursor\">Donations By Project</a> | <a onclick='showAllTransactions()' class=\"cursor\">See All</a>"
    }
    setTimeout(function (){
        showAllTransactions();
    },1000)
}

function showMyTransactions() {
    document.getElementById('transactions').innerHTML = "<div>\n" +
        "                    <table class=\"table\">\n" +
        "                        <thead>\n" +
        "                        <tr class=\"table100-head\">\n" +
        "                            <th class=\"column1\">Date</th>\n" +
        "                            <th class=\"column2\">Ammount (PTS)</th>\n" +
        "                            <th class=\"column3\">Project Name</th>\n" +
        "                            <th class=\"column4\">Donor Public Address</th>\n" +
        "                            <th class=\"column5\">Project Public Adress</th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody id='addtable'>\n" +
        "                        \n" +
        "                        </tbody>\n" +
        "                    </table>\n" +
        "                </div>"+
        "</div>";

    var longitud = donations.length
    for (let step = 0; step < longitud; step++) {
        if(donations[step].from==localStorage.getItem('User publicaddress')){
            var name = projectsMap.get(donations[step].to)
            document.getElementById('addtable').innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
                "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
                "                            <td class=\"column3\">"+name+"</td>\n" +
                "                            <td class=\"column4\">"+donations[step].from+"</td>\n" +
                "                            <td class=\"column5\">"+donations[step].to+"</td></tr>"
        }
    }
}

function showAllTransactions() {
    document.getElementById('transactions').innerHTML = "<div>\n" +
        "                    <table class=\"table\">\n" +
        "                        <thead>\n" +
        "                        <tr class=\"table100-head\">\n" +
        "                            <th class=\"column1\">Date</th>\n" +
        "                            <th class=\"column2\">Ammount (PTS)</th>\n" +
        "                            <th class=\"column3\">Project Name</th>\n" +
        "                            <th class=\"column4\">Donor Public Address</th>\n" +
        "                            <th class=\"column5\">Project Public Adress</th>\n" +
        "                        </tr>\n" +
        "                        </thead>\n" +
        "                        <tbody id='addtable'>\n" +
        "                        \n" +
        "                        </tbody>\n" +
        "                    </table>\n" +
        "                </div>"+
        "</div>"
    var longitud = donations.length
    for (let step = 0; step < longitud; step++) {
        var name = projectsMap.get(donations[step].to)
        if(name!=undefined){
            document.getElementById('addtable').innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
                "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
                "                            <td class=\"column3\">"+name+"</td>\n" +
                "                            <td class=\"column4\">"+donations[step].from+"</td>\n" +
                "                            <td class=\"column5\">"+donations[step].to+"</td></tr>"
        }
    }
}

function loadProjects2() {
    document.getElementById('transactions').innerHTML = ""
    for (let step = 0; step < projects.length; step++) {
        document.getElementById('transactions').innerHTML += "<div id=\"transaction" + projects[step].publicaddress + "\" style=\"display: block\">" +
            "<div id =\"" + projects[step].publicaddress + "\" class=\"btn-desplegar cursor hvr-icon-down\" onclick=\"myFunction(this.id)\">\n" +
            "                       <b>Project Name</b>: " + projects[step].name + ", <b>Goal</b>: " + projects[step].goal + "PTS, <b>Achieved</b>: " + projects[step].achieved + "PTS <i id='" + projects[step].publicaddress + "2' style=\"width: 10%\" class=\"fa fa-arrow-circle-o-down hvr-icon\"></i>\n" +
            "                </div>" +
            "<div id=\"" + projects[step].publicaddress + "1\" style=\"display: none\">\n" +
            "                    <table class=\"table\">\n" +
            "                        <thead>\n" +
            "                        <tr class=\"table100-head\">\n" +
            "                            <th class=\"column1\">Date</th>\n" +
            "                            <th class=\"column2\">Ammount (PTS)</th>\n" +
            "                            <th class=\"column3\">Project Name</th>\n" +
            "                            <th class=\"column4\">Donor Public Address</th>\n" +
            "                            <th class=\"column5\">Project Public Adress</th>\n" +
            "                        </tr>\n" +
            "                        </thead>\n" +
            "                        <tbody id='add" + projects[step].publicaddress + "'>\n" +
            "                        \n" +
            "                        </tbody>\n" +
            "                    </table>\n" +
            "                </div>" +
            "</div>";
    }
    obtenerDonacionesProject()
}
function obtenerDonacionesProject() { //Donations of a project
    for (let step = 0; step < donations.length; step++) {
        var name = projectsMap.get(donations[step].to)
        if(name!=undefined){
            document.getElementById('add'+donations[step].to).innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
                "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
                "                            <td class=\"column3\">Help Feed Hungry Children in Zimbabwe</td>\n" +
                "                            <td class=\"column4\">"+donations[step].from+"</td>\n" +
                "                            <td class=\"column5\">"+donations[step].to+"</td></tr>"
        }
    }
}

function myFunction(id) {

    var x = document.getElementById(id+"1");
    if (x.style.display === "none") {
        document.getElementById(id).className = "btn-desplegar cursor hvr-icon-up"
        document.getElementById(id+"2").className = "fa fa-arrow-circle-o-up hvr-icon"
        x.style.display = "block";
    } else {
        document.getElementById(id).className = "btn-desplegar cursor hvr-icon-down"
        document.getElementById(id+"2").className = "fa fa-arrow-circle-o-down hvr-icon"
        x.style.display = "none";
    }
}