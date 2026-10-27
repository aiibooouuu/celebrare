
function LoadingSpinner() {
return (
    <div
    role="status"
    aria-live="polite"
    className="flex min-h-64 flex-col items-center justify-center gap-5 border-2 border-dashed border-[#20201D]/40 bg-[#F5F0E6]/70 px-6 py-12"
    >
    <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 animate-spin border-4 border-[#20201D]/15 border-t-[#365AE8]" />

        <span className="text-lg font-black text-[#20201D]">30</span>
    </div>

    <div className="text-center">
        <p className="font-black uppercase tracking-widest">
        Developing frames...
        </p>

        <p className="mt-2 text-sm text-[#62615A]">
        Gathering photographs for your collection.
        </p>
    </div>

    <span className="sr-only">Loading photos, please wait.</span>
    </div>
)
}

export default LoadingSpinner
