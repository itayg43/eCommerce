import createClient from '@sanity/client';

import {SANITY_PROJECT_ID, SANITY_PROJECT_DATASET} from '@env';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,
  useCdn: SANITY_PROJECT_DATASET === 'production',
});
