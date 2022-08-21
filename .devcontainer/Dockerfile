ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}
WORKDIR /workspaces/5e-frontend
RUN npm install @mui/joy \
                @emotion/react \
                @emotion/styled \
                next \
                react \
                react-dom
RUN npm install  --save-dev @types/node \
                            @types/react \
                            @types/react-dom \
                            autoprefixer \
                            eslint \
                            eslint-config-next \
                            postcss \
                            typescript
