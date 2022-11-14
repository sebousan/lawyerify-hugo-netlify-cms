import { image } from '../fields/image.js'

export const blockimage = {
    name: 'image',
    label: 'Image',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        image
    ]
}