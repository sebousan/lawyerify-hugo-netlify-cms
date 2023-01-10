import { email } from './email.js'
import { phone } from './phone.js'
import { fax } from './fax.js'
import { linkedin } from './linkedin.js'
import { twitter } from './twitter.js'

export const contact = {
    name: 'contact',
    label: 'Contact',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        email,
        phone,
        fax,
        linkedin,
        twitter
    ]
}