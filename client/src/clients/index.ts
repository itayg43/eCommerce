import sanityClient from '@sanity/client';

import {SANITY_PROJECT_ID, SANITY_PROJECT_DATASET} from '@env';

export default sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,
  useCdn: SANITY_PROJECT_DATASET === 'production',
});
