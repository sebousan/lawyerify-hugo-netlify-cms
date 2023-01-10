import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { body } from '../fields/body.js'

const expertises = {
    name: 'expertises',
    label: 'Expertises',
    label_singular: 'Expertise',
    folder: 'content/expertises',
    create: true,
    description: 'Toutes les expertises (droit du travail, de la famille…)',

    editor: { preview: false },
    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',
    summary: '{{title}}',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title,
        description,
        body
    ]
}

export default expertises