import { text_markdown } from '../fields/text-markdown.js'
import { state } from '../fields/state.js'
import { background } from '../fields/background.js'

export const block_alert = {
    name: 'alert',
    label: 'Alerte',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    summary: '{{text_markdown}}',
    fields: [
        text_markdown,
        state,
        background
    ]
}