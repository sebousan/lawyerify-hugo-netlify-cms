export const authors = {
    name: 'authors',
    label: 'Authors',
    widget: 'relation',
    collection: 'persons',
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    required: false
}