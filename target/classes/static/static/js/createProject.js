var organizationIdByEmail = 'http://localhost:8080/api/getOrganizationIdByEmail';
var createOrganizationURL = 'http://localhost:8080/api/project/';

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
            document.getElementById('organization-title').innerHTML="Welcome "+r.name+"!"
            localStorage.setItem('Organization ID',r.id)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function createProject() {
    var organization = localStorage.getItem('Organization ID')
    const today = new Date(Date.now());
    var data = {
        publicaddress : document.getElementById('lpa').value,
        date :     today.toISOString(), // "2020-06-13T18:30:00.000Z"
        name : document.getElementById('lname').value,
        country : document.getElementById('lcountry').value,
        categorie : document.getElementById('lcategorie').value,
        goal : document.getElementById('lgoal').value,
        summary : document.getElementById('lsummary').value,
        challenge : document.getElementById('lchallenge').value,
        solution : document.getElementById('lsolution').value,
        longimpact : document.getElementById('llti').value,
        status : true,
        image : "Organizations/project"+document.getElementById('limage').value+".jpeg",
        organization : organization,
    };
    fetch(createOrganizationURL,
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
