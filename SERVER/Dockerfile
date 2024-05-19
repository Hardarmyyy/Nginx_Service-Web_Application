# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /gracefulshutdown

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

RUN npm install pm2 -g

# Copy only the necessary files, excluding the 'node_modules' directory
COPY . .

RUN pm2 update

# Set environment variable for data persistence
ENV PORT=${PORT}
ENV MONGODB_URI=${MONGODB_URI}

# Make port available to the world outside this container
EXPOSE $PORT

# Run the command
CMD ["pm2-runtime", "ecosystem.config.js"]




