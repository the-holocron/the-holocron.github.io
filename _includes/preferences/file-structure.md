// Bad

src/
├── controllers/
|   ├── product.js
|   └── user.js
├── models/
|   ├── product.js
|   └── user.js

// Good

src/
├── product/
|   ├── index.js
|   ├── product.js
|   └── product.test.js
├── user/
|   ├── index.js
|   ├── user.js
|   └── user.test.js
