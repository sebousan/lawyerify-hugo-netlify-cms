import { title } from '../partials/title.js'
import { statutes } from '../partials/statutes.js'

export const blockpersons = {
    name: 'persons',
    label: 'Liste de personnes',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        statutes
    ]
}