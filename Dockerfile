FROM node:18-alpine as builder

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine
RUN adduser --system --uid 1001 nextjs
RUN addgroup --system --gid 1001 nodejs

COPY --from=builder --chown=nextjs:nodejs ./.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs ./public ./public

USER nextjs
ENV NODE_ENV production

CMD ["npm", "start"]