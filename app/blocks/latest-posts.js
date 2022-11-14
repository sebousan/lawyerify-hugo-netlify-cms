import { title } from '../fields/title.js'
import { count } from '../fields/count.js'

export const block_latestposts = {
    name: 'latest-posts',
    label: 'Dernières actualités',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        count
    ]
}