firebase deploy

firebase serve

https://www.debuggr.io/react-map-of-undefined/
https://www.robinwieruch.de/react-hooks-fetch-data

### GET

```
http://localhost:5000/ski-service-91995/europe-west3/api/orders
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

http://localhost:5000/ski-service-91995/europe-west3/api/order

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

http://localhost:5000/ski-service-91995/europe-west3/api/signup

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

http://localhost:5000/ski-service-91995/europe-west3/api/login

```

Body:

{
"email": "test12@test.com",
"password": "test12"
}
