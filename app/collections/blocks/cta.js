import { title } from '../partials/title.js'
import { cta } from '../partials/cta.js'

export const blockcta = {
    name: 'cta',
    label: 'Bouton',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        cta
    ]
}