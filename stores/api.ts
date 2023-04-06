			
        //     import {  SearchResult } from '@wikimedia/codex';
        //     import { RestResult } from './types';
        //     /**
		// 	 * Format search results for consumption by TypeaheadSearch.
		// 	 *
		// 	 * @param pages
		// 	 * @return
		// 	 */
		// 	function adaptApiResponse( pages: RestResult[] ): SearchResult[] {
		// 		return pages.map( ( { id, key, title, description, thumbnail } ) => ( {
		// 			label: title,
		// 			value: id,
		// 			description: description,
		// 			url: `https://en.wikipedia.org/wiki/${encodeURIComponent( key )}`,
		// 			thumbnail: thumbnail ? {
		// 				url: thumbnail.url,
		// 				width: thumbnail.width ?? undefined,
		// 				height: thumbnail.height ?? undefined
		// 			} : undefined
		// 		} ) );
		// 	}

		// 	fetch(
		// 		`https://en.wikipedia.org/w/rest.php/v1/search/title?q=${encodeURIComponent( value )}&limit=10&`
		// 	).then( ( resp ) => resp.json() )
		// 		.then( ( data: { pages: RestResult[] } ) => {
		// 			// Make sure this data is still relevant first.
		// 			if ( currentSearchTerm.value === value ) {
		// 				// If there are results, format them into an array of
		// 				// SearchResults to be passed into TypeaheadSearch for
		// 				// display as a menu of suggestions.
		// 				searchResults.value = data.pages && data.pages.length > 0 ?
		// 					adaptApiResponse( data.pages ) :
		// 					[];

		// 				// Set the search footer URL to a link to the search
		// 				// page for the current search query.
		// 				searchFooterUrl.value = `https://en.wikipedia.org/w/index.php?title=Special%3ASearch&fulltext=1&search=${encodeURIComponent( value )}`;

		// 			}
		// 		} ).catch( () => {
		// 			// On error, reset search results and search footer URL.
		// 			searchResults.value = [];
		// 			searchFooterUrl.value = '';
		// 		} );
		// }