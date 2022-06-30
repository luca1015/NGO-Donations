var projectURL = 'http://localhost:8080/api/getProjectById';
var updateOrganizationURL = 'http://localhost:8080/api/project/data';

function cargarDatosProyecto(){
    var publicaddress = localStorage.getItem('Edit address')
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
            let status
            if(r.status)
                status = "Not Finished"
            else
                status= "Finished"
            document.getElementById("project-name").innerText = "Edit "+r.name
            document.getElementById('lpa').value = r.publicaddress;
            document.getElementById('lname').value = r.name
            document.getElementById('lcountry').value = r.country
            document.getElementById('lcategorie').value = r.categorie
            document.getElementById('lgoal').value = r.goal
            document.getElementById('lsummary').value= r.summary
            document.getElementById('lchallenge').value = r.challenge
            document.getElementById('lsolution').value = r.solution
            document.getElementById('llti').value = r.longimpact
            document.getElementById('lstatus').value = status
            document.getElementById('ldate').value = r.date

        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function updateProject() {
    var publicaddress = localStorage.getItem('Edit address')
    var data = {
        publicaddress : publicaddress,
        date :     "", // "2020-06-13T18:30:00.000Z"
        name : document.getElementById('lname').value,
        country : document.getElementById('lcountry').value,
        categorie : document.getElementById('lcategorie').value,
        goal : document.getElementById('lgoal').value,
        summary : document.getElementById('lsummary').value,
        challenge : document.getElementById('lchallenge').value,
        solution : document.getElementById('lsolution').value,
        longimpact : document.getElementById('llti').value,
        status : "",
        image : "",
        organization : "",
    };

    fetch(updateOrganizationURL,
        {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept' : 'application/json',
            }
        })
        //Suscribimos a la promesa Response
        .then(res => {
            if(res.ok){
                //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                return res.text()
            }else{
                return res.text();
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            window.location='OrganizationCustom.html';
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}