# Fetching the latest node image on alpine linux
FROM node:alpine


# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm install

# Copying all the files in our project
COPY . .

# Starting our application
CMD ["npm","start"]

# Expose port 3000
EXPOSE 3000