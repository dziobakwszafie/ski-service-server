<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/4wFGWy2.png" alt="Project logo"></a>
</p>

<h1 align="center">Ski service</h3>

<div align="center">

[![GitHub Issues](https://img.shields.io/github/issues/dziobakwszafie/readme-template-example)](https://github.com/dziobakwszafie/readme-template-example/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/dziobakwszafie/readme-template-example)](https://github.com/dziobakwszafie/readme-template-example/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

## <img width="20px" height="20px" src="https://i.imgur.com/JSD4BhW.png" alt="Content"> Table of Contents

- [About](#about)
- [Status](#status)
- [How to start that app](#start)
- [Tests](#tests)
- [Used tools and libs](#tools)
- [Authors](#authors)

## <img width="20px" height="20px" src="https://i.imgur.com/hx2bbEi.png" alt="About"> About <a name = "about"></a>

Project of ski service app - still under develope, planned release winter 20/21.

Backend part.

## API documentation

### GET all orders

```
PATH: /api/orders

res:
    {
        "orderId": "Nrh01kUjnmDRE23B6V1y",
        "email": "test12@test.com",
        "skis": "Voelkl",
        "length": "176",
        "sideAngle": "88",
        "bottomAngle": "0,5",
        "diamond": "nie",
        "snow": "mokry",
        "fluor": "Fluor"
    }
```

### POST an order

```
PATH: /api/order

req:
    {
        "skis": "Voelkl",
        "length": "176",
        "sideAngle": "88",
        "bottomAngle": "0,5",
        "diamond": "nie",
        "snow": "mokry",
        "fluor": "Fluor"
    }
res:
    {
        "email": "test12@test.com",
        "skis": "Voelkl1",
        "length": "176",
        "sideAngle": "88",
        "bottomAngle": "0,5",
        "diamond": "nie",
        "snow": "mokry",
        "fluor": "Fluor",
        "createdAt": "2020-09-08T22:26:28.196Z",
        "orderId": "IiT8k125wOZUSd9NraU7"
    }
```

```diff
- Bearer needed
```

### POST signup

```
PATH: /api/signup
req:
    {
        "email": "test12@test.com",
        "password": "test12",
        "confirmPassword": "test12",
        "name": "Adam Bułka",
        "phone": "123456789"
    }

res:
    {
        "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5YWQ5YmM1ZThlNDQ3OTNhMjEwOWI1NmUzNjFhMjNiNDE4ODA4NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2tpLXNlcnZpY2UtOTE5OTUiLCJhdWQiOiJza2ktc2VydmljZS05MTk5NSIsImF1dGhfdGltZSI6MTU5OTYwMzk0OCwidXNlcl9pZCI6IkVMSkRSQ3RXQmxPTzRScUJiVHhnYmM3YlhFVDIiLCJzdWIiOiJFTEpEUkN0V0JsT080UnFCYlR4Z2JjN2JYRVQyIiwiaWF0IjoxNTk5NjAzOTQ4LCJleHAiOjE1OTk2MDc1NDgsImVtYWlsIjoidGVzdDEyQHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QxMkB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ML-lI-WuNCftSDal7tPmh3VA5coAyrlAY8ICY3lIVnXN53Oy0Ybj5NxR0wIuzG6iBTlp752HNjIeJZ56rcG-Fh7bLFMgAt5vZzjxw9w59YsbHoRTf2UBN21eNYWrwokHKp6E-xEpYpzxT1clhGjQMGE8n0I9Rjx2qENQdWN2C-rg3M5FeyqcOAw6q3bZHowSKuzQRAYhh0p17gtP0Avpnu78s91CQSSnhiR7f2v_ABR2VdGeLjYFggEvEB9jCoi781DzkwGuUOuDNaaX8xNKiqDGq6nAho0SRHp4Nbyqpkab7yY5Pu6YeGa3Ze1Zbt7_r32QK5wGp98HWk8eBahgvw"
    }

```

### POST login

```
PATH: /api/login

req:
    {
        "email": "test12@test.com",
        "password": "test12"
    }
res:
    {
        "token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ5YWQ5YmM1ZThlNDQ3OTNhMjEwOWI1NmUzNjFhMjNiNDE4ODA4NzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2tpLXNlcnZpY2UtOTE5OTUiLCJhdWQiOiJza2ktc2VydmljZS05MTk5NSIsImF1dGhfdGltZSI6MTU5OTYwNDU3MiwidXNlcl9pZCI6IkVMSkRSQ3RXQmxPTzRScUJiVHhnYmM3YlhFVDIiLCJzdWIiOiJFTEpEUkN0V0JsT080UnFCYlR4Z2JjN2JYRVQyIiwiaWF0IjoxNTk5NjA0NTcyLCJleHAiOjE1OTk2MDgxNzIsImVtYWlsIjoidGVzdDEyQHRlc3QuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QxMkB0ZXN0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.wmmK9Kk5HApM1TXfnw9wTJ2_15BrEctH0q8_yXqIzuUdYExfiY7e1jsCeSTu7bbjAS0nhYsZAHo0feCCmHjudFnBCRTClJXR8R8bW7GIWdIXuw2m9xuwxmdBtebfpyqOrntebeWX0HFxwa8-FlLL85FnOJQXONsVN6GmeA2EvZOgbmWaTvw2rMWXtHleIM7-UqdzFDXb5ZWr_qn-0m-_RgPjFJfaCaPkwzpgPIJEgvN0EAEpSOmtYFQXncQGCidgtQYNhwzn_92_akRaF7Ezm0XYQza6cWf2HhCuxijI9FipFHDUD_TbZ3vJTCfvuopfxuHTN7zCE0PX0bGrf6UsdQ"
    }
```

### POST comment to order

```
PATH: /api/order/*orderId*/comment

req:
    {
       "commentBody": "komentarz komentujący"
    }

res:
    {
        "commentBody": "kaszanka komentująca23",
        "createdAt": "2020-09-08T22:29:15.483Z",
        "orderId": "IiT8k125wOZUSd9NraU7",
        "email": "test12@test.com"
    }
```

```diff
- Bearer needed
```

### GET all comments to order

```
PATH: /api/order/*orderId*

res:
    {
        "diamond": "nie",
        "skis": "Voelkl12",
        "snow": "mokry",
        "fluor": "Fluor",
        "sideAngle": "88",
        "length": "176",
        "bottomAngle": "0,5",
        "createdAt": "2020-09-06T14:15:39.085Z",
        "email": "test12@test.com",
        "orderId": "CMYrFWnetyXbla1ngZHw",
        "comments": [
            {
                "email": "test12@test.com",
                "createdAt": "2020-09-06T20:56:40.307Z",
                "commentBody": "kaszanka komentująca23",
                "orderId": "CMYrFWnetyXbla1ngZHw"
            },
            {
                "orderId": "CMYrFWnetyXbla1ngZHw",
                "commentBody": "kaszanka komentująca2",
                "createdAt": "2020-09-06T17:00:01.926Z",
                "email": "test12@test.com"
            },
            {
                "commentBody": "kaszanka komentująca",
                "createdAt": "2020-09-06T16:08:41.871Z",
                "email": "test12@test.com",
                "orderId": "CMYrFWnetyXbla1ngZHw"
            }
        ]
    }

```

```diff
- Bearer needed
```

### POST user details

```
PATH: /api/user

req:
    {
        "bio": "Hello, my name is user, nice to meet you",
        "website": "https://user.com",
        "location": "Lonodn, UK"
    }

res:
    {
        "message": "Details added successfully"
    }
```

```diff
- Bearer needed
```

### GET user authentication

```
PATH: /api/user

res:
    {
        "credentials": {
            "website": "https://user.com",
            "location": "Lonodn, UK",
            "userId": "ELJDRCtWBlOO4RqBbTxgbc7bXET2",
            "phone": "123456789",
            "name": "Adam Bułka",
            "bio": "Hello, my name is user, nice to meet you",
            "createdAt": "2020-09-08T22:25:48.819Z",
            "email": "test12@test.com"
        },
        "orders": [
            {
                "snow": "mokry",
                "createdAt": "2020-09-08T22:26:28.196Z",
                "bottomAngle": "0,5",
                "sideAngle": "88",
                "diamond": "nie",
                "fluor": "Fluor",
                "email": "test12@test.com",
                "length": "176",
                "skis": "Voelkl1"
            },
            {
                "sideAngle": "88",
                "email": "test12@test.com",
                "length": "176",
                "snow": "mokry",
                "fluor": "Fluor",
                "diamond": "nie",
                "skis": "Voelkl",
                "bottomAngle": "0,5",
                "createdAt": "2020-09-08T22:26:12.727Z"
            }
        ]
    }
```

```diff
- Bearer needed
```

### DELETE order

```
PATH: /api/orders/*orderId*/delete

res:
    {
        "message": "Zamówienie usunięte"
    }
```

```diff
- Bearer needed
```

## Installing firebase SDK

It is necessary to execute POST with token in request header.

Useful link:

```
https://stackoverflow.com/questions/42043611/could-not-load-the-default-credentials-node-js-google-compute-engine-tutorial?fbclid=IwAR24gYo425KNUkO43oeBeufzCp_dt2L1gaiU3IJLI-7WJT-ZvXNdh02PjVY
```

- download SDK file from https://cloud.google.com/sdk/docs/quickstart-windows
- install file
- with PowerShell type > gcloud init and then > gcloud auth application-default login

## <img width="20px" height="20px" src="https://i.imgur.com/ZpOiTNt.png" alt="Status"> Status <a name = "status"></a>

<img width="225px" height="48px" src="https://i.imgur.com/9uiUlEm.png" alt="Project logo">

## <img width="20px" height="20px" src="https://i.imgur.com/Mw1Qnmu.png" alt="Start"> How to start that app <a name = "start"></a>

### Download repo.

### Install dependencies

```
npm i
```

### Run app

```
cd functions
npm install
firebase serve
```

### Deploy to firebase cloud

```
firebase deploy
```

## <img width="20px" height="20px" src="https://i.imgur.com/IO030X7.png" alt="Tests"> How to run tests <a name = "tests"></a>

## <img width="20px" height="20px" src="https://i.imgur.com/v3vWn54.png" alt="Tools"> Used tools and libs <a name = "tools"></a>

### Main tools

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [styled-components](https://styled-components.com/)
- [Chakra-ui](https://chakra-ui.com/)
- [Material-UI](https://material-ui.com/)
- [Formik](https://formik.org/)
- [Firebase](https://firebase.google.com/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)

## <img width="20px" height="20px" src="https://i.imgur.com/VzjoqgO.png" alt="Authors"> Authors <a name = "authors"></a>

- [@dziobakwszafie](https://github.com/dziobakwszafie)
