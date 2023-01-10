import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { press } from '../fields/press.js'
import { featured_image } from '../fields/featured-image.js'
import { images } from '../fields/images.js'
import { body } from '../fields/body.js'

const publications = {
    name: 'publications',
    label: 'Parutions',
    label_singular: 'Parution',
    folder: 'content/publications',
    create: true,

    editor: { preview: false },
    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    summary: '{{title}} — {{year}}',

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        featured_image,
        press,
        images,
        body
    ]
}

export default publications