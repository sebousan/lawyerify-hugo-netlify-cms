import { image } from '../fields/image.js'
import { url } from '../fields/url.js'
import { title } from '../fields/title.js'
import { text } from '../fields/text.js'

export const blockfigure = {
    name: 'figure',
    label: 'Image',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        image,
        url,
        title,
        text
    ]
}