/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// Show filter on click
var filterButton = document.getElementById('filter');

function showFilter() {
    var filterForm = document.getElementById('filterForm');
    filterForm.classList.toggle('show');
}

filterButton.addEventListener('click', showFilter);

// Show search on click

var searchButton = document.getElementById('search');

function showSearch() {
    var filterForm = document.getElementById('searchForm');
    filterForm.classList.toggle('show');
    document.getElementById('searchStyle').focus();
}

searchButton.addEventListener('click', showSearch);
