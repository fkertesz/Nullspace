# Use an official node runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install a simple server to serve the React app
RUN npm install -g serve

# Set the command to run the server
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000