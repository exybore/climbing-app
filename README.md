<div align="center">
  <img src="./public/img/logo-large.png" alt="Highest logo" height="150">
  <h3>🧗‍ Your climbing best friend</h3>
  <a href="https://highest.netlify.app">App</a> — <a href="https://highest-dev.netlify.app">Beta app</a> — <a href="https://github.com/highest-app">GitHub</a> — <a href="https://trello.com/b/jymDf16G/highest-client">Trello</a>
  <br>
  <a href="https://app.netlify.com/sites/highest/deploys">
    <img src="https://api.netlify.com/api/v1/badges/7dc9a45b-de70-46bd-b876-2909f9a483e3/deploy-status" alt="Netlify Status"/>
  </a>
  <a href="https://www.codacy.com/manual/exybore/Highest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=highest-app/highest&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/b12f922e68ee491982dd1f2e3df24812" alt="Codacy Badge"/>
  </a>
  <a href="https://github.com/highest-app/highest/blob/master/.LICENSE">
    <img src="https://img.shields.io/github/license/highest-app/highest" alt="License"/>
  </a>
  <a href="https://github.com/highest-app/highest/issues">
    <img src="https://img.shields.io/github/issues/exybore/highest" alt="Opened issues"/>
  </a>
  <a href="https://github.com/highest-app/highest/releases">
    <img src="https://img.shields.io/github/v/release/highest-app/highest" alt="Latest release"/>
  </a>
</div>

## 📖 Table of Contents

- [❓ Why this application](#-why-this-application)
- [🌈 How it works](#-how-it-works)
- [🌎 Ecosystem](#-ecosystem)
  - [Highest client](#highest-client)
  - [Highest components](#highest-components)
- [💻 Development](#-development)
  - [Environment setup](#environment-setup)
  - [Building the app](#building-the-app)
  - [Linting and fixing files](#linting-and-fixing-files)
  - [Customizing configuration](#customizing-configuration)
- [📜 Credits](#-credits)
- [🔐 License](#-license)

## ❓ Why this application

**Please note that the application is in beta : therefore, many bugs exist, and some features aren't implemented.**

The Highest application aims to help climbers keep track -in one place- of their climbing activity. They can add routes
to locations, define goals, upload photos and even register competitions to participate.

Highest is designed by and for climbers to improve at this beautiful discipline, in any form : outdoor, sport,
bouldering, and even speed!

### The future

This application will -I really hope- grow in order to have a place in the world of climbing. Exciting features, like
statistics, a common database, account sync and [many more](https://trello.com/b/jymDf16G/highest-client) are planned.

## 🌈 How it works

It's a website built on top of [Vue.js](https://vuejs.org) that saves all of user's data into browser's storage, meaning no API is
required at the back.
Moreover, as it's a Progressive Web Application, it can load quickly and run offline.

The interface adapt itself if you're on a mobile device or on a computer : it takes part of user experiences on both
systems.

Syncing options via an account are planned to be added in a near future, so the climbing data can be shared between
devices.

## 🌎 Ecosystem

### Highest client

- 📊 [Trello board](https://trello.com/b/jymDf16G/highest-client): follow the development of the application and
planned features
- 🖥 [Netlify dashboard](https://app.netlify.com/sites/highest/deploys): get a view of recent deploys of the website,
so when new content is available. This public deploy log is a continuation of a fully open-source view.

### Highest components

- 📦 [Template](https://github.com/highest-app/template): Front-end template used by Highest : Vue.js + Vuetify + A lot
more
- 📜 [API definition](https://github.com/highest-app/api-definition): view the architecture of the upcoming API

## 💻 Development

Thank you for being interested in helping the application to grow by expanding its code ! Please follow these few steps
to get started. Note that you'll need on your local machine :

- Node.js v12+ with package manager (npm, yarn)
- Git, in any form : CLI, UI, GitHub...

### Environment setup

First of all, download the project by cloning the repository from GitHub :

```bash
git clone https://github.com/highest-app/highest.git  # Using HTTP
git clone git@github.com:highest-app/highest          # Using SSH
```

Then, install the required dependencies using your favorite package manager :

```bash
npm install   # Using NPM
yarn install  # Using Yarn
```

Then, run the application using the `serve` command : (Make sure you installed Vue CLI on your system)

```bash
npm run serve  # Using NPM
yarn serve     # Using Yarn
```

A web server will start with hot reload enabled, perfect to develop.

### Building the app

To get a built version of the application ready to be served by a HTTP server, use the `build` command :

```bash
npm run build  # Using NPM
yarn build     # Using Yarn
```

Files will be generated in the `dist` folder, and the entry point will be the `index.html` file.

### Linting and fixing files

To lint the files and check for formatting, run the `lint` command :

```bash
npm run lint  # Using NPM
yarn lint     # Using Yarn
```

If a better formatting is available, new code will be written directly inside the concerned files.

### Customizing configuration

If you want to customize the build configuration, check the [Configuration Reference](https://cli.vuejs.org/config/) on
the Vue CLI documentation.

## 📜 Credits

- Maintainer : [Théo Vidal](https://github.com/theovidal)
- Main libraries : [Vue.js](https://vuejs.org), [Vuetify](https://vuetifyjs.com)
- Huge thanks to the many open-source package developers and [undraw](https://undraw.co) for the illustrations
- Contributors :
    - [Hugo Lageneste](https://github.com/hugolgst): Highest logo, spanish translation

## 🔐 License

The Highest project is under the [GNU GPL v3](./LICENSE) license.

<img src="./public/img/footer.svg" alt="footer" width="100%"/>
