  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Navbar from "../components/navbar";

  export default function HomePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [historyData, setHistoryData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsLoggedIn(false);
        setLoading(false);
        return;
      }

      setIsLoggedIn(true);

      // Fetch history dari backend
      fetch("https://sadarkulit-be.vercel.app/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            const errMsg = await res.json();
            throw new Error(errMsg.message || "Gagal mengambil data riwayat");
          }
          return res.json();
        })
        .then((data) => {
          setHistoryData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    return (
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div
          className="relative py-24 px-10 bg-cover bg-center text-white"
          style={{ backgroundImage: 'url("/bg.png")' }}
        >
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

        {/* Upload Section */}
        <div className="mt-16 flex justify-between">
          <img src="/pemanis1.png" alt="SadarKulit Logo" className="h w-auto" />
          <div className="flex flex-col items-center justify-center mr-80">
            <h1 className="text-4xl font-medium m-10 text-cyan-500">Deteksi Penyakit Kulit Kamu!</h1>
            <form>
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

        {/* Riwayat Section */}
        <div className="mt-16 flex justify-between">
          <div className="mt-90">
            <img src="/rectangle1.png" alt="SadarKulit Logo" />
          </div>
          <div className="flex flex-col items-center justify-top mr-80">
            <h1 className="text-4xl font-medium m-10 text-black">Riwayat Kulit Kamu</h1>

            {loading && <p>Loading riwayat...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            {!loading && !isLoggedIn && (
              <div className="text-center">
                <p className="text-gray-600 text-lg mb-4">Oops, kamu belum login 😅</p>
                <button
                  onClick={() => navigate("/login")}
                  className="px-6 py-2 text-cyan-500 border border-cyan-500 rounded-full hover:bg-cyan-500 hover:text-white transition"
                >
                  Login Sekarang
                </button>
              </div>
            )}

            {!loading && isLoggedIn && historyData.length === 0 && (
              <p className="text-gray-700">Belum ada riwayat deteksi kulit.</p>
            )}

            {!loading && isLoggedIn && historyData.length > 0 && (
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex flex-col space-y-6">
                  {historyData.map((item, idx) => (
                    <div key={item._id || idx} className="flex items-center space-x-3">
                      <span className="text-gray-700">
                        {new Date(item.dateChecked).toLocaleDateString()}
                      </span>
                      <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700">
                        {item.detectedDisease || "Tidak diketahui"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <img src="/pemanis2.png" alt="SadarKulit Logo" className="h w-auto justify-end" />
        </div>
      </div>
    );
  }
