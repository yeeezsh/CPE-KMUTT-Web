FROM strapi/base
WORKDIR /app
RUN npm --prefix ./plugins/wysiwyg install
COPY ./package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
RUN npm run build
EXPOSE 1337
CMD ["npm", "start"]
