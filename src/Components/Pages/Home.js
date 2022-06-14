import "./css/Home.css";

function Home () {
  return (
    <div className="flex grid grid-cols-2">
      <div className="flex h-screen mx-auto justify-center items-center font-serif font-bold ">
        <div className="text-left">
          <div id="text-content" className="">
            <h1 className="text-6xl">Hola,</h1>
            <h2 className="text-5xl">soy Mario Roca</h2>
            <p className="text-xl">Full stack developer</p>
            <p className="text-xl">Barranquilla, Colombia</p>
          </div>

          <div id="see-stuff" className="pt-4">
            <button
              className="bg-transparent hover:bg-white text-gray-300
                    font-semibold hover:text-black py-2 px-4 border border-gray-300 hover:border-transparent rounded">
              Echa un vistazo a mi trabajo
            </button>
          </div>
        </div>
      </div>

      <div className="flex font-serif font-bold">
        <div className="flex h-screen mx-auto justify-center items-center">
          <div>
            <img src="images/Me.jpeg" className="h-96 w-96 rounded-full border border-4 border-gray-100 shadow-sm"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;