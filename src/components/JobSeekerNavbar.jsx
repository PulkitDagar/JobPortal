import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function JobSeekerNavbar() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); 
    navigate("/"); 
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-indigo-600">JobFinder</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="h-6 w-6 text-gray-600" />
              <span className="text-gray-700"></span>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default JobSeekerNavbar;