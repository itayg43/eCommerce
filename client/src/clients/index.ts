import createClient from '@sanity/client';

import {
  SANITY_PROJECT_ID,
  SANITY_PROJECT_DATASET,
  SANITY_API_VERSION,
} from '@env';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: SANITY_PROJECT_DATASET === 'production',
});
