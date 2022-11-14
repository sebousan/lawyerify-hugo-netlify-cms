// import { title } from '../partials/title.js'
import { links } from '../partials/links.js'
import { description } from '../partials/description.js'
import { imagesimple } from '../partials/image-simple.js'

const config = {
    name: 'config',
    label: 'Config',

    editor: { preview: false },

    files: [

        // {
        //     name: 'statutes',
        //     label: 'Statuts des personnes',
        //     file: 'data/statutes.yml',
        //     i18n: true,
        //     fields: [
        //         {
        //             name: 'statutes',
        //             label: 'statutes',
        //             widget: 'list',
        //             fields: [
        //                 title
        //             ]
        //         }
        //     ]
        // },
        {
            name: 'primary',
            label: 'Menu principal',
            file: 'data/menu/primary.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'secondary',
            label: 'Menu secondaire',
            file: 'data/menu/secondary.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'legal',
            label: 'Menu légal (mentions, politiques…)',
            file: 'data/menu/legal.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'social',
            label: 'Menu réseaux sociaux',
            file: 'data/menu/social.yml',
            i18n: true,
            fields: [
                links
            ]
        },
        {
            name: 'seo',
            label: 'SEO',
            file: 'config/_default/languages.yml',
            i18n: true,
            fields: [
                {
                    name: 'fr',
                    label: 'Français',
                    widget: 'object',
                    fields: [
                        { name: 'title', label: 'Nom du site', widget: 'string', i18n: true },
                        description,
                        imagesimple
                    ]
                }
            ]
        }

    ]

}

export default config