import { imagesimple } from './image-simple.js'

export const image = {
    name: 'image',
    label: 'Image',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        imagesimple,
        {
            name: 'alt',
            label: 'Texte alternatif',
            widget: 'string',
            required: false,
            i18n: true,
            hint: 'Pour une image porteuse d’information (laisser vide si image de décoration)'
        }
    ]
}