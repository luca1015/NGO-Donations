var projectURL = 'http://localhost:8080/api/getProjects';

var signature = web3.eth.abi.encodeFunctionSignature({
    name: 'transfer',
    type: 'function',
    inputs: [{
        type: 'address',
        name: '_to'
    },{
        type: 'uint256',
        name: '_value'
    }]
})

var account = localStorage.getItem('User publicaddress')

var donations=[];
var from = [];
var projects = [];
var projectsMap = new Map();

function dataAllTransactions() { //Donations
    donations=[];
    from=[];
    web3.eth.getBlockNumber()
        .then((res) => {localStorage.setItem('Block Number',res)});
    for (let step = 15; step <= localStorage.getItem('Block Number'); step++) {
        web3.eth.getTransactionFromBlock(step)
        .then((res) => {
            from.push(res.from)
            web3.eth.getTransaction(res.hash)
                .then((res) => {
                    const input = res.input
                    const start = signature.length
                    const data = input.substring(start, input.length)
                    let datos=web3.eth.abi.decodeParameters([{
                        type: 'address',
                        name: '_to'
                    },{
                        type: 'uint256',
                        name: '_value'
                    }], data)

                    web3.eth.getBlock(step).then(r => {
                        let lastfrom = from[step-15]
                        var date = new Date(r.timestamp*1000);
                        var fecha = date.getDate()+
                        "/"+(date.getMonth()+1)+
                        "/"+date.getFullYear()+
                        " "+date.getHours()+
                        ":"+date.getMinutes()+
                        ":"+date.getSeconds()
                        donations.push({from:lastfrom,to:datos[0],ammount:datos[1],date:fecha})
                    })
                });
        })
    }
}


async function obtenerDonacionesUser(user) { //Donations of a user
    dataAllTransactions();
    var map = new Map();
    for (let step = 0; step < donations.length; step++) {
        if (donations[step].from == user) {
            map.set(donations[step].ammount,donations[step].to)//Recent Donations start from the end
        }
    }
    var mapAsc = new Map([...map.entries()].sort()); //Highest donations start from the end
}

function obtenerDonacionesProject2(project) { //Donations of a project
    var map = new Map();
    for (let step = 0; step < donations.length; step++) {
        if (donations[step].to == project.publicaddress) {
            map.set(donations[step].ammount,donations[step].from) //Recent Donations start from the end
        }
    }
    var mapAsc = new Map([...map.entries()].sort()); //Highest donations start from the end
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
            for (let step = 0; step < r.length; step++) {
                contract.methods.balanceOf(r[step].publicaddress).call((err,result)=>{
                    projects.push({publicaddress:r[step].publicaddress,name:r[step].name,goal:r[step].goal,achieved:result})
                    projectsMap.set(r[step].publicaddress,r[step].name)
                })
            }
        })
        //Errores de RED y respuestas KO
        .catch(e => console.log(e))
}

