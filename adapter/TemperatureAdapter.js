//A class representing a temperature sensor that gives reading in Celsius
class CelsiusTemperatureSensor {
    constructor(){
        this.celsiusTemperature = 0 //Default temp
    }
    getTemperature(){
        return this.celsiusTemperature
    }
    setTemperature(temp){
        this.celsiusTemperature = temp
    }
}
// Adapter class to convert temperature from Celsius to Fahrenheit
class FahrenheitTemperatureAdapter{
    constructor(celsiusSensor){
        this.celsiusSensor = celsiusSensor
    }
    convertToFahrenheit(celsius){
        return (celsius * 9/5) + 32
    }
    getTemperature(){
        const celsiusTemperature = this.celsiusSensor.getTemperature();
        return this.convertToFahrenheit(celsiusTemperature)
    }
}

//Usage

const celsiusSensor = new CelsiusTemperatureSensor();

celsiusSensor.setTemperature(25);

const fahrenheitAdapter = new FahrenheitTemperatureAdapter(celsiusSensor);

console.log(`Temperature in Fahrenheit: ${fahrenheitAdapter.getTemperature()}°F`); 
