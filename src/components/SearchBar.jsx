import {Search} from 'lucide-react'

function SearchBar({ searchQuery, onSearchChange }) {
return (
    <div className="w-full sm:max-w-md">
    <label
        htmlFor="photo-search"
        className="mb-2 block text-xs font-black uppercase tracking-[0.16em]"
    >
        Find a photo based on author's name
    </label>

    <div className="flex border-2 border-[#20201D] bg-white shadow-[4px_4px_0_0_#20201D] transition-shadow focus-within:shadow-[4px_4px_0_0_#365AE8]">
        <span
        aria-hidden="true"
        className="flex items-center border-r-2 border-[#20201D] px-3 text-xl"
        >
        <Search />
        </span>

        <input
        id="photo-search"
        type="search"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Try an author's name..."
        autoComplete="off"
        className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm font-medium outline-none placeholder:text-[#99958B]"
        />

    </div>
    </div>
)
}

export default SearchBar
