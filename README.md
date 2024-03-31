# Deep Dark Single Page Application

## Introduction

This is the front-end application for the Deep Dark project. If you'd like to learn more about this project, head on over to the [Deep Dark Design Docs](https://github.com/ramijames/DeepDarkDesignDocs) repository where all of the concepts are laid out in full.

## Running this application

To run the application, simply clone it to your local host, set up the .env with your Okta Auth0 details:

- VITE_AUTH0_DOMAIN=
- VITE_AUTH0_CLIENT_ID=
- VITE_AUTH0_CALLBACK_URL=

These can be found in your [Auth0 dashboard](https://manage.auth0.com/dashboard), under the application you are using for this project's deployment.

Once this is set up, you can run the application in development mode with:

```sh
npm run dev
```


## Attribution

This application forks the [SPA application example](https://github.com/auth0-developer-hub/spa_vue_javascript_hello-world_composition-api/tree/basic-authentication) from Okta.

It is based on Vue/Vite, and Okta's Auth0 login technology.