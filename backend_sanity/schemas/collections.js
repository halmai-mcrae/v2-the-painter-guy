export default {
  name: 'collections',
  title: 'collections',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{ type: 'workCollection' }],
    },
  ],
}
