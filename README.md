# Dockerizing a React Application

## What is Docker?

Docker is an open-source project that streamlines the deployment of software applications inside containers. It provides an additional layer of abstraction and automates OS-level virtualization on Linux.
In simpler terms, Docker is a platform that enables you to build, ship, and run applications consistently across various environments. It has become a standard way of addressing challenges in software deployment, offering a portable and scalable solution.

## Terminology

- **Container:** A lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.

- **Image:** A read-only template that contains a set of instructions for creating a container. Images are used to create containers, and they can be shared and reused.

- **Dockerfile:** A text file that contains a set of instructions for building a Docker image. It defines the environment inside the container, such as the base image, dependencies, and configuration.
- **Atomic Host** is a small finely tuned OS image , Like Fedora Core OS that supports Container hosting and Atomic OS upgrades

## Demo

To Dockerize a React application, follow these general steps:
```
# set the base image to create the image for the React app
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

## Tech Stack

**Client:** React, TailwindCSS

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

