import InputForm from "../../components/elements/Input";
import Button from "../elements/Button";

export default function FormLogin() {
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("Email input:", email);
        console.log("Password input:", password);

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        console.log("Saved email from localStorage:", localStorage.getItem("email"));
        console.log("Saved password from localStorage:", localStorage.getItem("password"));

        window.location.href = "/product";
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