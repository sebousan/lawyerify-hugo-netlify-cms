import { title } from '../fields/title.js'
import { code } from '../fields/code.js'
import { background } from '../fields/background.js'

export const block_embed = {
    name: 'embed',
    label: 'Embed (iframe)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        code,
        background
    ]
}