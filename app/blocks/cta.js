import { title } from '../fields/title.js'
import { cta } from '../fields/cta.js'

export const block_cta = {
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