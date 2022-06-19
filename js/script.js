
function generate(){

    url = 'https://nepinsultsapi.herokuapp.com/api/'
    requestOptions = {
        method:'GET',
        headers:{'Content-Type':'application/json',},
    }
    fetch(url, requestOptions).then((response)=>{
        return response.json();
    }).then((data)=>{
        insult = data.detail
        insultstr = JSON.stringify(insult)
        insultfinal = insultstr.replace(/['"]+/g, '')
       

        console.log(insultfinal)
        document.getElementById('insultarea').innerHTML = insultfinal;

    })

    
}

