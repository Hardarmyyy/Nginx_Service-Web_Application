# Use an official Node.js runtime as a parent image
FROM node:20-alpine AS client-development

# Set the working directory in the container
RUN mkdir /gracefulshutdown-frontend && chown node:node /gracefulshutdown-frontend
WORKDIR /gracefulshutdown-frontend
USER node

# Copy package.json and package-lock.json to the working directory
RUN mkdir -p node_modules
COPY --chown=node:node package*.json package*.json ./

# Install app dependencies
RUN npm install --silent

FROM node:20-alpine AS client-builder
USER node
WORKDIR /gracefulshutdown-frontend

# Copy only the necessary files
COPY --from=client-development /gracefulshutdown-frontend/node_modules node_modules
COPY . .
USER root
RUN npm run build

# Set args and environment variable 
ARG VITE_API_URI

ENV VITE_API_URI=${VITE_API_URI}



