# RaspberryPi Device Integration with temperature sensor

Temperature device send the output to raspberryPi device and after that we process data through IOT gateway. 

## How to read temperature 

Step1: connect temperature device with raspberryPi Device.
https://cdn-learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-11-ds18b20-temperature-sensing.pdf
follow above links to install temperature sensor with rpi device.


Step2: After that we need to install these modules on raspberryPi Device 

sudo modprobe wire
sudo modprobe w1-gpio
sudo modprobe w1-therm

Step3: We need to create simple js file to read temperature with these code.

// temperature sensor module 
`var ds18b20 = require('ds18b20');`


// sensor starts reading data
`ds18b20.sensors(function(err, ids) {

    if (err) {
      return console.log('Can not get sensor IDs', err);
    }

  // sensor Id
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

// You also directly read data using temperatureSync method
console.log('Current temperature: ' + ds18b20.temperatureSync('28-051691b6b4ff', {parser: 'hex'}));
`



