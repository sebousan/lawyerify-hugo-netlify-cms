import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { image } from '../fields/image.js'
import { address } from '../fields/address.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'

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