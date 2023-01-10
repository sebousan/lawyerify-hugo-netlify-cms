import { isPage } from '../fields/is-page.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { hero } from '../fields/hero.js'
import { featured_image } from '../fields/featured-image.js'
import { description } from '../fields/description.js'
import { body } from '../fields/body.js'
import { blocks } from '../blocks/blocks.js'

const pages = {
    name: 'pages',
    label: 'Pages',
    label_singular: 'Page',
    folder: 'content',
    create: true,

    editor: { preview: false },
    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',
    summary: '{{title}}',

    nested: { depth: 4 },
    filter: { field: 'isPage', value: true },

    fields: [
        isPage,
        draft,
        title,
        description,
        featured_image,
        hero,
        body,
        blocks
    ],
    meta: { path: { label: 'Page parente', widget: 'parent', index_file: '_index' } }
}

export default pages