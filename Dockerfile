FROM node:latest AS build

# Create a user and group
RUN groupadd -r server && useradd -r -g server server

WORKDIR /srv/dist

# Build the app to the dist folder
COPY --chown=server:server . .
RUN yarn install
RUN yarn build

# Run the app
ENTRYPOINT [ "yarn", "start" ]
