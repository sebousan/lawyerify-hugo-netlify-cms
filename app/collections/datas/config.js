import { description } from '../partials/description.js'
import { image } from '../partials/image.js'

const config = {
    name: 'config',
    label: 'Config',

    editor: { preview: false },

    files: [

        {
            name: 'seo',
            label: 'SEO',
            file: 'data/seo.yml',
            i18n: true,
            fields: [
                { name: 'title', label: 'Nom du site', widget: 'string', i18n: true },
                description,
                image
            ]
        }

    ]

}

export default config