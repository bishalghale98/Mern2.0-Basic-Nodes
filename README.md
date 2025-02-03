# Basic Nodes

This is a basic Node.js project for managing books using Express and MongoDB.

## Project Structure

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd Basic Nodes
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Project

1. Start the server:
    ```sh
    npm start
    ```
2. The server will run on `http://localhost:3000`.

## API Endpoints

### Create a Book

- **URL:** `/book`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "bookName": "Book Name",
        "bookPrice": 100,
        "isbnNumber": 1234567890,
        "authorName": "Author Name",
        "publishedAt": "2023-01-01",
        "publication": "Publication Name"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Book added successfully"
    }
    ```

### Read All Books

- **URL:** `/book`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "message": "All books",
        "data": [ ... ]
    }
    ```

### Read a Single Book

- **URL:** `/book/:id`
- **Method:** `GET`
- **Response:**
    ```json
    {
        "message": "Single book",
        "data": { ... }
    }
    ```

### Delete a Book

- **URL:** `/book/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
        "message": "Book deleted successfully"
    }
    ```

## Notes

- The connection string for MongoDB is located in [index.js](http://_vscodecontentref_/5).
- The book model is defined in [bookModel.js](http://_vscodecontentref_/6).

## License

This project is licensed under the ISC License.

