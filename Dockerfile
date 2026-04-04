FROM node:22.14.0-alpine3.20 AS deps
RUN apk update && apk upgrade --no-cache
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts && npm cache clean --force

FROM node:22.14.0-alpine3.20 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build && find dist -name "*.map" -type f -delete

FROM nginx:1.26.0-alpine AS runner
RUN apk update && apk upgrade --no-cache && apk add --no-cache wget && rm -rf /var/cache/apk/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html && chown -R nginx:nginx /var/cache/nginx && touch /var/run/nginx.pid && chown nginx:nginx /var/run/nginx.pid
USER nginx
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=3 CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1
CMD ["nginx", "-g", "daemon off;"]
