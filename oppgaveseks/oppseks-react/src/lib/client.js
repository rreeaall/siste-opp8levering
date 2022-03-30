// import sanityClient from '@sanity/client'

// export default sanityClient({
//   projectId: 'jcf6a3kc',
//   dataset: 'production'
// })
import sanityClient from '@sanity/client';

const options = {
  projectId: 'jcf6a3kc',
  dataset: 'production',
  apiVersion: '2021-10-21',
}

const client = sanityClient({ ...options, useCdn: false,});

export default client;
