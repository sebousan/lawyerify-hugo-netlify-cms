import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { image } from '../partials/image.js'
import { address } from '../partials/address.js'
import { contact } from '../partials/contact.js'
import { body } from '../partials/body.js'

const offices = {
    name: 'offices',
    label: 'Cabinets',
    label_singular: 'Cabinet',
    folder: 'content/offices',
    create: true,
    description: 'Tous les cabinets',

    editor: { preview: false },
    // preview_path: "/offices/",

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'index', value: false },

    fields: [
        index,
        draft,
        title,
        description,
        address,
        contact,
        image,
        body
    ]
}

export default offices