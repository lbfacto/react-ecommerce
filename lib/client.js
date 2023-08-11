
import sanityClient, { SanityClient } from "@sanity/client";
import createClient from '@sanity/client';


import imageUrlBuilder from "@sanity/image-url";


export const client = sanityClient ({
  projectId: 'rodmjlm9',
  dataset: 'production',
  apiVersion: '2023-07-13',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  
});

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);

export default  SanityClient;