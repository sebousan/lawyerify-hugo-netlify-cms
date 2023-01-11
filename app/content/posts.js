import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { body } from '../fields/body.js'
import { categories } from '../fields/categories.js'
import { tags } from '../fields/tags.js'
import { authors } from '../fields/authors.js'

const posts = {
    name: 'posts',
    label: 'Actualités',
    label_singular: 'Actualité',
    folder: 'content/posts',
    create: true,

    editor: { preview: false },
    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',

    filter: { field: 'isIndex', value: false },
    summary: '{{title}} — {{year}}/{{month}}/{{day}}',

    fields: [
        isNotIndex,
        draft,
        date,
        authors,
        title,
        description,
        categories,
        tags,
        featured_image,
        body
    ]
}

export default posts