## Introduction

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
It uses the [Prisma](https://www.prisma.io/) ORM and [PostgreSQL](https://www.postgresql.org/) DB for the backend via Next.js API routes.

It has a default set of dummy messages that appear on first run. Any messages the user sends will be persisted to the database and will appear on future runs. Users can set their username to any string they like.

## Setup and Running

This project assumes you have an instance of PostgreSQL v14 running on localhost port 5432, with a role named `postgres`, no password, and a database named `triumph-takehome`. You could set this up, or, alternatively, connect to a different Postgres instance by editing the connection string in [the .env file](./.env).

1. Install dependencies: `npm i`
1. With the DB configured, run `npx prisma migrate dev` to add the `Message` table to the DB.
1. Start the development server: `npm run dev`
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
1. Enter your name and message at the bottom of the screen and click send!

## Other Info

I wasn't keeping extremely close track of my time while writing this, but it was probably 4-6 hours over a couple of days.
