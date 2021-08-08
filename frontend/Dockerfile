FROM node:14-slim as base
COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install

FROM base as dev
ADD . .
CMD ["yarn", "dev"]
EXPOSE 3000

FROM base as uat
ADD . .
RUN yarn build
CMD ["yarn", "start"]