import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'
import { credit } from './credit.js'

export const featured_image = {
    name: 'image',
    label: 'Image mis en avant',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        image_src,
        image_alt,
        credit
    ]
}