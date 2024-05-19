FROM nginx:alpine

#COPY ./gracefulshutdown.conf /etc/nginx/conf.d

COPY ./gracefulshutdown.conf /etc/nginx/conf.d/default.conf

# Expose on port 80
EXPOSE 80

# Run the command
CMD ["nginx", "-g", "daemon off;"]