// The Images class represents a data service for fetching image details.
class Images {
    constructor() {
      // Initialize with a set of image data.
      this.images = [
        { id: "1", fileName: "first.png" },
        { id: "2", fileName: "second.png" },
        { id: "3", fileName: "third.png" },
        { id: "4", fileName: "fourth.png" },
        { id: "5", fileName: "fiveth.png" },
      ];
    }
  
    // Method to get image data by ID.
    getImage(id) {
      console.log("----Fetching Image "); // Logging to indicate the action.
      return this.images.find((i) => i.id === id); // Returns the image object if found.
    }
  }
  
  // The ProxyImages class acts as a proxy to the Images class.
  class ProxyImages {
    constructor() {
      this.imagesDataService = new Images(); // Creates an instance of the Images class.
      this.cache = {}; // Initialize an object to cache the images.
    }
  
    // Method to get image data by ID using the proxy.
    getImage(id) {
      // Check if the image is already in cache.
      if (!this.cache[id]) {
        // If not in cache, fetch it from the Images service and cache it.
        const image = this.imagesDataService.getImage(id);
        this.cache[id] = image;
        return image; // Return the newly fetched image.
      }
      // Return the cached image.
      return this.cache[id];
    }
  }
  
  // Example usage of the ProxyImages class.
  const imageService = new ProxyImages();
  
  // Fetching images using the proxy. The first call fetches from the data service,
  // subsequent calls for the same ID will use the cached data.
  console.log(imageService.getImage("1").fileName); // Outputs: first.png
  console.log(imageService.getImage("2").fileName); // Outputs: second.png
  console.log(imageService.getImage("1").fileName); // Outputs: first.png (cached)
  console.log(imageService.getImage("3").fileName); // Outputs: third.png
  console.log(imageService.getImage("3").fileName); // Outputs: third.png (cached)
  