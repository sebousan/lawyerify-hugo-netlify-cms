import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { address } from '../fields/address.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'
import { blocks } from '../blocks/blocks.js'

const offices = {
    name: 'offices',
    label: 'Cabinets',
    label_singular: 'Cabinet',
    folder: 'content/offices',
    create: true,
    description: 'Tous les cabinets',

    editor: { preview: false },
    // #i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    summary: '{{title}}',

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    fields: [
        isNotIndex,
        draft,
        title,
        description,
        address,
        contact,
        featured_image,
        body,
        blocks
    ]
}

export default offices