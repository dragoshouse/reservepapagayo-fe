import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the image URL builder using the client context
const builder = imageUrlBuilder(sanityClient);

/**
 * Generates an optimized image URL given a Sanity image source.
 * @param source The image object from Sanity.
 * @returns The image URL builder instance.
 */
export function urlFor(source: any) {
  return builder.image(source);
}

// Export the sanityClient as a convenience if needed directly
export { sanityClient };
