ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
WORKDIR /workspaces/5e-frontend
RUN npm install axios express @types/express pug
RUN npm install concurrently gts nodemon typescript ts-node --save-dev
