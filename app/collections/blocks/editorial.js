import { title } from '../partials/title.js'
import { textmarkdown } from '../partials/text-markdown.js'
import { cta } from '../partials/cta.js'
import { image } from '../partials/image.js'

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