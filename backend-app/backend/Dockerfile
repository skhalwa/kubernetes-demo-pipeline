FROM node:16

WORKDIR /app

COPY package* ./

RUN npm install 

COPY . . 

RUN npm install -g pm2

EXPOSE 4000

CMD pm2 start index.js && pm2 logs
