export const imagesimple = {
    name: 'src',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    media_library: {
        config: {
            max_file_size: 512000
        }
    },
    hint: '500Ko max, Compresser l’image avant de l’envoyer : https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
}