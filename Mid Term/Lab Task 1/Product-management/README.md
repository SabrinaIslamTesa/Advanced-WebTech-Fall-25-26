# Product Management API (Lab Task 1)

This is my Lab Task 1 for Advanced Web Technologies. It is a NestJS project with
CRUD for products and employees. Data is saved in a PostgreSQL database with TypeORM.

## Student Details

## Student Details

**Name:** Sabrina Islam Tesa

**ID:** 23-53821-3

**Section:** B

## Database Setup

1. Create a database called `product_management` in pgAdmin.
2. Make a copy of `.env.example` and rename it to `.env`.
3. Put your own postgres password in `DB_PASSWORD` inside `.env`.

## How to run

```bash
pnpm install
pnpm migration:run
pnpm start:dev
```

The server runs on port 5001. Redis (Memurai) needs to be running.

## Endpoints

Products

- POST /products
- GET /products
- GET /products/:id
- PATCH /products/:id
- DELETE /products/:id

Employees

- POST /employees
- GET /employees
- GET /employees/:id
- PATCH /employees/:id
- DELETE /employees/:id

## Screenshots

Product screenshots are in the `screenshots` folder.
Employee screenshots are in `screenshots/emp-ss`.