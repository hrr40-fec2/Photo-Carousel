FROM node:12.2.0-alpine

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app source code
COPY . .

# start app
CMD ["npm", "run", "seed-server-start"]