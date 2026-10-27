
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import favouritesReducer, {
getInitialFavourites,
} from '../reducers/favouritesReducer'
import SearchBar from './SearchBar'
import PhotoGrid from './PhotoGrid'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'

function Gallery() {
const { photos, loading, error } = useFetchPhotos()

const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    getInitialFavourites
)

const [searchQuery, setSearchQuery] = useState('')

useEffect(() => {
    try {
    localStorage.setItem('celebrare-assignment', JSON.stringify(favourites))
    } catch {
    // The gallery still works if localStorage is unavailable.
    }
}, [favourites])

const handleSearchChange = useCallback((value) => {
    setSearchQuery(value)
}, [])

const handleToggleFavourite = useCallback((photoId) => {
    dispatch({
    type: 'TOGGLE_FAVOURITE',
    photoId,
    })
}, [])

const filteredPhotos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) {
    return photos
    }

    return photos.filter((photo) =>
    photo.author.toLowerCase().includes(query)
    )
}, [photos, searchQuery])

return (
    <section aria-labelledby="collection-heading">
    <div className="flex flex-col gap-5 border-b-2 border-[#20201D] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#365AE8]">
            The archive / 001
        </p>

        <h2
            id="collection-heading"
            className="text-3xl font-black tracking-tight sm:text-4xl"
        >
            The collection<span className="text-[#365AE8]">.</span>
        </h2>
        </div>

        <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        />
    </div>

    <div className="flex flex-wrap items-center justify-between gap-3 py-5">
        <p className="text-xs font-bold uppercase tracking-wider text-[#62615A]">
        {loading
            ? 'Preparing your collection...'
            : `${filteredPhotos.length} of ${photos.length} frames`}
        </p>
    </div>

    {loading ? (
        <LoadingSpinner />
    ) : error ? (
        <ErrorMessage message={error} />
    ) : (
        <PhotoGrid
        photos={filteredPhotos}
        favourites={favourites}
        onToggleFavourite={handleToggleFavourite}
        />
    )}
    </section>
)
}

export default Gallery
