
export default function Home() {
  return (
    <main className=" bg-[#F5EEE3] h-full w-full divide-slate-300 divide-y">
      <h1 className=" text-5xl font-bold text-center pb-5 pt-5">
        Nuestra Familia
      </h1>
      <header className=" ">
        <nav className="px-4 py-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-star mt-3 gap-2 sm:flex-row sm:m-0">
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-1" href="#luna">Luna</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-4" href="#nacho">Nacho</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-2" href="#samy">Samy</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-7" href="#bruno">Bruno</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-3" href="#maya">Maya</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-6" href="#popocha">Popocha</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-6" href="#browni">Brownie</a>
          </div>
        </nav>
      </header>
      <section className="divide-y divide-slate-300 flex flex-col ">
          <section id="luna" className="text-center">
            Luna
          </section>
          <section id="nacho" className="text-center">
            Nacho
          </section>
          <section id="samy" className="text-center">
            Samy
          </section>
          <section id="bruno" className="text-center">
            Bruno
          </section>
          <section id="maya" className="text-center">
            Maya
          </section>
          <section id="popocha" className="text-center"> 
            Popocha
          </section>
          <section id="browni" className="text-center">
            Brownie
          </section>
      </section>
      <footer className="text-center p-10">footer</footer>
    </main>
  );
}
