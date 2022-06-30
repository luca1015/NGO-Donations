var createOrganizationURL = 'http://localhost:8080/api/organization/';
var signupURL = 'http://localhost:8080/api/user/';

/* CREATE THE ORGANIZATION */
function createOrganization() {
    signUpOrganization()
    var data = {
        id : Date.now(),
        name : document.getElementById('lname').value,
        categorie : document.getElementById('lcategorie').value,
        mission : document.getElementById('lmission').value,
        country : document.getElementById('lcountry').value,
        yearfounded : document.getElementById('lyear').value,
        projectnumber : '0',
        image : "Organizations/"+document.getElementById('llogo').value,
        totalrevenue : document.getElementById('ltr').value,
        totalasset : document.getElementById('lta').value,
        totalexpense : document.getElementById('lte').value,
        totalliabilitie : document.getElementById('ltl').value,
        netincome : document.getElementById('lni').value,
        netassets : document.getElementById('lna').value,
        programexpense : document.getElementById('lpe').value,
        administrativeexpense : document.getElementById('lae').value,
        fundraisingexpense : document.getElementById('lfe').value,
        workingcapital : document.getElementById('lwc').value,
        email : document.getElementById('lemail').value
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
            window.location='Administrator.html';
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

/* SIGN UP THE ORGANIZATION*/
function signUpOrganization() {
    var name = document.getElementById('lname').value
    var mail = document.getElementById('lemail').value
    var password = document.getElementById('lpassword').value

    storeDataBase(name,"",mail,password,"","organization")
}
function storeDataBase(name, lastname, mail, password, publicaddress,type) {

    var data = {"email": mail,
        "password": password,
        "name": name,
        "lastname": lastname,
        "publicaddress": publicaddress,
        "type": type
    };
    fetch(signupURL,
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
            console.log(r)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
