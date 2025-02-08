import RecruiterHome from "./RecruiterHome";
import RecruiterNavbar from "./RecruiterNavbar";
import { Toaster } from 'react-hot-toast';

const RecruitersDashboard = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || loggedInUser.accountType !== "Recruiter") {
        return <div>You are not authorized to view this page.</div>;
    }

    return (
        <>
            <RecruiterNavbar/>
            <RecruiterHome/>
            <Toaster position="top-right" />
        </>
    )
};

export default RecruitersDashboard;
