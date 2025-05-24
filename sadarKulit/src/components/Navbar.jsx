import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true jika ada token
  }, []);

  return (
    <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img src="/Logo.png" alt="SadarKulit Logo" className="h-15 w-auto" />
        </a>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-lg text-black font-light">
          <li>
            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300 ease-in-out"
            >
              Beranda
            </a>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <a href="#" className="hover:text-cyan-400">Deteksi</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">Riwayat</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                  className="hover:text-red-400"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login" className="hover:text-cyan-400">Login</a>
              </li>
              <li>
                <a href="/register" className="hover:text-cyan-400">Daftar</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
