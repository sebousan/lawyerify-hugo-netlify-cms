import { title } from '../partials/title.js'

export const blockembed = {
    name: 'embed',
    label: 'Embed',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        { name: 'code', label: 'Code', widget: 'text', i18n: 'duplicate' }
    ]
}