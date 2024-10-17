# Prazska kaviaren

React website

## Installation

First you need to install Node. To do so run the following commands in terminal:

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

After installing go to the root directory: 
```bash
cd /path/to/kaviaren
```
and install the requirements:
```bash
npm install
```

## Running the server

To run the local server with the hosted website run the following command inside the root directory of the project:

```bash
npm run dev
```

## Building the static site

To build the static website run the following command inside the root directory of the project:

```bash
npm run build
```

This builds the static site inside the `dist` folder. Inside you can open `index.html` file and you should see the website.
