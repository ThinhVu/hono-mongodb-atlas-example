# REST API with a Cloudflare Worker and a MongoDB Atlas Cluster

This project explains how to build a REST API in a Cloudflare worker using MongoDB Realm Web SDK and a MongoDB Atlas cluster to store the data.

# How it Works

- The MongoDB Atlas cluster stores the data in the `test.todo` collection.
- A MongoDB Atlas App Services App manages the authentication and the collection access rules.
- A Cloudflare worker uses the Realm Web SDK to authenticate and retrieve the data that is then exposed with a REST API.

# Prerequisites

- MongoDB Cloud account.
- MongoDB Atlas Cluster (M0 is fine).
- MongoDB Atlas App Services Application created & deployed.
  - with Authentication API Keys turned on + an API key created.
  - with a rule on the collection `test.todo` with a role "owner" with read and write access on all the fields, applied when `{"owner": "%%user.id"}`.
- Cloudflare account (free plan is fine) with a `*.workers.dev` subdomain.

To deploy & test the API we need:
- The Atlas App Services Application ID (top left corner).
- The App authentication API key (in Authentication tab > API Keys).
- The Cloudflare account login/password.
- The Cloudflare account ID (in Workers tab > Overview).
- The Cloudflare `*.workers.dev` subdomain (in Workers tab > Overview).

# Build and Deploy

Edit the file `wrangler.toml`
- replace `CLOUDFLARE_ACCOUNT_ID` by your real Cloudflare account ID.

Edit the file `src/config.ts`
- replace `realmAppId` by your real Atlas App Services Application ID.
- replace `realmApiKey` by your real Atlas App Services Application API key.
- replace `defaultDb` by `test`.

Run the following commands:

```npm run dev```
