import { text } from './text.js'
import { url } from './url.js'
import { blank } from './blank.js'

export const cta = {
    name: 'cta',
    label: 'Bouton',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        text,
        url,
        blank
    ]
}