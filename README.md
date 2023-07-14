# Documentation of Bin-There API

## Products API

### Product Model
- schema example:
 ```json
{
    "name": "username",
    "description": "user@gmail.com",
    "price":"password",
    "ratings": 1,
    "images" : [
        {
            "public_id": "sample id",
            "url": "Sample url",
        }
    ],

    "category": "Sample category",
    "stock":1,
    "numOfReviews":1,
}
```

### Routes

**Desc:** Create product
   
**Route:** `/product/create`

**Method:** `POST`

**Body:** 
```json
{
    "name": "product 2",
    "description" : "this is a testing product 2 ",
    "price" : 1200,
    "category":" Smartphone",
    "images": {
        "public_id" : "sample-image",
        "url"  : "Sample-url"
    }
}
```

**Response:** 
 If Sucessfull then return the whole product which was created with its details else error

``` json
{
    "success": true,
    "message": "Product registered succeffully",
    "response": {
        "name": "product 2",
        "description": "this is a testing product 2 ",
        "price": 1200,
        "ratings": 0,
        "images": [
            {
                "public_id": "sample-image",
                "url": "Sample-url",
                "_id": "64b19b0cee93a30dd07c871f"
            }
        ],
        "category": " laptop",
        "stock": 1,
        "numOfReviews": 0,
        "_id": "64b19b0cee93a30dd07c871e",
        "createdAt": "2023-07-14T18:59:24.111Z",
        "__v": 0
    }
}
```

---

**Desc:** get all products

**Route:** `/products`

**Method:** `GET`

**Body:** 
```json
{
    
}
```

**Response:** 
If successfull then shows all the products created else error
```json

{
    "success": true,
    "message": "multiple Products fetched succeffully",
    "response": [
        {
            "_id": "64b189732e378261d1527848",
            "name": "product 1",
            "description": "this is a testing product 1 ",
            "price": 1200,
            "ratings": 0,
            "images": [
                {
                    "public_id": "sample-image",
                    "url": "Sample-url",
                    "_id": "64b189732e378261d1527849"
                }
            ],
            "category": " Smartphone",
            "stock": 1,
            "numOfReviews": 0,
            "createdAt": "2023-07-14T17:44:19.204Z",
            "__v": 0
        },
        {
            "_id": "64b18a272e378261d152784b",
            "name": "product 2",
            "description": "this is a testing product 2 ",
            "price": 1200,
            "ratings": 0,
            "images": [
                {
                    "public_id": "sample-image",
                    "url": "Sample-url",
                    "_id": "64b18a272e378261d152784c"
                }
            ],
            "category": " Smartphone",
            "stock": 1,
            "numOfReviews": 0,
            "createdAt": "2023-07-14T17:47:19.763Z",
            "__v": 0
        }
    ]
}

```

---

**Desc:** Get single product

**Route:** `/product/:id`

**Method:** `GET`

**Body:** 
```json
{

}
```

**Response:** 
If successfull then shows the product with specific id else error
``` json
{
    "success": true,
    "message": "single product fetched succeffully",
    "response": {
        "_id": "64b18a272e378261d152784b",
        "name": "product 2",
        "description": "this is a testing product 2 ",
        "price": 1200,
        "ratings": 0,
        "images": [
            {
                "public_id": "sample-image",
                "url": "Sample-url",
                "_id": "64b18a272e378261d152784c"
            }
        ],
        "category": " Smartphone",
        "stock": 1,
        "numOfReviews": 0,
        "createdAt": "2023-07-14T17:47:19.763Z",
        "__v": 0
    }
}
```

---

**Desc:** update the product

**Route:** `/product/update/:id`

**Method:** `PUT`

**Body:** 
any field to update
```json
{
    "name": "product 2",
    "description" : "this is a testing product 2 ",
    "price" : 1200,
    "category":" Smartphone",
    "images": {
        "public_id" : "sample-image",
        "url"  : "Sample-url"
    }
}
```

**Response:** 
If successfull then shows the updated product with specific id else error
``` json
{
    "success": true,
    "message": "product updated successfully",
    "response": {
        "_id": "64b18a272e378261d152784b",
        "name": "product 2",
        "description": "this is a testing product 2 ",
        "price": 1200,
        "ratings": 0,
        "images": [
            {
                "public_id": "sample-image",
                "url": "Sample-url",
                "_id": "64b19ac5ee93a30dd07c8719"
            }
        ],
        "category": " laptop",
        "stock": 1,
        "numOfReviews": 0,
        "createdAt": "2023-07-14T17:47:19.763Z",
        "__v": 0
    }
}
```

---

**Desc:** Delete the product

**Route:** `/product/delete/:id`

**Method:** `DELETE`

**Response:** 
If successfull then the product with specific id is deleted else error
```
{
    "success": true,
    "message": "Product deleted successfully"
}
```

---
