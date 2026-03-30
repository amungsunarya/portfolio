# ===== BUILD STAGE =====
FROM node:18-alpine as build

WORKDIR /app

# copy package dulu (biar clean install)
COPY package*.json ./

RUN npm install

# baru copy source
COPY . .

# FIX permission vite
RUN chmod -R 755 node_modules/.bin

# build
RUN npm run build

# ===== PRODUCTION STAGE =====
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]