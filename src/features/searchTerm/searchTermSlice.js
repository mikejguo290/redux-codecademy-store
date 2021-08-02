/*
Extra Credit:
1. Create a function called searchTermReducer that can handle the following action types:
    * 'searchTerm/setSearchTerm'
    * 'searchTerm/clearSearchTerm'
    * Don't forget to set the initial state and return state by default!

2. Create a function called setSearchTerm
    * It has one parameter, term
    * It returns an action object whose payload is the term value
    * See SearchTerm.js for how this will be used.

3. Create a function called clearSearchTerm
    * It returns an action object with no payload
    * See SearchTerm.js for how this will be used.

*/

// action creators 

const setSearchTerm = (term) => {
    // set searchTerm to be value of the term parameter 
    return {
        type:'searchTerm/setSearchTerm',
        payload: term,
    }
}

const clearSearchTerm = ()=> {
    // clear search term - set search term to be empty string.
    return {
        type: 'searchTerm/clearSearchTerm',
        payload: '',
    }
}


