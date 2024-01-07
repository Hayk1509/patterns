// Simulates a network resource class
class NetworkResource {
    constructor() {
        this.data = {
            'url1': 'Data from url1',
            'url2': 'Data from url2',
            // ... more data
        };
    }

    // Method to fetch data from the network
    fetchData(url) {
        console.log(`Fetching data from ${url}`);
        return this.data[url] || 'Not Found';
    }
}

// Proxy class for the NetworkResource
class NetworkProxy {
    constructor() {
        this.networkResource = new NetworkResource();
        this.cache = {};  // Initialize an object to cache the data.
    }

    // Proxy method to fetch data
    fetchData(url) {
        // Check if the data for the given URL is already in cache
        if (!this.cache[url]) {
            console.log(`Data for ${url} not in cache. Fetching from network...`);
            this.cache[url] = this.networkResource.fetchData(url);
        } else {
            console.log(`Data for ${url} found in cache.`);
        }
        return this.cache[url];
    }
}

// Usage
const proxy = new NetworkProxy();

// First time: data is fetched from the network and cached
console.log(proxy.fetchData('url1')); // Fetching from network

// Second time: data is fetched from the cache
console.log(proxy.fetchData('url1')); // Fetching from cache

// Fetching a different URL
console.log(proxy.fetchData('url2')); // Fetching from network
