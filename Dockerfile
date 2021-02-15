FROM node:12-alpine
WORKDIR /usr/src/app
COPY . .

ENV TZ Asia/Tokyo
ENV NODE_ENV production
RUN npm install

ENV HOST 0.0.0.0

CMD ["npm", "run", "start"]
