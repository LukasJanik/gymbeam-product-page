FROM node:alpine

WORKDIR /app

COPY ./package.json  ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

#WORKDIR /cache
#
## install app dependencies
#COPY package.json .
#COPY package-lock.json .
#RUN npm install --silent
#
#WORKDIR /app
#ENV PATH /app/node_modules/.bin:$PATH
#COPY FE .