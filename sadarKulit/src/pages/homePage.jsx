import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar sticky di atas */}
      <Navbar />

      {/* Background section */}
        <div
          className="relative py-24 px-10 bg-cover bg-center text-white"
          style={{ backgroundImage: 'url("/bg.png")' }}
        >
          {/* Gradient overlay bawah */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>


          <div className="relative max-w-3xl ml-30">
            <h1 className="text-7xl font-medium text-black mb-6 leading-tight">
              Selamat <br /> Datang di <br /> SadarKulit
            </h1>
            <p className="text-2xl text-black mb-8 leading-relaxed">
              Website Pendeteksi Penyakit Kulit
            </p>
            <button className="px-8 py-3 text-cyan-500 border border-cyan-500 bg-transparent rounded-3xl hover:bg-cyan-500 hover:text-white transition duration-300">
              Deteksi Sekarang
            </button>
          </div>
        </div>

      
      <div className="mt-16 flex justify-between">
        <img src="/pemanis1.png" alt="SadarKulit Logo" className="h w-auto" />
        
        <div className="flex flex-col items-center justify-center mr-80">
          <h1 className="text-4xl font-medium mb-10">Deteksi Penyakit Kulit Kamu!</h1>
          {/* form input gambar*/}
          <form className="">
            <input
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded-md p-2"
            />
            <button
              type="submit"
              className="ml-2 px-2 py-2 text-cyan-500 border border-cyan-500 bg-transparent rounded-md hover:bg-cyan-500 hover:text-white transition duration-300"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
}
