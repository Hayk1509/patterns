class ConfigurationManager {
    constructor() {
        if (ConfigurationManager.instance instanceof ConfigurationManager) {
            return ConfigurationManager.instance;
        }

        this.settings = {};
        ConfigurationManager.instance = this;
    }

    // Method to get a configuration value
    get(key) {
        return this.settings[key] || null;
    }

    // Method to set a configuration value
    set(key, value) {
        this.settings[key] = value;
    }
}
// Creating an instance of ConfigurationManager
const configManager1 = new ConfigurationManager();

// Setting a configuration value
configManager1.set("apiBaseUrl", "http://api.example.com");

// Getting the previously set configuration value
console.log(configManager1.get("apiBaseUrl"));  // Output: http://api.example.com

// Creating another instance of ConfigurationManager
const configManager2 = new ConfigurationManager();

// The second instance is the same as the first one
console.log(configManager2.get("apiBaseUrl"));  // Output: http://api.example.com

// The first and second instances are the same object
console.log(configManager1 === configManager2);  // Output: true
