
#Build a node image

FROM node:16.14.0


# Create a working directory

WORKDIR /usr/src/app


COPY package*.json ./


# Install dependencies

RUN npm install


# Clone all the repo

COPY . .

# update 

RUN apt-get update

# install vim

RUN apt-get install vim


EXPOSE 8080



CMD ["npm", "start"]
