# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /gracefulshutdown-frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy only the necessary files, excluding the 'node_modules' directory
COPY . .

RUN npm run build

# Set environment variable for data persistence
ENV VITE_API_URI=${VITE_API_URI}


