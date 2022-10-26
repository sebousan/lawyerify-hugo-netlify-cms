import { blockcta } from './cta.js'
import { blockeditorial } from './editorial.js'
import { blockembed } from './embed.js'
import { blockimage } from './image.js'
import { blocklatestposts } from './latest-posts.js'
import { blockpersons } from './persons.js'
import { blockquote } from './blockquote.js'

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    types: [
        blockcta,
        blockeditorial,
        blockembed,
        blockimage,
        blocklatestposts,
        blockpersons,
        blockquote
    ]
}
