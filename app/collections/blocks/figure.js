import { image } from '../partials/image.js'
import { url } from '../partials/url.js'
import { title } from '../partials/title.js'
import { text } from '../partials/text.js'

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