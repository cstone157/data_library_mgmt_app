# To build the docker image $ docker build -f Dockerfile --tag data_library_backend:latest .
# To run the docker image   $ docker run data_library_backend
# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /express-docker

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "npm", "start" ]

# Exposing server port
EXPOSE 5000