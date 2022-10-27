// export const statutes = {
//     name: 'statutes',
//     label: 'Satuts',
//     widget: 'relation',
//     collection: 'statutes',
//     search_fields: ['title'],
//     value_field: '{{slug}}',
//     display_fields: ['title'],
//     required: false
// }

export const statutes = {
    name: 'statutes',
    label: 'Satuts',
    widget: 'select',
    options: [
        { label: 'Associé', value: 'associate' },
        { label: 'Collaborateur', value: 'collaboratorr' },
        { label: 'Juriste', value: 'jurist' },
        { label: 'Secrétaire', value: 'secretary' }
        { label: 'Stagiaire', value: 'trainee' },
    ],
    required: false
}