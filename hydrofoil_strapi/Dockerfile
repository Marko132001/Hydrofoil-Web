#FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
#RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
#WORKDIR /opt/
#COPY ./package.json ./yarn.lock ./
#ENV PATH /opt/node_modules/.bin:$PATH
#RUN yarn config set network-timeout 600000 -g && yarn install
#WORKDIR /opt/app
#COPY ./ .
#RUN yarn build
#EXPOSE 1337
#CMD ["yarn", "develop"]

FROM node:16-alpine
# Installing libvips-dev for sharp Compatability
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

# where our Strapi app will live
RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

# Copy package.json and package-lock.json
# to the /app working directory
COPY ./hydrofoil_strapi/package*.json ./hydrofoil_strapi/yarn.lock /app/
COPY ./hydrofoil_strapi/.env /app/

ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies in /app
RUN yarn config set network-timeout 600000 -g && yarn install

# Copy the rest of our Strapi folder into /app
COPY ./hydrofoil_strapi /app

EXPOSE 1337

# Build Strapi admin
RUN yarn build

# Run yarn dev, as we would via the command line 
CMD ["yarn", "develop"]
