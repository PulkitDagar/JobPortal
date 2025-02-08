import { useNavigate } from "react-router-dom";
import SharedForm from "./SharedForm";

const Signup = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSignup = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newUser = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      accountType: formData.get("accountType"),
      confirmPassword: formData.get("confirmPassword"), // Get the confirm password value
    };

    // Check if password and confirm password match
    if (newUser.password !== newUser.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return; // Stop further execution if passwords don't match
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const isUserExists = users.some((user) => user.email === newUser.email);

    if (isUserExists) {
      alert("User already registered. Please login.");
    } else {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    }
  };


  const signupFields = [
    { label: "First Name", type: "text", name: "firstName", placeholder: "Enter first name" },
    { label: "Last Name", type: "text", name: "lastName", placeholder: "Enter last name" },
    { label: "Email Address", type: "email", name: "email", placeholder: "Enter email address" },
    { label: "Password", type: "password", name: "password", placeholder: "Enter password" },
    { label: "Confirm Password", type: "password", name: "confirmPassword", placeholder: "Confirm password" },
    {
      label: "Account Type",
      type: "select",
      name: "accountType",
      options: ["Job Seeker", "Recruiter"], // Account type options
      placeholder: "Select account type"
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <SharedForm fields={signupFields} buttonLabel="Create Account" onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;


