import { title } from '../fields/title.js'
import { text_area } from '../fields/text-area.js'
import { map } from '../fields/map.js'
import { zoom } from '../fields/zoom.js'
import { background } from '../fields/background.js'

export const block_map = {
    name: 'map',
    label: 'Carte',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        title,
        text_area,
        map,
        zoom,
        background
    ]
}