# Simple Blog Backend

This is the backend for a simple blog application. It provides RESTful APIs for managing blog posts, user authentication, and other related functionalities.

## Features

- User authentication (JWT-based)
- CRUD operations for blog posts
- MongoDB as the database
- Environment variables for configuration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance (local or cloud)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/simple-blog-backend.git
    cd simple-blog-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```properties
    PORT=5000
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:5000`.

### API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/posts` - Get all blog posts
- `POST /api/posts` - Create a new blog post
- `GET /api/posts/:id` - Get a single blog post
- `PUT /api/posts/:id` - Update a blog post
- `DELETE /api/posts/:id` - Delete a blog post

## License

This project is licensed under the MIT License.
