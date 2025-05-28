import { useState } from "react";
import InputForm from "../../components/elements/Input";
import Button from "../elements/Button";

export default function FormRegister() {
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const username = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    // Validasi
    if (!username || !email || !password || !confirmPassword) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password tidak cocok!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://sadarkulit-be.vercel.app/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Registrasi gagal");

      // Simpan token
      localStorage.setItem("token", data.token);
      alert("Registrasi berhasil!");
      window.location.href = "/login"; // redirect ke login page
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <InputForm
          name="Username"
          inputFor="name"
          type="text"
          placeholder="Enter Your Name"
        />
        <InputForm
          name="Email"
          inputFor="email"
          type="email"
          placeholder="Email"
        />
        <InputForm
          name="Password"
          inputFor="password"
          type="password"
          placeholder="Password"
        />
        <InputForm
          name="Confirm Password"
          inputFor="confirm-password"
          type="password"
          placeholder="Confirm Password"
        />

        <Button
          classname="mt-3 bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          {loading ? "Mendaftarkan..." : "Daftar"}
        </Button>
      </form>
    </div>
  );
}
