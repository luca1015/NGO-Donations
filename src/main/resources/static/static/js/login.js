var loginURL = 'http://localhost:8080/api/login';
var userNamePasswordURL = 'http://localhost:8080/api/getUserNameAndAddress';

function signup() {
    location.href = 'signup.html'
}

function signIn() {
    var mail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('Preparado para validar usuario');
    console.log(mail);
    console.log(password);
    var url = new URL(loginURL)
    var params = [['email', mail], ['password', password]]
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
                return res.text();
            }else{
                throw res;
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            var  wrongPassword = "Invalid Password"
            var correct = "Correct Credentials";
            console.log(r);
            if(r==correct){
                console.log('ok')
                storeNameAndPublicAddress(mail)
                localStorage.setItem('email', mail);
            }else if(r==wrongPassword){
                window.location='login.html';
                alert(r);
            }else{
                window.location='login.html';
                alert(r);
            }
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

function storeNameAndPublicAddress(mail) {
    var url = new URL(userNamePasswordURL)
    var params = [['email', mail]]
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
                throw res.json();
            }
        })
        //Suscribimos a la promesa Body
        .then(r => {
            console.log(r)
            localStorage.setItem('User name',r.name)
            localStorage.setItem('User publicaddress',r.publicaddress)
            localStorage.setItem('User type',r.type)
            if(r.type=="user")
                window.location='index.html';
            else if (r.type=="organization")
                window.location='organizationCustom.html'
            else if (r.type=="admin")
                window.location='Administrator.html'
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}
