import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { press } from '../fields/press.js'
import { quoters } from '../fields/quoters.js'

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

    filter: { field: 'isIndex', value: false },
    summary: '{{title}} — {{year}}',

    fields: [
        isNotIndex,
        draft,
        date,
        quoters,
        title,
        description,
        press
    ]
}

export default publications