# Ski service server

Project of ski service app.

## Project Status

:heavy_plus_sign: under develope - planned release winter 20/21.

## Getting Started

Live version you can find here: https://dziobakwszafie.github.io/ski-service/

### To run it locally

Get the repo

```
git clone https://dziobakwszafie.github.io/ski-service/
```

or

```
download ZIP file
```

Then

```
cd functions
npm install
firebase serve
```

### Deploy to firebase cloud

```
firebase deploy
```

## Built With

- [Firebase](https://firebase.google.com/)
- [Express](hhttps://expressjs.com/)

## API documentation

### GET all orders

```
PATH: /api/orders

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

    {
        "skis": "Voelkl",
        "length": "176",
        "sideAngle": "88",
        "bottomAngle": "0,5",
        "diamond": "nie",
        "snow": "mokry",
        "fluor": "Fluor"
    }
```

!important - to post an order u need to add request header with user token

### POST signup

```
PATH: /api/signup

    {
        "email": "test12@test.com",
        "password": "test12",
        "confirmPassword": "test12",
        "name": "Adam Bułka",
        "phone": "123456789"
    }
```

### POST login

```
PATH: /api/login

    {
        "email": "test12@test.com",
        "password": "test12"
    }
```

### POST comment to order

```
PATH: /order/*orderId*/comment

    {
       "commentBody": "komentarz komentujący"
    }
```

### GET all comments to order

```
PATH: /order/*orderId*

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

### POST user details

```
PATH: /user

    {
        "bio": "Hello, my name is user, nice to meet you",
        "website": "https://user.com",
        "location": "Lonodn, UK"
    }
```

### GET user authentication

```diff
- doesn-t work :<<<<
```

```
PATH: /user

    {
       "commentBody": "komentarz komentujący"
    }
```

### DELETE order

```
PATH: /orders/*orderId*/delete

    {

    }
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

## Useful links:

- https://www.debuggr.io/react-map-of-undefined/
- https://www.robinwieruch.de/react-hooks-fetch-data
