FROM node:18-alpine 
MAINTAINER raju
WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

EXPOSE 8000

CMD ["nodemon", "src/index.js"]


