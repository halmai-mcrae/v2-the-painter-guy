export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'imageurl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
    },
  ],
}
