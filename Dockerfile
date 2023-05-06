FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN git submodule update --init

EXPOSE 8080

CMD ["npm", "start"]
