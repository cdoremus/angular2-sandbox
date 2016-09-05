# Dockerfile
#
# Building and running this application in nginx.
#
# Based on: http://queirozf.com/entries/angular-2-app-running-on-nginx-on-docker-a-simple-example
#
# To start a docker container and build an image with this application, run:
# docker build -t ng2-dynamic-form .
#
# To start the application
# docker run -p 80:80 -it ng2-dynamic-form
#
# Navigate to http://localhost:80
#
# To cleanup the container:
# docker rm <container_id>
# The container id can be obtained by running the command: docker ps -a
#
# Once tne container is removed, delete the image:
# docker rmi ng2-dynamic-form
# (You also might want to remove the nginx image too)
#
FROM nginx
COPY dist /usr/share/nginx/html
EXPOSE 80
