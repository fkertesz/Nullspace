# Running Locally for Development

` npm install --save`

` npm start`

Open localhost:3000 in browser.

# Building Image and Runnign with Docker

`docker build -f Dockerfile -t vectorspaceapp:latest . `

` docker run -dp 8000:3000 --name react-container vectorspaceapp:latest`

Open localhost:8000 in browser.
