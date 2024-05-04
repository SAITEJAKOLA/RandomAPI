# RandomAPI

RandomIdeas API is a simple API built using Express.js and MongoDB for managing random ideas.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Install dependencies:

   ```bash
    npm install

3. Set up environment variables:Create a .env file in the root directory and add the following:

    Make file.
    MONGOOSE_URI=<your-mongodb-uri>
    PORT=<port-number>

## Usage
1. To start the server, run:

    ```bash
    npm install
    This will start the server at the specified port.

## Endpoints
1. GET /
    - Returns a welcome message.

2. GET /api/ideas
    - Returns all ideas stored in the database.

3. GET /api/ideas/:id
    - Returns a single idea with the specified ID.

4. POST /api/ideas
    - Adds a new idea to the database.
    - Request Body: 
        {
            "text": "Your idea text",
            "tag": "Optional tag",
            "username": "Your username"
        }

5. PUT /api/ideas/:id
    - Updates an existing idea with the specified ID.
    - Request Body:
        {
            "text": "Updated idea text",
            "tag": "Updated tag"
        }

6. DELETE /api/ideas/deleteidea/:id
    - Deletes an idea with the specified ID from the database.

## Database Schema
    - The API uses the following MongoDB schema for storing ideas:
        const IdeaSchema = new mongoose.Schema({
        text: {
            type: String,
            required: [true, 'Please add a text field'],
        },
        tag: {
            type: String,
        },
        username: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now(),
        },
        });
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
    - SAI TEJA KOLA