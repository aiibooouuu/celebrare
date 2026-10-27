
import { Heart } from 'lucide-react'

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
return (
    <article className="group overflow-hidden border-2 border-[#20201D] bg-white shadow-[5px_5px_0_0_#20201D] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#365AE8]">
    <div className="relative overflow-hidden border-b-2 border-[#20201D] bg-[#E8E2D6]">
        <img
        src={`https://picsum.photos/id/${photo.id}/600/450`}
        alt={`Photograph by ${photo.author}`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />

        <span className="absolute left-3 top-3 border-2 border-[#20201D] bg-[#F2DF65] px-2 py-1 text-[10px] font-black uppercase tracking-widest">
        Frame {photo.id}
        </span>
    </div>

    <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#77746B]">
            Photographer
        </p>

        <h3 className="mt-1 truncate text-sm font-black text-[#20201D] sm:text-base">
            {photo.author}
        </h3>
        </div>

        <button
        type="button"
        onClick={() => onToggleFavourite(photo.id)}
        aria-label={
            isFavourite
            ? `Remove ${photo.author} from favourites`
            : `Add ${photo.author} to favourites`
        }
        aria-pressed={isFavourite}
        className={`flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#20201D] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#365AE8] ${
            isFavourite
            ? 'bg-[#F2DF65] text-[#20201D]'
            : 'bg-white text-[#20201D] hover:bg-[#F2DF65]'
        }`}
        >
        <Heart
            size={21}
            strokeWidth={2.5}
            fill={isFavourite ? 'red' : 'none'}
            aria-hidden="true"
        />
        </button>
    </div>
    </article>
)
}

export default PhotoCard
