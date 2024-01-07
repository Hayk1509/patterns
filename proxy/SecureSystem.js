// Define the SecureSystem class, which holds sensitive information
class SecureSystem {
    constructor(){
        this.information = {
            userName: "Hayk",
            password: "13654987",
            bankAccount:{
                number: "1234 5678 9874 5698",
                name: "Hayk Saruxanyan",
                cvv: "999"
            },
            image:"someImage.png"
        }
    }

    // Method to get the information from the secure system
    getInformation(){
        return this.information;
    }
}

// Define the ProxySystem class, which acts as a proxy to control access to sensitive information
class ProxySystem{
    constructor(adminType){
        this.secureFiles = new SecureSystem();
        this.adminType = adminType;
    }

    // Method to get information, but with access control based on admin type
    getInformation(){
        if(this.adminType === "admin"){
            return this.secureFiles.getInformation();
        }
        return "You don't have access to this type of information";
    }
}

// Create instances of ProxySystem for admin and user
const admin = new ProxySystem("admin");
const user = new ProxySystem("user");

// Test accessing information through the proxy system
console.log(admin.getInformation()); // Access granted for admin
console.log(user.getInformation());  // Access denied for user
