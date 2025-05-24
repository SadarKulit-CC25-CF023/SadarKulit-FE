import InputForm from "../../components/elements/Input";
import Button from "../elements/Button";

export default function FormRegister() {
    return (
        <div>
            <InputForm name="Full Name" inputFor="full name" type="text" placeholder="Enter Your Name"/>
            <InputForm name="Email" inputFor="email" type="email" placeholder="Email"/>
            <InputForm name="Password" inputFor="password" type="password" placeholder="Password"/>
            <InputForm name="Confirm Password" inputFor="confirm-password" type="password" placeholder="Confirm Password"/>

            <Button classname="mt-3 bg-blue-500 hover:bg-blue-700">
                Login
            </Button>
        </div>
    )
}