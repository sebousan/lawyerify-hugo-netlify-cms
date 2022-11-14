// Types
import coll_offices from './content/offices.js';
import coll_persons from './content/persons.js';
import coll_expertises from './content/expertises.js';
import coll_posts from './content/posts.js';
import coll_categories from './content/categories.js';
import coll_pages from './content/pages.js';

import indexes from './content/indexes.js';

// Data
import config from './data/config.js';
// import statutes from './data/statutes.js';

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