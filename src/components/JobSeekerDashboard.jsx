import JobSeekerHome from "./JobSeekerHome";
import JobSeekerNavbar from "./JobSeekerNavbar";
import { Toaster } from 'react-hot-toast';

const JobSeekersDashboard = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser || loggedInUser.accountType !== "Job Seeker") {
        return <div>You are not authorized to view this page.</div>
    }

    return (
        <>
            <JobSeekerNavbar/>
            <JobSeekerHome/>
            <Toaster position="top-right" />
        </>
    )
};

export default JobSeekersDashboard;



