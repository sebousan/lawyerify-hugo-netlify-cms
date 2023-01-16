import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { offices } from '../fields/offices.js'
import { statutes } from '../fields/statutes.js'
import { relatedPersons } from '../fields/related-persons.js'
import { expertises } from '../fields/expertises.js'
import { featured_image } from '../fields/featured-image.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'
console.log(relatedPersons)

const persons = {
    name: 'persons',
    label: 'Personnes',
    label_singular: 'Personne',
    folder: 'content/persons',
    create: true,
    description: 'Toutes les personnes',

    editor: { preview: false },
    // #i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },
    summary: '{{title}}',

    slug: '{{slug}}',
    // path: '{{slug}}/_index',

    fields: [
        isNotIndex,
        draft,
        title,
        offices,
        statutes,
        expertises,
        relatedPersons,
        description,
        featured_image,
        contact,
        body
    ]
}

export default persons