// temperature module
var ds18b20 = require('ds18b20');

function temperatureData(ds18b20){

ds18b20.sensors(function(err, ids) {

     if (err) {
          return console.log('Can not get sensor IDs', err);
     }

     console.log('Sensor IDs', ids);

     ids.forEach(function(id) {
         ds18b20.temperature(id, function(err, result) {
           if (err) {
             console.log('Can not get temperature from sensor', err);
           } else {
             console.log('Sensor ' + id + ' :', result);
           }
         });
       });
     });

     console.log('Current temperature: ' + ds18b20.temperatureSync('28-051691b6b4ff', {parser: 'hex'}));

     for(var i=0; i<60; i++){
             setTimeout(function(){
                     temperatureData(ds18b20)
             }, 1000);
     }

}

temperatureData(ds18b20);
