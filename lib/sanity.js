import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-04-27", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_API_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
