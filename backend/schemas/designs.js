import UserIcon from 'part:@sanity/base/user-icon'

export default {
  name: 'designs',
  title: 'Designs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Defining name for the design project',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
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
    },
    {
      name: 'imageB',
      title: 'Image B',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
