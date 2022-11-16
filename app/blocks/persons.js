import { title } from '../fields/title.js'
import { statutes } from '../fields/statutes.js'
import { background } from '../fields/background.js'

export const block_persons = {
    name: 'persons',
    label: 'Liste de personnes',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        statutes,
        background
    ]
}