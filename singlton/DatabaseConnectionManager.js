class DatabaseConnectionManager {
    constructor() {
        if (DatabaseConnectionManager.instance) {
            return DatabaseConnectionManager.instance;
        }

        this.connection = this.createConnection();
        DatabaseConnectionManager.instance = this;
    }

    // Simulates the creation of a database connection
    createConnection() {
        // Here, we would normally put code to initialize a database connection.
        // For this example, let's just simulate a connection object.
        return { status: 'Connected', id: Math.random() };
    }

    // Method to get the database connection
    getConnection() {
        return this.connection;
    }
}

// Ensuring the instance is not modifiable
Object.freeze(DatabaseConnectionManager);
// Creating the first instance of DatabaseConnectionManager
const dbManager1 = new DatabaseConnectionManager();
console.log(dbManager1.getConnection());  // Output: e.g., { status: 'Connected', id: 0.12345 }

// Trying to create a second instance
const dbManager2 = new DatabaseConnectionManager();
console.log(dbManager2.getConnection());  // Output: the same connection object as dbManager1

// Checking if both instances are the same
console.log(dbManager1 === dbManager2);  // Output: true
