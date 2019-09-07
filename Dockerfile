FROM

WORKDIR

ENV

COPY package.json
RUN npm install

CMD ["npm", "start"]