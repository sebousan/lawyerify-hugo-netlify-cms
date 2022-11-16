// Available collections
import { availableCollections } from '../settings.js'

// Types
import col_offices from './content/offices.js';
import col_persons from './content/persons.js';
import col_expertises from './content/expertises.js';
import col_posts from './content/posts.js';
import col_categories from './content/categories.js';
import col_pages from './content/pages.js';
import col_indexes from './content/indexes.js';

// Data
import config from './data/config.js';

const selectedCollections = [];

// add mandory collections
selectedCollections.push(col_indexes);
selectedCollections.push(col_pages);

// add selected collections
availableCollections.forEach(element => {
    if (availableCollections.includes(element)) {
        selectedCollections.push(eval('col_' + element));
    }
});

// add config
selectedCollections.push(config);

export const collections = selectedCollections;
export default collections;
