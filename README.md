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
