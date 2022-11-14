import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { statutes } from '../fields/statutes.js'
import { expertises } from '../fields/expertises.js'
import { image } from '../fields/image.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'

const persons = {
    name: 'persons',
    label: 'Personnes',
    label_singular: 'Personne',
    folder: 'content/persons',
    create: true,
    description: 'Toutes les personnes',

    editor: { preview: false },
    // preview_path: "/persons/",

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'index', value: false },

    fields: [
        index,
        draft,
        title,
        statutes,
        expertises,
        description,
        image,
        contact,
        body
    ]
}

export default persons