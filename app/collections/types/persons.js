import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { body } from '../partials/body.js'
import { image } from '../partials/image.js'
import { contact } from '../partials/contact.js'

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
        image,
        description,
        contact,
        body
    ]
}

export default persons