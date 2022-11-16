import { title } from '../fields/title.js'
import { text } from '../fields/text.js'
import { image } from '../fields/image.js'
import { background } from '../fields/background.js'

export const block_quote = {
    name: 'blockquote',
    label: 'Citation',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        text,
        {
            name: 'author',
            title: 'Auteur',
            widget: 'object',
            required: false,
            i18n: true,
            collapsed: true,
            fields: [
                title,
                text,
                image
            ]
        },
        background
    ]
}