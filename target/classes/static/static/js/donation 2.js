var projectURL = 'http://localhost:8080/api/getProjectById';
var projectStatusURL = 'http://localhost:8080/api/project/status'


var destination = localStorage.getItem("Project publicaddress")
var objetivo = localStorage.getItem('objetivo')


function getGoal() {
    var publicaddress = destination
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
            localStorage.setItem('objetivo',r.goal)
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

const showAccount = document.getElementById('account');
const showBalance = document.querySelector('.showBalance');
const ethereumButton = document.querySelector('.enableEthereumButton');

document.addEventListener("DOMContentLoaded", function(event) {
    localStorage.removeItem('ammount')
    localStorage.removeItem('porcentajeDonation')
    getGoal()
    datosProyecto();
});

function datosProyecto(){
    contract.methods.balanceOf(destination).call((err,result)=>{
        console.log(result)
        var porcentaje = result/objetivo*100;
        porcentaje = porcentaje.toFixed(2)
        localStorage.setItem('balance-project',result)
        localStorage.setItem('porcentaje',porcentaje)
        document.getElementById('initial-ammount').innerHTML = "<p class=\"porcentage-inicial hermano\">"+porcentaje+"%</p>\n" +
            "            <p class=\"text-initial-ammount hermano\">("+result+" PTS)</p>";
        document.getElementById('tfa').innerHTML = "<p class=\"text-final-ammount\" >Target ammount: "+objetivo+" PTS</p>";
        cambiarBarra()
    })

}

function btnDonationAmmount(ammount){
    var new_porcentaje = ammount/localStorage.getItem('objetivo')*100
    localStorage.setItem('porcentajeDonation',new_porcentaje)
    localStorage.setItem('ammount',ammount)
    cambiarBarra()
}

function cambiarBarra(){
    document.getElementById('donation-bar').innerHTML = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+localStorage.getItem('porcentaje')+"%\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
        "            <div class=\"progress-bar progress-bar-striped bg-info\" role=\"progressbar\" style=\"width: "+localStorage.getItem('porcentajeDonation')+"%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>";
}

$("#ammount").on("change keyup paste", function(){
    btnDonationAmmount(document.getElementById('ammount').value)
})

ethereumButton.addEventListener('click', () => {
    getAccount();
    getBalance()
});

async function getAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    showAccount.innerHTML = account;
    localStorage.setItem('account',account);
}

ethereum.on('accountsChanged', function (accounts) {
    // Time to reload your interface with accounts[0]!
});

async function getBalance() {

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    contract.methods.balanceOf(account).call((err,result)=>{
        console.log(result)
        localStorage.setItem('balance',result)
        balance = result;
        showBalance.innerHTML=result;
    })
}

async function transferencia(){
    var userPublicAddress = localStorage.getItem("User publicaddress")
    var emisor = document.getElementById('account').innerText;
    var balance = parseInt(localStorage.getItem('balance'),10)
    if(emisor==null || emisor==''){
        alert('PLEASE PRESS ENABLE ETHREUM BUTTON BEFORE THE DONATION')
    }else if(emisor.toUpperCase() !=userPublicAddress.toUpperCase() ){
        alert('Select in MetaMask the address linked to this email account')
    } else{
        var ammount = parseInt(localStorage.getItem('ammount'), 10);
        if(ammount>balance){
            alert('The actual balance is lower than the ammount to donate')
            location.href = "Donation.html"
        }else if(ammount>0){
            var receptor = destination;
            contract.methods.transfer(receptor,ammount).send({from: emisor}, (error,result) => {
                console.log(error);
                console.log(result) ;
                setTimeout(function(){
                    checkProjectStatus()
                    },2000);
            });
            console.log(ammount)
            console.log(receptor)
            console.log(emisor)
        }else{
            alert('Introduce o select an ammount over 0')
        }
    }
}
function checkProjectStatus() {
    var objetivo = parseInt(localStorage.getItem('objetivo'),10)
    var balance = parseInt(localStorage.getItem('balance-project'),10)
    var ammount = parseInt(localStorage.getItem('ammount'), 10);
    var total = balance+ammount;
    console.log(total)
    console.log(objetivo)
    if(total>=objetivo){
        location.href='index.html';
        updateStatus()
    }else {
        location.href='projectInformation.html';
    }
}
function updateStatus(){
    var publicaddress = destination
    var data = {
        publicaddress : publicaddress,
        status : false, // "2020-06-13T18:30:00.000Z"
    };

    fetch(projectStatusURL,
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
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}