class UserSessionManager {
    constructor() {
        if (!UserSessionManager.instance) {
            this.currentUser = null;
            UserSessionManager.instance = this;
        }

        return UserSessionManager.instance;
    }

    // Method to log in a user (set the current user)
    loginUser(userId) {
        this.currentUser = userId;
        console.log(`User ${userId} logged in.`);
    }

    // Method to log out the current user
    logoutUser() {
        console.log(`User ${this.currentUser} logged out.`);
        this.currentUser = null;
    }

    // Method to get the currently logged-in user
    getCurrentUser() {
        return this.currentUser;
    }
}

// Ensure that the UserSessionManager instance cannot be modified
const userSessionManager = new UserSessionManager();
Object.freeze(userSessionManager);
// Logging in a user
userSessionManager.loginUser("user123");

// Checking the current user
console.log(`Current User: ${userSessionManager.getCurrentUser()}`); // Output: Current User: user123

// Trying to create a new instance, which should be the same as the existing one
const anotherSessionManager = new UserSessionManager();
console.log(anotherSessionManager === userSessionManager); // Output: true

// Logging out the user
userSessionManager.logoutUser();

// Checking the current user after logout
console.log(`Current User: ${userSessionManager.getCurrentUser()}`); // Output: Current User: null
