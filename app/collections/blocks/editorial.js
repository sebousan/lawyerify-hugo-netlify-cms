import { title } from '../fields/title.js'
import { textmarkdown } from '../fields/text-markdown.js'
import { cta } from '../fields/cta.js'
import { image } from '../fields/image.js'

export const blockeditorial = {
    name: 'editorial',
    label: 'Editorial',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        {
            name: 'direction',
            title: 'Direction',
            widget: 'select',
            options: [
                { label: 'texte à gauche / image à droite', value: 'ltr' },
                { label: 'image à gauche / texte à droite', value: 'rtl' }
            ]
        },
        textmarkdown,
        cta,
        image
    ]
}