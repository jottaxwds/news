FROM node:12.12.0

WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD ["npm", "run", "start:dev"]