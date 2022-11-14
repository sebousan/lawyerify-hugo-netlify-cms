import { index } from '../fields/index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { image } from '../fields/image.js'
import { body } from '../fields/body.js'
import { persons } from '../fields/persons.js'
import { categories } from '../fields/categories.js'
import { press } from '../fields/press.js'

const posts = {
    name: 'posts',
    label: 'Actualités',
    label_singular: 'Actualité',
    folder: 'content/posts',
    create: true,

    editor: { preview: false },
    // preview_path: "/news/",

    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',
    summary: '{{title}} — {{year}}/{{month}}/{{day}}',

    filter: { field: 'index', value: false },

    fields: [
        index,
        draft,
        title,
        date,
        categories,
        persons,
        description,
        image,
        press,
        body
    ]
}

export default posts