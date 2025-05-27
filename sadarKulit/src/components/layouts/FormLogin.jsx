import InputForm from "../../components/elements/Input";
import Button from "../elements/Button";

export default function FormLogin() {
    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Login gagal");
                return;
            }

            // Simpan token dan data user
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Arahkan ke halaman utama
            window.location.href = "/";
            
        } catch (error) {
            console.error("Login error:", error);
            alert("Terjadi kesalahan saat login");
        }
    };

    return (
       <div>
            <form onSubmit={handleLogin}>
                <InputForm name="Email" inputFor="email" type="email" placeholder="Email"/>
                <InputForm name="Password" inputFor="password" type="password" placeholder="Password"/>
                    
                <Button classname="mt-5 bg-blue-500 hover:bg-blue-700" type="submit">
                    Login
                </Button>
            </form>
       </div>
    )
}