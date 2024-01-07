// Define a class that represents a resource-intensive object
class ResourceIntensiveObject {
    constructor() {
        console.log("ResourceIntensiveObject created (heavy operation simulated)");
        // Simulate a heavy operation like complex calculations, data loading, etc.
        this.data = this.loadData();
    }

    // Simulate a time-consuming data loading operation
    loadData() {
        // Simulate a time-consuming operation
        return "Data loaded";
    }

    // Method to display the loaded data
    display() {
        console.log("Displaying data:", this.data);
    }
}

// Define a virtual proxy class
class VirtualProxy {
    constructor() {
        this.resourceIntensiveObject = null;
    }

    // Initialize the resource-intensive object lazily when it's actually needed
    initialize() {
        if (!this.resourceIntensiveObject) {
            this.resourceIntensiveObject = new ResourceIntensiveObject();
        }
    }

    // Display data from the resource-intensive object
    display() {
        // Lazy initialization: Create the object only when it's actually needed
        this.initialize();
        this.resourceIntensiveObject.display();
    }
}

const proxy = new VirtualProxy();

console.log("Program started. ResourceIntensiveObject not created yet.");

// The ResourceIntensiveObject is created only when we call display for the first time.
proxy.display();  // This will initialize and display data
proxy.display(); // Second time already we are getting data without heavy load
