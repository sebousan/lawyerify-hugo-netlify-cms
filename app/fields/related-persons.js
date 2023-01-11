export const relatedPersons = {
    name: 'related',
    label: 'Lié à une autre personne ?',
    hint: 'Exemple: si vous êtes un collaborateur, vous pouvez vous lier à un associé',
    widget: 'relation',
    collection: 'persons',
    search_fields: ['title'],
    value_field: 'title',
    display_fields: ['title'],
    multiple: true,
    required: false,
    i18n: 'duplicate'
}