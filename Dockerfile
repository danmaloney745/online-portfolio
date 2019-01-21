FROM node:8

WORKDIR /usr/src/app

# Create app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]