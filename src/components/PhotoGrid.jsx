
import PhotoCard from './PhotoCard'

function PhotoGrid({ photos, favourites, onToggleFavourite }) {
if (photos.length === 0) {
    return (
    <div className="border-2 border-dashed border-[#20201D]/40 px-6 py-16 text-center">
        <p className="text-xl font-black">No frames found.</p>
        <p className="mt-2 text-sm text-[#62615A]">
        Try another search term.
        </p>
    </div>
    )
}

return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {photos.map((photo) => (
        <PhotoCard
        key={photo.id}
        photo={photo}
        isFavourite={favourites.includes(photo.id)}
        onToggleFavourite={onToggleFavourite}
        />
    ))}
    </div>
)
}

export default PhotoGrid
