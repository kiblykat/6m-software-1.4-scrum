/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - (d) In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here
class BaseSignal {
    constructor(type){
        this.type = type;
        if(this.constructor.name === "BaseSignal"){
            throw new Error("This class cannot be instantiated");
        }
    }

    send = () => {          //Note: methods should be defined outside constructor!
        console.log(`Sending ${this.type} signal`)  //this.type refers to the type local to this object
    }
}
class TvSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("tv")     //pass "tv" as argument to super method in parent class
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("aircon")     //pass "aircon" as argument to super method in parent class
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("door")       //pass "door" as argument to super method in parent class
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"