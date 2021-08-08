FROM nginx:alpine as nginx
# COPY --from=uat /src/dist/ /var/www
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx","-g","daemon off;"]
EXPOSE 3000