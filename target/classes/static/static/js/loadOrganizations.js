var organizationsURL = 'http://localhost:8080/api/getOrganizations';

function loadOrganizations() {
    organizationsArray = []
    var url = new URL(organizationsURL)
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
            console.log(r)
            showOrganization(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
