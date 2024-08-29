ENV GOOGLE_CLOUD_LOGS_BUCKET_BEHAVIOR=CLOUD_LOGGING_ONLY

FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/_next /app/_next
COPY --from=builder /app/public /app/public

CMD ["npm", "start"]