export default {
  name: 'mediaMentions',
  title: 'Media Mentions',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Defining name for the design project',
    },
    {
      name: 'mediaTitle',
      title: 'Media Title',
      type: 'string',
    },
    {
      name: 'issue',
      title: 'Issue',
      type: 'string',
    },
    {
      name: 'person',
      title: 'Person',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  
}
