export const persons = {
    name: 'persons',
    label: 'Personnes',
    widget: 'relation',
    collection: 'persons',
    search_fields: ['title'],
    value_field: '{{slug}}',
    display_fields: ['title'],
    multiple: true,
    required: false
}