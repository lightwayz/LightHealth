// // This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// // The config you add here will be used whenever one of the edge features is loaded.
// // Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/
//
// import * as Sentry from "@sentry/nextjs";
//
// Sentry.init({
//   dsn: "https://3d627de24f5d06a1fc39000a06ca9a94@o4506813739368448.ingest.us.sentry.io/4507458386526208",
//
//   // Adjust this value in production, or use tracesSampler for greater control
//   tracesSampleRate: 1,
//
//   // Setting this option to true will print useful information to the console while you're setting up Sentry.
//   debug: false,
// });
