export const image_src = {
    name: 'src',
    label: 'Image',
    widget: 'image',
    required: false,
    i18n: 'duplicate',
    media_library: {
        config: {
            // max_file_size: 700000 // 700ko
            max_file_size: 2000000 // 2Mo
        }
    },
    hint: '700Ko max, Compresser l’image avant de l’envoyer : https://tinypng.com/',
    media_folder: '/assets/images/uploads',
    public_folder: '/images/uploads'
}