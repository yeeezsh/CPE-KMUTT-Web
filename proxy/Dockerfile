# COPY nginx.conf /etc/nginx/nginx.conf
FROM nginx:1.23.3 as base
RUN apt-get update && apt-get install -y certbot python3-certbot-nginx cron

FROM base as nginx
COPY default.conf /etc/nginx/conf.d/
EXPOSE 80 443
# RUN echo "0 0 1 * * certbot renew && docker kill -s HUP nginx-certbot" >>/etc/crontab
RUN echo "0 0 1 * * certbot renew && docker kill -s HUP nginx-certbot" >>/etc/crontab
CMD ["sh", "-c", "certbot certonly --standalone -d cpe.kmutt.ac.th --email admin@cpe.kmutt.ac.th --noninteractive --agree-tos && cron && nginx -g \"daemon off;\""]

# CMD ["sh", "-c", "certbot certonly --nginx -d cpe.kmutt.ac.th --email admin@cpe.kmutt.ac.th --noninteractive --agree-tos && cron && nginx -g \"daemon off;\""]
