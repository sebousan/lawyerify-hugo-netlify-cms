export const authors = {
    name: 'authors',
    label: 'Auteurs ?',
    hint: 'Plusieurs auteurs possible',
    widget: 'relation',
    collection: 'persons',
    search_fields: ['title'],
    value_field: 'title',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}