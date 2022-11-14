import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { image } from '../fields/image.js'
import { description } from '../fields/description.js'
import { body } from '../fields/body.js'

const pages = {
    name: 'pages',
    label: 'Pages',
    label_singular: 'Page',
    folder: 'content/pages',
    create: true,

    editor: { preview: false },
    // preview_path: "/pages/",

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 3 },

    fields: [

        index,
        draft,
        title,
        description,
        image,
        body
    ]
}

export default pages