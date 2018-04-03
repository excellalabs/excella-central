# Excella Central [![Build Status](https://travis-ci.org/excellalabs/excella-central.svg?branch=master)](https://travis-ci.org/excellalabs/excella-central) [![Waffle.io - Columns and their card count](https://badge.waffle.io/excellalabs/excella-central.svg?columns=all)](https://waffle.io/excellalabs/excella-central)

Excella Central is a project developed by the JavaScript Specialty Area of Excella Labs. The purpose is to bring Excellians together, familiarizing employees with each other in a fun & interactive way. Using Ionic, we have created a native in-house mobile app for iOS & Android, as well as a Progressive Web App (which can be found at https://central.excellalabs.com).

This application works in conjunction with our LoopBack server at https://github.com/excellalabs/excella-central-server.

## Technology Stack

- Ionic
- Angular
- TypeScript
- Cordova
- Docker
- AWS ECS
- Travis CI

## Prerequisites

- Install [Node LTS](https://nodejs.org/en/)
- Ensure Node & NPM installed correctly (by running `node -v` and `npm -v` in a command shell)

## Development

To get started, clone the repo and run the following commands within the project directory:

```bash
$ npm install
$ ionic serve
```

After the app compiles, you should see a browser window automatically open at http://localhost:8100 with the app displayed. That's it! You're ready to start contributing to Excella Central.

For more details on the commands you can run, check out the [Ionic CLI documentation](https://ionicframework.com/docs/cli/commands.html) and browse the custom scripts in the [package.json](https://github.com/excellalabs/excella-central/blob/master/package.json#L15) file.
