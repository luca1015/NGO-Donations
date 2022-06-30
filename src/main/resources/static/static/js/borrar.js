document.addEventListener("DOMContentLoaded", function(event) {
    console.log('hola')
});


const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
    getAccount();
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


if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}else{
    console.log('MetaMask must be installed!');
}

// Initialize Web3
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
}

function getBalance() {
    console.log("hola")
    //var numero1 = document.getElementById('a').value
    //var numero2 = document.getElementById('b').value

    //contract.methods.setA(numero1).send({from: web3.eth.defaultAccount}, (error,result) => { });
    //contract.methods.transfer("0x6fcf2DF466208235Bd93bac59d01fdfD3414c7ab",80).send({from: "0xA74D5fE63c8C9d36316f5Fc23fD39539C3f9d938"}, (error,result) => { });

    contract.methods.balanceOf().call((err,result)=>{
        console.log(result)
    })

}

function transferencia(){
    var emisor = document.getElementById('emisor').value;
    if(emisor==null || emisor=="")
        emisor = localStorage.getItem('account')
    var ammount = document.getElementById('ammount').value;
    var receptor = document.getElementById('receptor').value;
    contract.methods.transfer(receptor,ammount).send({from: emisor}, (error,result) => { });
    console.log(ammount)
    console.log(receptor)
    console.log(emisor)
}

function showProjects(category) {
    localStorage.setItem('category',category);
    location.href = 'Categories.html'
}

