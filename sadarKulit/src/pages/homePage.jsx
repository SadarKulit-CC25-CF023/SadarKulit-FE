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
          <button className="px-8 py-3 border border-cyan-500 bg-transparent rounded-3xl hover:bg-cyan-500 transition duration-300">
            <p className="text-cyan-500 hover:text-white">Deteksi Sekarang</p>
          </button>
        </div>
      </div>

      <div className="mt-16 flex justify-between">
        <img src="/pemanis1.png" alt="SadarKulit Logo" className="h w-auto" />

        <div className="flex flex-col items-center justify-center mr-80">
          <h1 className="text-4xl font-medium m-10 text-cyan-500">Deteksi Penyakit Kulit Kamu!</h1>
          {/* form input gambar */}
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

      <div className="mt-16 flex justify-between">
        <div className="mt-90">
          <img src="/rectangle1.png" alt="SadarKulit Logo"/>
        </div>
        <div className="flex flex-col items-center justify-top mr-80">
          <h1 className="text-4xl font-medium m-10 text-black">Riwayat Kulit Kamu</h1>
        
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex flex-col space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">1/5/2025</span>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                    Eksim
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">2/5/2025</span>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                    Normal
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700">3/5/2025</span>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                    Eksim
                  </button>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <div className="stroke-gray-400">
          <div className="flex flex-col items-center justify-between"></div>
        </div>
        <img src="/pemanis2.png" alt="SadarKulit Logo" className="h w-auto justify-end" />
      </div>
    </div>
  );
}