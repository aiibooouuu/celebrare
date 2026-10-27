
const STORAGE_KEY = 'celebrare-assignment'

export function getInitialFavourites() {
try {
    const savedFavourites = localStorage.getItem(STORAGE_KEY)

    if (!savedFavourites) {
    return []
    }

    const parsedFavourites = JSON.parse(savedFavourites)

    return Array.isArray(parsedFavourites) ? parsedFavourites : []
} catch {
    return []
}
}

function favouritesReducer(state, action) {
switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
    const isFavourite = state.includes(action.photoId)

    if (isFavourite) {
        return state.filter((id) => id !== action.photoId)
    }

    return [...state, action.photoId]
    }

    default:
    return state
}
}

export default favouritesReducer
