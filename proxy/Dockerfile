FROM nginx:alpine as nginx
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx","-g","daemon off;"]
EXPOSE 3000