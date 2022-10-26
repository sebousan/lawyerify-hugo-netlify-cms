import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { layout } from '../partials/layout.js'
import { title } from '../partials/title.js'
import { image } from '../partials/image.js'
import { description } from '../partials/description.js'
import { body } from '../partials/body.js'

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
        // layout,
        title,
        description,
        image,
        body
    ]
}

export default pages