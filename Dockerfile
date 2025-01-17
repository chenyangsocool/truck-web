FROM nginx:alpine
COPY dist /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d
EXPOSE 8080