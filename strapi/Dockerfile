FROM strapi/base as base
ARG APP_TINY_MCE_KEY
ENV APP_TINY_MCE_KEY=${APP_TINY_MCE_KEY}
WORKDIR /app
COPY ./package*.json ./
RUN npm ci
COPY . .
RUN npm --prefix ./plugins/wysiwyg install
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]

FROM base as dev
ENV NODE_ENV development
RUN npm i -g strapi
CMD ["strapi", "develop"]

FROM base as prod
ENV NODE_ENV production
CMD ["npm", "start"]
