FROM node:20

WORKDIR /be
COPY package.json .
RUN yarn install
COPY . .
CMD yarn start