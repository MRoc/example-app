# example-app

Simple example app that can be used for kubernetes tests including metrics.

## Local

```bash
npm install
npm run start
```

## Docker

```bash
docker build -t mroc/example-app .
docker push mroc/example-app
docker run -d -p 3000:3000 --restart=always --name example-app mroc/example-app
```

## Endpoints

Then visit the following endpoints:

* http://localhost:3000/
* http://localhost:3000/comments
* http://localhost:3000/threads
* http://localhost:3000/replies
* http://localhost:3000/swagger-stats/metrics

## Env variable

The example app supports a env variable of name `MESSAGE` that is shown in the base route.
