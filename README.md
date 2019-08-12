This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Name | Description
---|---
`start` | Starts web server which serves application in development mode
`build` | Bundles application and puts it under `/build` folder
`test`| Jest test which checks app dependencies and if root components renders without crashing
`analyze` | Runs source maps based bundle analyzer and opens html page with diagram.
`deploy` | Uploads build artifact to the place where web app is hosted
`eject` | Ejects CRA. Read [more](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) before running.
`lint:all:check`<br>`lint:all:fix`<br>`lint:all:fix`<br>`lint:scripts:check`<br>`lint:scripts:fix`<br>`lint:styles:check`<br>`lint:styles:fix` | Run static code quality check. Corresponding suffix allow specify to lint `all`/`scripts`/`styles`.<br>Postfix `check`/`fix` allows to switch between check only or apply automatic fix for issues where possible
`storybook:start`<br>`storybook:build` | Starts storybook locally or bundles static files for SPA

## Environment

List of supported env variables and example file can be seen in `.env.local.example`

## CI/CD

CI/CD works using gitlab pipelines. Configuration stored in `.gitlab-ci.yaml`.
Read [more](https://docs.gitlab.com/ee/ci/yaml/).

##### Hosting

App supposed to be hosted as static files using AWS S3.
 
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

