// Simulates a database connection class
class DatabaseConnection {
    executeQuery(query) {
        console.log(`Executing query: ${query}`);
        // Simulate query execution
        return `Results for ${query}`;
    }
}

// Proxy class for the DatabaseConnection
class DatabaseProxy {
    constructor() {
        this.databaseConnection = new DatabaseConnection();
    }

    executeQuery(query) {
        console.time(`QueryTime`); // Start timing the query execution
        console.log(`Logging query: ${query}`); // Log the query
        const result = this.databaseConnection.executeQuery(query); // Execute the query
        console.timeEnd(`QueryTime`); // End timing and log execution time
        return result;
    }
}

// Usage
const dbProxy = new DatabaseProxy();

// Execute a query
console.log(dbProxy.executeQuery('SELECT * FROM users'));
