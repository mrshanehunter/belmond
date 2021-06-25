export default {
  name: 'designProjectr',
  title: 'Design Project',
  type: 'document',
  fields: [
    {
      name: 'spaceDesigned',
      title: 'Space Designed',
      type: 'string',
    },
    {
      name: 'suburb',
      title: 'Suburb',
      type: 'string',
    },
    {
      name: 'designs',
      title: 'Designs',
      type: 'reference',
      to: [{type: 'designs'}],
    },
    {
      name: 'budget',
      title: 'Budget',
      type: 'number',
    },
    {
      name: 'compDate',
      title: 'Completion Date',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary of Project',
      type: 'text',
    },
    {
      name: 'imageA',
      title: 'Image A',
      type: 'image',
      options: {
        hotspot: true,
      },
    },{
      name: 'imageB',
      title: 'Image B',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      name: 'designs.name',
      suburb: 'suburb',
      spaceDesigned: 'spaceDesigned',
      media: 'designs.image',
    },
    prepare(selection) {
      const {name, suburb, spaceDesigned, media} = selection
      return {
        title: name,
        subtitle: `${suburb} [${spaceDesigned}]`,
        media,
      }
    },
  },
}
