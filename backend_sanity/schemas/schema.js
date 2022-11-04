// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import testimonials from './testimonials'
import brands from './brands'
import contact from './contact'
import abouts from './abouts'
import collections from './collections'
import slider from './slider'
import services from './services'
import works from './works'
import workCollection from './workCollection'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    testimonials,
    brands,
    contact,
    abouts,
    collections,
    services,
    slider,
    works,
    workCollection,
  ]),
})
