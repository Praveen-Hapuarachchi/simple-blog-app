# Step 1: Build the app using Node.js
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

# Copy the rest of your front-end files
COPY . .

# Build the React app
RUN npm i && npm run build

# Serve the static files using Nginx
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build folder to Nginx's public directory
COPY --from=build /app/build .

# Expose the frontend port
EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]