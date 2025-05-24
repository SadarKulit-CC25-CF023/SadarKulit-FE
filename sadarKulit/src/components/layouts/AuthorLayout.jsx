import { Link } from "react-router-dom";
import Navbar from "../navbar";

export default function AuthorLayout({ tittle, children, type}) {
  return (
    <>
      <Navbar />
      <div  className="flex justify-center min-h-screen items-center"> 
        <div className="w-full max-w-xs">
              <h1 className="text-3xl font-bold text-blue-500 ">{tittle}</h1>

              {children}

              {type === "login" ? (
                  <p className="text-center">Belum Punya Akun? <Link to="/register" className="text-blue-500 font-bold">Register</Link></p>
              ) : (
                  <p className="text-center">Sudah Punya Akun? <Link to="/login" className="text-blue-500 font-bold">Login</Link></p>
              )}
        </div>
      </div>
    </>
  );
}