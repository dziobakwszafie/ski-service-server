firebase deploy

firebase serve

https://www.debuggr.io/react-map-of-undefined/
https://www.robinwieruch.de/react-hooks-fetch-data

### GET

```
/api/orders
```

Responce:

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

### POST

```

/api/order

```

Header:

Content-type application/json
Authorization Bearer <token>

Body:

    {
        "skis": "Voelkl",
        "length": "176",
        "sideAngle": "88",
        "bottomAngle": "0,5",
        "diamond": "nie",
        "snow": "mokry",
        "fluor": "Fluor"
    }

### SIGNUP

```

/api/signup

```

Body:

{
"email": "test12@test.com",
"password": "test12",
"confirmPassword": "test12",
"name": "Adam Bułka",
"phone": "123456789"
}

### LOGIN

```

/api/login

```

Body:

{
"email": "test12@test.com",
"password": "test12"
}

1. post order
2. login
3. signup
4. get user orders
5. get user credentials

https://stackoverflow.com/questions/42043611/could-not-load-the-default-credentials-node-js-google-compute-engine-tutorial?fbclid=IwAR24gYo425KNUkO43oeBeufzCp_dt2L1gaiU3IJLI-7WJT-ZvXNdh02PjVY

Firebase config na kompie bo inaczej nie bezie działało wysyłanie requestów przy zabezpieczonym api

pobrać to:
https://cloud.google.com/sdk/docs/quickstart-windows
i zantalowac
potem
via PowerShell
gcloud init
then
gcloud auth application-default login
