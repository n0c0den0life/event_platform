const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://n0c0den0life:PDBbv0CcWerEkR25@codefridays.jpm2uno.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

        // // Specify the database and collection
        // const db = client.db("codefridays");  // Replace 'test' with your database name
        // const collection = db.collection("users");  // Replace 'items' with your collection name

        const db = client.db("CodeFridays");  // Replace 'test' with your database name
        // const collection = "users"  // Replace 'items' with your collection name
        const collection = db.collection("users");  // Replace 'items' with your collection name


        // Create a new user

        const newUser = {
            clerkId: 'clerk-999',
            email: 'Deified@gmail.com',
            username: 'Abstract',
            firstName: 'Jake',
            lastName: 'Nolife',
            photo: 'https://cdn.dribbble.com/users/1175/screenshots/11481069/media/0e9e0b4d2a8c9f9e3c3f0a5b7b6c5d7b.png?compress=1&resize=400x300',
        };

        // Insert the new item into the collection
        const result = await collection.insertOne(newUser);
        console.log(`Successfully inserted item with _id: ${result.insertedId}`);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
        console.log("Disconnected from Atlas");
    }
}

run().catch(console.dir);
