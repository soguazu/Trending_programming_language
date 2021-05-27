FROM node:12.18.3

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
# 
# CMD [ "yarn", "start" ]
