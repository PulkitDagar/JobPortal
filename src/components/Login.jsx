import SharedForm from "./SharedForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const accountType = formData.get("accountType"); // Get the selected account type

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            if (user.accountType === accountType) {
                alert("Login successful! Redirecting to dashboard");

                // Store the logged-in user
                localStorage.setItem("loggedInUser", JSON.stringify(user));

                // Redirect based on account type
                if (accountType === "Job Seeker") {
                    navigate("/jobseekerdashboard");
                } else if (accountType === "Recruiter") {
                    navigate("/recruiterdashboard")
                }
            } else {
                alert(
                    `Invalid account type. You are registered as a ${user.accountType}. Please select the correct account type.`
                );
            }
        } else {
            alert("Invalid email or password. Please try again or sign up.");
        }
    };

    const loginFields = [
        { label: "Email Address", type: "email", name: "email", placeholder: "Enter email address" },
        { label: "Password", type: "password", name: "password", placeholder: "Enter password" },
        {
            label: "Account Type",
            type: "select",
            name: "accountType",
            options: ["Job Seeker", "Recruiter"],
            placeholder: "Select account type"
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <SharedForm fields={loginFields} buttonLabel="Sign In" onSubmit={handleLogin} />
        </div>
    );
};

export default Login;



