// Types
import coll_offices from './types/offices.js';
import coll_persons from './types/persons.js';
import coll_expertises from './types/expertises.js';
import coll_posts from './types/posts.js';
import coll_categories from './types/categories.js';
import coll_pages from './types/pages.js';

import indexes from './types/indexes.js';

// Datas
import config from './datas/config.js';
// import statutes from './datas/statutes.js';

export const collections = [
    coll_offices,
    coll_persons,
    coll_expertises,
    coll_posts,
    coll_categories,
    coll_pages,
    indexes,
    // statutes,
    config
]

export default collections