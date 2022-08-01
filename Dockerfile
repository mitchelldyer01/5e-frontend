FROM node:18-alpine as builder
WORKDIR /usr/app
COPY package*.json .
COPY tsconfig.json .
RUN npm install
COPY . ./
RUN npm run build

FROM node:18-alpine as cleaner
WORKDIR /usr/app
COPY --from=builder /usr/app/package*.json .
COPY --from=builder /usr/app/build .
RUN npm install --only=production

FROM gcr.io/distroless/nodejs:18 as runtime
WORKDIR /usr/app
COPY --from=cleaner /usr/app .
USER 1000
CMD ["/usr/app/src/index.js"]