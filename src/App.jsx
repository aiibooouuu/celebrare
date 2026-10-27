
import Gallery from './components/Gallery'

function App() {
  return (

      <main
        className="min-h-screen text-[#20201D]"
        style={{
          backgroundColor: '#F5F0E6',
          backgroundImage: `
            linear-gradient(
              rgba(54, 90, 232, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(54, 90, 232, 0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              rgba(54, 90, 232, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(54, 90, 232, 0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '32px 32px, 32px 32px, 8px 8px, 8px 8px',
        }}
      >

      <header className="border-b-2 border-[#20201D] px-5 py-5 sm:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="text-xl font-black tracking-tight">
            CELEBRARE<span className="text-[#365AE8]">-</span>ASSIGNMENT <span className="text-[#365AE8]">(abuhamza)</span>
          </a>

          <span className="border-2 border-[#20201D] bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
            React photo gallery
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-10 sm:py-16">
        <div className="max-w-4xl">
          <p className="mb-5 inline-block border-2 border-[#20201D] bg-[#F2DF65] px-3 py-1.5 text-xs font-black uppercase tracking-widest">
            A collection of moments
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            See the world
            <br />
            <span className="text-[#365AE8]">in frames.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#62615A] sm:text-lg">
            Thirty photographs. Different perspectives.
            Find the frames that catch your eye.
          </p>
        </div>

        <div className="mt-10">
          <Gallery />
        </div>
      </section>

      <footer className="border-t-2 border-[#20201D] px-5 py-5 sm:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 text-xs font-bold uppercase tracking-wider">
          <span>FRAME / 30</span>
          <span>Made with React & Tailwind CSS</span>
        </div>
      </footer>
    </main>
  )
}

export default App
