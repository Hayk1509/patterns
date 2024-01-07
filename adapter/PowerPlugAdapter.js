class EuropeanPlug{
    connectToEuropeanSocket(){
        console.log("Connected to a European socket. ")
    }
}

class AmericanPlug {
    connectToAmericanSocket(){
        console.log("Connected to a American socket. ")
    }
}

class EuropeanToAmericanPlugAdapter{
    constructor(europeanPlug){
        this.europeanPlug = europeanPlug
    }
    connectToAmericanSocket(){
        console.log("Adapter converting from European to American plug.");
        this.europeanPlug.connectToEuropeanSocket();
    }
}
const europeanPlug = new EuropeanPlug();

const adapter = new EuropeanToAmericanPlugAdapter(europeanPlug)

adapter.connectToAmericanSocket();