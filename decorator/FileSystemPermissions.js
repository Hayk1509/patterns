// Basic File class

class File {
    constructor(name){
        this.name = name
    }
    open(){
        console.log(`Opening ${this.name}`)
    }
    close(){
        console.log(`Closenf ${this.name}`)
    }
}

//Decorator Base Class for File

class FileDecorator {
    constructor(file){
        this.file = file;
    }
    open(){
        this.file.open()
    }
    close(){
        this.file.close()
    }
}

//Read Permission Decorator

class ReadPermissionDecorator extends FileDecorator {
    open(){
        console.log(`Reading ${this.file.name}`);
        super.open();
    }

    // Additional read-specific method can be added here
}

//Write Permission Decorator

class WritePermissionDecorator extends FileDecorator{
    write(data){
        console.log(`Writing to ${this.file.name}: ${data}`)
    }
}

// Execute Permission Decorator

class ExecutePermissionDecorator extends FileDecorator {
    execute(){
        console.log(`Executing ${this.file.name}`)
    }
}

// Creating a basic file
let myFile = new File("example.txt");
myFile.open();
myFile.close();

// Adding read permission to the file
myFile = new ReadPermissionDecorator(myFile);

// Now the file has read permissions
myFile.open(); // Includes reading operation
myFile.close();

// Adding write permission to the file
myFile = new WritePermissionDecorator(myFile);

// Now the file has both read and write permissions
myFile.write("Hello, World!"); // Write operation

// Adding execute permission to the file
myFile = new ExecutePermissionDecorator(myFile);

// Now the file has read, write, and execute permissions
myFile.execute(); // Execute operation
