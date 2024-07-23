 # Documentation of Three Tier Application Deployment using Docker-compose
 
   -  Welcome to the documentation of a three tier application named PNP built using the MERN stack (MongoDB, Express, React, Node.js) with a Vite frontend project. This document will guide you through the key features and functionalities of the application and deployment on dockerhub using docker compose.

   - Website URL: https://satyr-master-gnat.ngrok-free.app/

   ### Table of Contents
   - 🔗 Introduction
   - 🔗 Tech Stack
   - 🔗 Key Features
   - 🔗 Getting Started
   - 🔗 Installation
   - 🔗 Usage
   - 🔗 Deployment
   - 🔗 Contributing
   - 🔗 License
 
---

###  Introduction

- This application is a simple web application that allows user to add profiles, update profiles and view all profiles that have been added to the system. The entire application is packaged in docker containers and deployed using docker compose.  

- <img src="./CLIENT//public//Landing Page screenshot.png">

---

### Tech Stack

[![My Skills](https://skillicons.dev/icons?i=js,react,redux,nodejs,express,mongodb,nginx,docker)](https://skillicons.dev)

---

### Key Features

  - [x] Fully **responsive design** to provide optimal user experience on various devices.
  - [x] Implemented **redux** throughout the project to ensure centralized store for data integrity and usage by all component.
  - [x] Implemented **input validation at the front-end**  to enhance data integrity and security.
  - [x] Packaging the application in docker containers for deployment.

---

###  Getting Started
 -  To get started with the application, follow these steps:

## ⚙ Installation

👉1: Ensure you have docker and docker-compose installed on your machine(Ubuntu or Windows Subsystem for Linux(WSL)):

👉2: Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/Hardarmyyy/Nginx_Service-Web_Application
```

👉3: Install the required dependencies for the frontend:

```bash
cd CLIENT
npm install
```

👉4: Create a .env file in the CLIENT directory and add the following variables:

```bash
cd CLIENT
touch .env
# Paste the following in the .env file
VITE_API_URI==<Your backend-server URL>
```

👉5: Install the required dependencies for the backend:

```bash
cd SERVER
npm install
```

👉6: Create a .env file in the SERVER directory and add the following variables:

```bash
cd SERVER
touch .env
# Paste the following in the .env file
MONGODB_URI=<Your MongoDB Cluster Connection URI> # Register on mongodb atlas to get a MongoDB cluster coonection URI
PORT=<Your desired port number>
```

👉7: Create a .env file in the root directory for docker-compose and add the following variables:

```bash
touch .env
# Paste the following in the .env file
MONGODB_URI=<Your MongoDB Cluster Connection URI>
PORT=<Your desired port number>
VITE_API_URI=<your server url>
WEBPORT=<external port for the nginx service> # Ex: 80
USERNAME=<your dockerhub username> # Ex: dockerhub
```
---

### Usage 

#### Building the docker images for the application

```bash
# Run the cmd below to add the current user to the docker group
sudo usermod -aG docker $USER
# Run the cmd below in the root directory
docker-compose --env-file .env build
```
#### Deploying the docker images to dockerhub registery

```bash
# Login to docker registry website to generate your token and copy the token
# Account -> Account settings -> security -> New access token
# Run the cmd below to login your docker credentails
docker login
# Enter your username and use the generated token as password to login
# After login, run the cmd below in the root directory to push the images to dockerhub
docker-compose push
```
### Deployment

### In the root directory, create a folder named CONFIG and add the below nginx configuration file inside the CONFIG folder

```bash
# Run the cmd below in the root directory
mkdir CONFIG
cd CONFIG
touch gracefulshutdown.conf

# copy the below configuration inside the gracefulshutdown.conf file
server {
    listen       80; 
    listen  [::]:80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    root   /usr/share/nginx/html/;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass   http://server:4000;
    }

}

server {
    listen       80; 
    listen  [::]:80;
    server_name proxy.localhost;

    location / {
        proxy_pass http://proxy_manager:81;
    }
}

```

#### Staring the application with docker-compose in detached mode

```bash
# Run the cmd below in the root directory
docker-compose up -d 
```

#### Accessing the application

    NOTE: If your WEBPORT environment variable in the .env file is 80

👉 - Visit http://localhost OR http://<your public ip address> to access the frontend 

👉 - Visit http://localhost/api  OR http://<your public ip address/api> to access the backend

👉 - Visit http://proxy.localhost  OR http://<proxy.your public ip address> to access the npm proxy manager

---

### Contributing

Contributions are welcome! Please open an issue if you have any questions or suggestions. Your contributions will be acknowledged. Contact me for more information.

---

### License

Licensed under the MIT License. Check the [LICENSE](./LICENSE) file for details.

<h4>If you're interested in showing your support for my efforts, please consider giving a ⭐ star to my repository. Alternatively, you're welcome to get in touch with me, and we can share a coffee together ☕️❤️‍🔥.</h4>