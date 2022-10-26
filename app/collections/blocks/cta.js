import { title } from '../partials/title.js'
import { cta } from '../partials/cta.js'

export const cta = {
    name: 'cta',
    label: 'CTA',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        cta
    ]
}