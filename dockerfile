FROM node:20.5.0-alpine3.18 AS build
WORKDIR /app
COPY . .
# ---------
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
# ------------------
RUN npm install && npm run build


FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80