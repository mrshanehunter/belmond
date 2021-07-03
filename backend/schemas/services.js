export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
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
