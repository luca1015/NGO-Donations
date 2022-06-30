
var signupURL = 'http://localhost:8080/api/user/';

function signIn() {
    location.href = 'login.html'
}

function signUp() {
    var name = document.getElementById('name').value
    var lastName = document.getElementById('lastname').value;
    var mail = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('confirm-password').value;
    var publicaddress = document.getElementById('publicaddress').value

    if(name==''){
        alert('Name should not be empty')
    } else if(lastName==''){
        alert('Last Name should not be empty')
    }else if(mail==''){
        alert('Mail should not be empty')
    } else{
        if(password!=password2){
            alert('Passwords must match')
        }
        else {
            if (password.length < 8)
                alert('Password must have a minimum of 8 characters')
            else
                storeDataBase(name, lastName, mail, password, publicaddress,"user")
        }
    }
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
            if(r=="Created"){
                localStorage.setItem('email', mail);
                localStorage.setItem('User name',name)
                localStorage.setItem('User publicaddress',publicaddress)
                getBalance(publicaddress)
            }else{
                alert(r);
            }
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

async function getBalance(account) {
    contract.methods.balanceOf(account).call((err,result)=>{
        localStorage.setItem('balance',result);
        window.location='index.html';
    })
}