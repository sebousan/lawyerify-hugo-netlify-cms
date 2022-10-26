import { links } from '../partials/links.js'

const menu = {
    name: 'menu',
    label: 'Menus',
    description: 'Tous les menus disponibles',

    editor: { preview: false },

    files: [

        {
            name: 'primary',
            label: 'Principal',
            file: 'data/menu/primary.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'secondary',
            label: 'Secondaire',
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'legal',
            label: 'Légal (mentions, politiques…)',
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [ links ]
        },
        {
            name: 'social',
            label: 'Réseaux sociaux',
            file: 'data/menu/social.yml',
            i18n: true,
            fields: [ links ]
        }

    ]

}

export default menu