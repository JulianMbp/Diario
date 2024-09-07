import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="bg-white">
      <ul className="flex">
          <li className="flex-1 mr-2">
            <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Notas</a>
          </li>
          <li className="flex-1 mr-2">
            <a className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nota2</a>
          </li>
  </ul>
      </header>
      <h1>hola</h1>
      <footer className="bg-blue-300">footer</footer>
    </main>
  );
}
