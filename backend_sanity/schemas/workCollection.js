export default {
  name: 'workCollection',
  title: 'Work Collection',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
