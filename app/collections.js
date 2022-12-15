// Available collections
import { availableCollections } from './settings/available-collections.js';

// Types
import col_offices from './content/offices.js';
import col_persons from './content/persons.js';
import col_expertises from './content/expertises.js';
import col_posts from './content/posts.js';
import col_categories from './content/categories.js';
import col_tags from './content/tags.js';
import col_publications from './content/publications.js';
import col_pages from './content/pages.js';
import col_indexes from './content/indexes.js';

// Data
import config from './data/config.js';

const selectedCollections = [];

// add indexes collection
selectedCollections.push(col_indexes);

// add selected collections
availableCollections.forEach(element => {
    if (availableCollections.includes(element)) {
        selectedCollections.push(eval('col_' + element));
    }
});

// add pages collection
selectedCollections.push(col_pages);

// add config
selectedCollections.push(config);

export const collections = selectedCollections;
export default collections;
