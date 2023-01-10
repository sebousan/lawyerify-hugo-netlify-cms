export const address = {
    name: 'address',
    label: 'Adresse',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        { name: 'street', label: 'Numéro et nom de rue', widget: 'string', required: false, i18n: 'duplicate' },
        { name: 'zipcode', label: 'Code postal', widget: 'string', required: false, i18n: 'duplicate' },
        { name: 'city', label: 'Ville', widget: 'string', required: false, i18n: 'duplicate' },
        { name: 'country', label: 'Pays', widget: 'string', required: false, i18n: 'duplicate' }
    ]
}