
const Contact = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[90vh] bg-cover bg-center" style={{backgroundImage:"url(/src/assets/Images/bgcontact.jpg)"}}>
        <div className="max-w-md w-full max-auto p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-3xl text-center text-white font-bold mb-6">Contactanos</h2>
            <form action="">
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Nombre:</label>
                    <input placeholder="Ingresa tu nombre" className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:outline-none focus:border-blue-500 " required type="text"  />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Email:</label>
                    <input placeholder="Ingresa tu email" className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:outline-none focus:border-blue-500 " required type="text"  />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Mensaje:</label>
                    <textarea rows='4'  placeholder="Deja tu mensaje" className="w-full px-3 py-2 border rounded-lg bg-gray-600 focus:outline-none focus:border-blue-500 " required type="text"  />
                </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-white">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact