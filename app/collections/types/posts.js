import { index } from '../partials/index.js'
import { draft } from '../partials/draft.js'
import { date } from '../partials/date.js'
import { title } from '../partials/title.js'
import { description } from '../partials/description.js'
import { image } from '../partials/image.js'
import { body } from '../partials/body.js'
import { persons } from '../partials/persons.js'
import { categories } from '../partials/categories.js'
import { url } from '../partials/url.js'

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
        {
            name: 'press',
            label: 'Source',
            widget: 'object',
            collapsed: true,
            required: false,
            fields: [
                title,
                url
            ]
        },
        body
    ]
}

export default posts