// Fuzzy Search:

// fuzzy searching (more formally known as approximate string matching) 
// is the technique of finding strings that are approximately equal to a given 
//pattern (rather than exactly)

// use react-fuzzy npm library

import FuzzySearch from 'react-fuzzy';

const list = [{
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  }, {
    id: 2,
    title: 'The DaVinci Code',
    author: 'Dan Brown'
  }, {
    id: 3,
    title: 'Angels & Demons',
    author: 'Dan Brown'
  }];
  
<FuzzySearch
    list={list}
    keys={['author', 'title']}
    width={430}
    onSelect={(newSelectedItem) => {
        // Local state setter defined elsewhere
        setSelectedItem(newSelectedItem)
    }}
/>