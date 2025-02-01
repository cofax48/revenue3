FROM node:alpine3.11

# Create an application directory
RUN mkdir -p /app

# The /app directory should act as the main application directory
WORKDIR /src/frontend

# Copy the app package and package-lock.json file
COPY package.json /src/frontend

# Install node packages
RUN npm install

# Copy or project directory (locally) in the current directory of our docker image (/app)
COPY . /src/frontend

ENV CHOKIDAR_USEPOLLING=true

# Build the app
RUN yarn build

RUN yarn global add serve

# We use a varibale here as the port is something that can differ on the environment.
EXPOSE 3000

CMD ["serve", "-s", "build"]