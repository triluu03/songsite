import { SearchType, SearchReturnedValue } from '../service/searchService';

import AlbumResults, {
    AlbumReturnedValue,
} from './search_results/AlbumResults';
import ArtistResults, {
    ArtistReturnedValue,
} from './search_results/ArtistResults';
import PlaylistResults, {
    PlaylistReturnedValue,
} from './search_results/PlaylistResults';
import TrackResults, {
    TrackReturnedValue,
} from './search_results/TrackResults';
// import EpisodeResults from './search_results/EpisodeResults';
// import ShowResults from './search_results/ShowResults';

type SearchResultsProps = {
    searchResults: SearchReturnedValue;
    searchType: SearchType;
};

// Search Results Displayed
const SearchResults = ({
    searchResults,
    searchType,
}: SearchResultsProps): JSX.Element => {
    switch (searchType) {
        case 'album':
            return (
                <AlbumResults
                    searchResults={searchResults as AlbumReturnedValue}
                />
            );
        case 'artist':
            return (
                <ArtistResults
                    searchResults={searchResults as ArtistReturnedValue}
                />
            );
        case 'playlist':
            return (
                <PlaylistResults
                    searchResults={searchResults as PlaylistReturnedValue}
                />
            );
        case 'track':
            return (
                <TrackResults
                    searchResults={searchResults as TrackReturnedValue}
                />
            );
        // case 'episode':
        //     return <EpisodeResults searchResults={searchResults as EpisodeReturnedValue} />;
        // case 'show':
        //     return <ShowResults searchResults={searchResults as ShowReturnedValue} />;
        default:
            return <div />;
    }
};

export default SearchResults;
