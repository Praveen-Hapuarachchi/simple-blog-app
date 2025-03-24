# Use Node.js as the base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the back-end files
COPY . .

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["npm", "run", "start"]