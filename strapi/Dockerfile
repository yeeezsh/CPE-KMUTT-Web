FROM strapi/base as base
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
CMD ["npm", "start", "develop"]

FROM base as prod
ENV NODE_ENV production
CMD ["npm", "start"]
