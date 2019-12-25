const fetch = require('node-fetch');

class ServiceCall{

constructor(){
    this.serviceResponse="";
    this.idtoCompare=0;
}


async callService(){
    
   this.idtoCompare =  await fetch('https://api.github.com/users/ritvikkhare')
   .then(
       data => {
       return data.json()
        })
        .then(
            data2 => {
                //console.log(data2.id);
                this.serviceResponse=data2.id;
            });
    //console.log(this.serviceResponse);
}

async getIDfromResponse() {
    return this.serviceResponse;
}

}

module.exports = ServiceCall;