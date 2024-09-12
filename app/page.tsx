
export default function Home() {
  return (
    <main className=" bg-[#F5EEE3] h-full w-full divide-slate-300 divide-y">
      
      <header className="fixed w-screen border-b border-slate-50/10 bg-white bg-opacity-0 backdrop-blur-md transition-colors duration-500 firefox:bg-app-body-color firefox:ng-opacity-95">
      <div className="grid grid-cols-3">
        <img className="h-15 w-10" src="/img/Recurso 3.png" />
        <h1 className=" text-2xl font-bold text-right col-span-2 p-5">
          Familia Delgado Bastidas
        </h1>
      </div>
      </header>
        <nav className="px-20 pt-20 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col mt-3 gap-2 sm:flex-row sm:m-0">
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-1" href="#luna">Luna</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-4" href="#nacho">Nacho</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-2" href="#samy">Samy</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-7" href="#bruno">Bruno</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-3" href="#maya">Maya</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-6" href="#popocha">Popocha</a>
            <a className="text-gray-600 hover:bg-[#FDC17A] w-full text-left p-2 rounded hover:text-gray-900 order-6" href="#browni">Brownie</a>
          </div>
        </nav>
      <section className="divide-y divide-slate-300 flex flex-col sm:flex sm:justify-between">


          <section id="luna" className="text-center order-1 p-4 gap-20 grid grid-flow-col grid-cols-2 w-25 h-25">
            <div className="text-left order-2">
              <h1 className="font-bold text-4xl mb-4">Luna</h1>
              <p className="font-thin">¡Hola! Soy Luna, una perrita mestiza de color blanco con orejas 
                paradas y un corazón lleno de amor. El 16 de abril de
                este año cumplí 16 años, ¡una edad llena de sabiduría
                canina! Aunque duermo la mayor parte del día, cuando
                estoy despierta me encanta disfrutar de galletas de avena,
                concentrado del más fino, y por supuesto, las tostadas y las
                gomas para perro. Soy la consentida de mi mamá
                (pero eso queda entre nosotros). Vivir con mi familia ha
                sido una aventura maravillosa, y me encanta recibir caricias,
                ¡especialmente cuando me miman mucho!</p>
            </div>
            <img className="rounded-lg box-border h-25 w-25 opacity-50 order 1" src="/img/luna.jpg" ></img>
          </section>
          <section id="nacho" className="text-center order-4 p-4">
            Nacho
          </section>
          <section id="samy" className="text-center order-2 p-4">
            Samy
          </section>
          <section id="bruno" className="text-center order-8 p-4">
            Bruno
          </section>
          <section id="maya" className="text-center order-3 p-4">
            Maya
          </section>
          <section id="popocha" className="text-center order-6 p-4">
            Popocha
          </section>
          <section id="browni" className="text-center order-7 p-4">
            Brownie
          </section>
      </section>
      <footer className="text-center p-10">footer</footer>
    </main>
  );
}
