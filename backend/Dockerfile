FROM node:14-slim AS dev
COPY package.json package.json 
COPY yarn.lock yarn.lock 
RUN yarn install
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000



FROM node:14-slim AS build
COPY package.json package.json 
COPY yarn.lock yarn.lock 
RUN yarn install
COPY . .
CMD ["yarn", build]
