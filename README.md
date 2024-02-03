# Dockerizing a React Application

## What is Docker?

Docker is an open-source project that streamlines the deployment of software applications inside containers. It provides an additional layer of abstraction and automates OS-level virtualization on Linux.
**In simpler terms, Docker is a platform that enables you to build, ship, and run applications consistently across various environments. It has become a standard way of addressing challenges in software deployment, offering a portable and scalable solution.**

## Terminology

- **Container:** A lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.

- **Image:** A read-only template that contains a set of instructions for creating a container. Images are used to create containers, and they can be shared and reused.

- **Dockerfile:** A text file containing instructions for building a Docker image. It defines the environment inside the container, such as the base image, dependencies, and configuration.

- **Atomic Host** is a small finely tuned OS image, Like Fedora Core OS that supports Container hosting and Atomic OS upgrades

- **Docker Compose File** is a tool for defining and managing multi-container Docker applications. A Docker Compose file is a YAML (Yet Another Markup Language) file specifying an application's services, networks, and volumes. It allows developers to define the entire application stack, including its dependencies, services, and configurations in a single file. With a Docker Compose file, you can easily spin up and manage complex applications with multiple interconnected containers.

## What is Docker Good For?

- **Packaging Software** You can build your image and be sure that it can run on any modern Linux machine

- **Reduce Debugging Overhead** You might have probably experienced countless bugs about a broken library, or an update gone wrong. Docker allows you to state clearly the steps for debugging a problem on a system with known properties making debugging and environment reproduction much simpler

- **Replace Virtual Machines** Docker can be used to replace the VMs if you only care about the application and not the operating system. Docker is also faster than VM to spin up and it's more lightweight to move around making it easy to share the filesystem.

## Demo

To Dockerize a React application, follow these general steps:

- Create a **Dockerfile**  in the root directory of your project
 
 - Add the code below 
```
# Set the base image to create the image for the React app
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy tailwind.config and postcss.config files from the build context into the current working directory of the Docker image.
COPY tailwind.config.js postcss.config.js ./

# Install app dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Command to run the app
CMD npm run dev
```

2. **Build the Docker Image:**
   Run the following command in the same directory as your Dockerfile to build the Docker image.

   ```bash
   docker build -t your-image-name .
   ```

3. **Run the Docker Container:**
   Once the image is built, you can run a container based on that image.

   ```bash
   docker run -p 5173:5173 your-image-name
   ```

   This will start your React application inside a Docker container, and you can access it at http://localhost:5173.

## Docker Compose

[Docker Compose](https://docs.docker.com/compose/) is a tool for defining and managing multi-container Docker applications. It allows you to define the services, networks, and volumes for your application in a single `docker-compose.yml` file, making it easy to manage complex setups.

### Using Docker Compose with Your React Application

To use Docker Compose with your React application, follow these steps:

1. Create a `docker-compose.yml` file in the root directory of your project.

2. Add the following code to the `docker-compose.yml` file:

   ```
   version: '3'
   services:
     react-app:
       build:
         context: .
         dockerfile: Dockerfile
       ports:
         - "5173:5173"
 ### This configuration defines a service named react-app based on the Dockerfile in the current context, and it maps port 5173 from the container to port 5173 on the host.
1. **Save the `docker-compose.yml` file.**

2. **Running Your Dockerized React Application with Docker Compose:**
   ```bash
   docker-compose up --build
3. **Access Your React Application:**
  Open your web browser and go to http://localhost:5173 to access your Dockerized React application.
4. **Stopping the Containers:**
When you're done, you can stop the running containers:
```
docker-compose down
```

## Tech Stack

**Client:** React, TailwindCSS

## Project Demo
[woofs&purrs](https://pet-ruby.vercel.app/)
## Image Credits
- [pixabay](https://pixabay.com/)
- [unsplash](https://unsplash.com/)
- [freepik](https://www.freepik.com/)

## README

### Dockerizing Your React Application

To dockerize your React application, follow the steps outlined in the demo section above. This will help you encapsulate your application and its dependencies, making it easier to deploy consistently across different environments.

### Running the Dockerized Application

1. **Build the Docker Image:**
   ```bash
   docker build -t your-image-name .
   ```

2. **Run the Docker Container:**
   ```bash
   docker run -p 5173:5173 your-image-name
   ```

   Access your Dockerized React application at http://localhost:5173.

