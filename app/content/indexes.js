import { isIndex } from '../fields/is-index.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { hero } from '../fields/hero.js'
import { blocks } from '../blocks/blocks.js'

const indexes = {
    name: 'indexes',
    label: 'Rubriques',
    folder: 'content',
    create: false,
    description: 'La page principale de chaque rubrique',

    editor: { preview: false },
    // #i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: true },
    summary: '{{title}}',

    fields: [
        isIndex,
        title,
        description,
        hero,
        blocks
    ]
}

export default indexes