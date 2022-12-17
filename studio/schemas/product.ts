import {defineType, defineField} from 'sanity'

export const product = defineType({
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    // name
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
    }),

    // category
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [{title: 'Electronics', value: 'electronics'}],
      },
    }),

    // image
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
    }),

    // description
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),

    // price
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
    }),
  ],
})
