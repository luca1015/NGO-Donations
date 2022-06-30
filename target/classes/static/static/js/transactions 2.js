var projectURL = 'http://localhost:8080/api/getProjects';

function loadTransactions() {
    dataAllTransactions();
    showTransactionsByProject()
    if(localStorage.getItem("User type")=="user"){
        document.getElementById('transactions-options').innerHTML="<a onclick='showTransactionsByProject()' class=\"cursor\">Donations By Project</a> | <a onclick='showAllTransactions()' class=\"cursor\">See All</a> | <a onclick='showMyTransactions()' class=\"cursor\">My Dodations</a>"
    }else{
        document.getElementById('transactions-options').innerHTML="<a onclick='showTransactionsByProject()' class=\"cursor\">Donations By Project</a> | <a onclick='showAllTransactions()' class=\"cursor\">See All</a>"
    }
}

function showTransactionsByProject() {
    loadProjects()
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
    for (let step = 0; step < donations.length; step++) {
        if(donations[step].to==localStorage.getItem('User publicaddress')){
            document.getElementById('addtable').innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
                "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
                "                            <td class=\"column3\">Help Feed Hungry Children in Zimbabwe</td>\n" +
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
        "</div>";
    for (let step = 0; step < donations.length; step++) {
        document.getElementById('addtable').innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
            "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
            "                            <td class=\"column3\">Help Feed Hungry Children in Zimbabwe</td>\n" +
            "                            <td class=\"column4\">"+donations[step].from+"</td>\n" +
            "                            <td class=\"column5\">"+donations[step].to+"</td></tr>"
    }
}

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
            document.getElementById('transactions').innerHTML = ""
            for (let step = 0; step < r.length; step++) {
                //contract.methods.balanceOf(r[step].publicaddress).call((err,result)=>{
                    document.getElementById('transactions').innerHTML += "<div id=\"transaction"+r[step].publicaddress+"\" style=\"display: block\">" +
                        "<div id =\""+r[step].publicaddress+"\" class=\"btn-desplegar cursor hvr-icon-down\" onclick=\"myFunction(this.id)\">\n" +
                        "                       <b>Project Name</b>: "+r[step].name+", <b>Goal</b>: "+r[step].goal+"PTS, <b>Achieved</b>: PTS <i id='"+r[step].publicaddress+"2' style=\"width: 10%\" class=\"fa fa-arrow-circle-o-down hvr-icon\"></i>\n" +
        "                </div>" +
                        "<div id=\""+r[step].publicaddress+"1\" style=\"display: none\">\n" +
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
                        "                        <tbody id='add"+r[step].publicaddress+"'>\n" +
                        "                        \n" +
                        "                        </tbody>\n" +
                        "                    </table>\n" +
                        "                </div>"+
                        "</div>";
                //})
            }
            setTimeout(function(){
                obtenerDonacionesProject()
            },10000);
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
function obtenerDonacionesProject() { //Donations of a project
    for (let step = 0; step < donations.length; step++) {
        document.getElementById('add'+donations[step].to).innerHTML+="<tr><td class=\"column1\">"+donations[step].date+"</td>\n" +
            "                            <td class=\"column2\">"+donations[step].ammount+"</td>\n" +
            "                            <td class=\"column3\">Help Feed Hungry Children in Zimbabwe</td>\n" +
            "                            <td class=\"column4\">"+donations[step].from+"</td>\n" +
            "                            <td class=\"column5\">"+donations[step].to+"</td></tr>"
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
function myFunction2() {
    var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}