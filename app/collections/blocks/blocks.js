import { block_cta } from './cta.js'
import { block_editorial } from './editorial.js'
import { block_embed } from './embed.js'
import { block_figure } from './figure.js'
import { block_latestposts } from './latest-posts.js'
import { block_persons } from './persons.js'
import { block_quote } from './quote.js'

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    types: [
        block_cta,
        block_editorial,
        block_embed,
        block_figure,
        block_latestposts,
        block_persons,
        block_quote
    ]
}
