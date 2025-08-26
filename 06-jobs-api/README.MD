##### Projecct Setup

In order to spin up the project, in the root create .env with these two variables, with your own values.

MONGO_URI
JWT_SERCRET

After that run this command


``` bash
npm install && npm start
```

#### Routers

- auth.js
- jobs

#### User Model

Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:s@"]+)\*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```
#### OR
```
/^\S+@\S+\.\S+$/
```

#### Register Route 

- Validate - name, email, password - with mongoose
- Hash password (with bcryptjs)
- Create token
- Send response with token

#### Mongoose Errors

- Required
- Duplicate with token

#### Login Route

- Validate - email, password - in controller
- Try to find user