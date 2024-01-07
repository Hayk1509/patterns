// Class representing a data structure
class DataObject {
    constructor() {
        this.name = '';
        this.age = 0;
    }
}

// Proxy class for DataObject
class DataProxy {
    constructor() {
        this.dataObject = new DataObject();
    }

    set(property, value) {
        // Add validation logic
        if (property === 'age' && (typeof value !== 'number' || value < 0)) {
            throw new Error('Invalid age value');
        }

        console.log(`Setting ${property} to ${value}`);
        this.dataObject[property] = value;
    }

    get(property) {
        console.log(`Getting ${property}`);
        return this.dataObject[property];
    }
}

// Usage
const dataProxy = new DataProxy();

// Setting and getting values
dataProxy.set('name', 'John Doe');
console.log(dataProxy.get('name'));

// Throws an error for invalid age
try {
    dataProxy.set('age', -5);
} catch (e) {
    console.error(e.message);
}
