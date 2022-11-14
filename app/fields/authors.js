export const authors = {
    name: 'authors',
    label: 'Authors',
    widget: 'relation',
    collection: 'authors',
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}