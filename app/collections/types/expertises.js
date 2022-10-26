import { index } from '../partials/index.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { body } from '../partials/body.js'

const expertises = {
    name: 'expertises',
    label: 'Expertises',
    label_singular: 'Expertise',
    folder: 'content/expertises',
    create: true,
    description: 'Toutes les expertises (droit du travail, de la famille…)',

    editor: { preview: false },
    // preview_path: "/expertises/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'index', value: false },

    fields: [

        index,
        title,
        description,
        body

    ]
}

export default expertises