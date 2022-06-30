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

document.addEventListener("DOMContentLoaded", function(event) {
    //cargarProgressBar();
    console.log('entra')

    web3.eth.abi.encodeFunctionSignature({
        name: 'transfer',
        type: 'function',
        inputs: [{
            type: 'address',
            name: 'receiver'
        },{
            type: 'uint256',
            name: 'amount'
        }]
    })
});

/*async function cargarProgressBar() {
    var objetivo = 4000;
    contract.methods.balanceOf('0x6fcf2DF466208235Bd93bac59d01fdfD3414c7ab').call((err,result)=>{
        console.log(result)
        var porcentaje = result/objetivo*100;
        porcentaje = porcentaje.toFixed(2);
        document.getElementById('project-value').innerHTML = "<p class=\"porcentage-text\">"+porcentaje+"%</p><p class=\"pts-text top\">"+result+" PTS</p>\n" +
            "                        <progress id=\"\" class=\" barra-porcentaje\" max=\"100\" value=\'"+porcentaje+"\'></progress>\n" +
            "                        <p class=\"pts-text bottom\">"+objetivo+" PTS</p>";
    })
}*/

function donar(){
    location.href='Donation.html'
}