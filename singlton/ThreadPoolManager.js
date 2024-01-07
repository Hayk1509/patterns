class ThreadPoolManager {
    constructor(poolSize) {
        if (!ThreadPoolManager.instance) {
            this.poolSize = poolSize;
            this.taskQueue = [];
            ThreadPoolManager.instance = this;
        }

        return ThreadPoolManager.instance;
    }

    // Method to add a task to the queue
    addTask(task) {
        if (this.taskQueue.length < this.poolSize) {
            this.taskQueue.push(task);
            console.log(`Task added. Queue size: ${this.taskQueue.length}`);
        } else {
            console.log("Task queue is full. Please wait.");
        }
    }

    // Method to execute all tasks in the queue
    executeAll() {
        while (this.taskQueue.length > 0) {
            const task = this.taskQueue.shift();
            task(); // Execute the task
        }
        console.log("All tasks executed.");
    }
}

// Singleton instance creation
const threadPoolManager = new ThreadPoolManager(2);
Object.freeze(threadPoolManager);
// Example tasks
const task1 = () => console.log("Executing task 1");
const task2 = () => console.log("Executing task 2");
const task3 = () => console.log("Executing task 3");

// Adding tasks to the thread pool
threadPoolManager.addTask(task1);
threadPoolManager.addTask(task2);
threadPoolManager.addTask(task3); // This will not be added as the pool size is 2

// Executing all tasks
threadPoolManager.executeAll();

// Trying to create another instance of ThreadPoolManager
const anotherThreadPoolManager = new ThreadPoolManager(3);
console.log(anotherThreadPoolManager === threadPoolManager); // Output: true
