
function ErrorMessage({ message }) {
return (
    <div
    role="alert"
    className="border-2 border-[#20201D] bg-[#FCE5DE] p-6 shadow-[5px_5px_0_0_#20201D] sm:p-8"
    >
    <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center border-2 border-[#20201D] bg-[#F2DF65] text-xl font-black">
        !
        </div>

        <div>
        <p className="text-lg font-black">
            Couldn't load the frames.
        </p>

        <p className="mt-2 text-sm leading-6 text-[#62615A]">
            {message || 'Something went wrong while fetching photographs. Please try again later.'}
        </p>
        </div>
    </div>
    </div>
)
}

export default ErrorMessage
