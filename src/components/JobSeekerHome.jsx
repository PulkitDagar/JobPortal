import { useState, useEffect, useRef } from 'react';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaSearch, FaCheck, FaBan, FaFileUpload } from 'react-icons/fa';
import toast from 'react-hot-toast';

function JobSeekerHome() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    experience: '',
    coverLetter: '',
    resume: null
  });
  const [applications, setApplications] = useState([]);
  const modalRef = useRef(null);

  ///when we click outside of card 
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(savedJobs.filter(job => job.status === 'open'));

    // Get user's applications
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      const userApplications = savedJobs.flatMap(job =>
        job.applications
          .filter(app => app.email === userEmail)
          .map(app => ({
            ...app,
            jobTitle: job.title,
            company: job.company
          }))
      );
      setApplications(userApplications);
    }
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const hasApplied = (job) => {
    const email = localStorage.getItem('userEmail');
    return job.applications.some(app => app.email === email);
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast.error('Resume file size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setApplicationForm(prev => ({
          ...prev,
          resume: {
            name: file.name,
            type: file.type,
            data: event.target.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const submitApplication = (e) => {
    e.preventDefault();

    const application = {
      ...applicationForm,
      appliedDate: new Date().toISOString(),
      jobId: selectedJob.id
    };

    // Store user email for tracking applications
    localStorage.setItem('userEmail', applicationForm.email);

    const updatedJobs = jobs.map(job => {
      if (job.id === selectedJob.id) {
        return {
          ...job,
          applications: [...job.applications, application]
        };
      }
      return job;
    });

    const allJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    const updatedAllJobs = allJobs.map(job => {
      if (job.id === selectedJob.id) {
        return {
          ...job,
          applications: [...job.applications, application]
        };
      }
      return job;
    });

    localStorage.setItem('jobs', JSON.stringify(updatedAllJobs));
    setJobs(updatedJobs.filter(job => job.status === 'open'));
    setShowModal(false);
    setApplicationForm({
      name: '',
      email: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
    toast.success('Application submitted successfully!');
  };

  const renderApplicationsSection = () => {
    if (applications.length === 0) return null;

    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Applications</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {applications.map((application, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{application.jobTitle}</h3>
                  <p className="text-gray-600">{application.company}</p>
                </div>
                {application.status && (
                  <div>
                    {application.status === 'accepted' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        <FaCheck className="mr-1" /> Accepted
                      </span>
                    ) : application.status === 'rejected' ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        <FaBan className="mr-1" /> Rejected
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
                  </div>
                )}
              </div>
              <div className="text-sm text-gray-500">
                Applied on {new Date(application.appliedDate).toLocaleDateString()}
                {application.statusDate && (
                  <div className="mt-1">
                    Status updated on {new Date(application.statusDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-2xl p-8 mb-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="text-xl opacity-90 mb-6">Discover opportunities that match your skills and aspirations</p>

        {/* Search Bar */}
        <div className="relative max-w-2xl">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by job title, company, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-white"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">{jobs.length}</div>
          <div className="text-gray-600">Available Positions</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {Array.from(new Set(jobs.map(job => job.company))).length}
          </div>
          <div className="text-gray-600">Companies Hiring</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {Array.from(new Set(jobs.map(job => job.location))).length}
          </div>
          <div className="text-gray-600">Locations</div>
        </div>
      </div>

      {/* Applications Section */}
      {renderApplicationsSection()}

      {/* Jobs Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
                  <span className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800">
                    {job.type}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600">
                  <FaBuilding className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaMoneyBillWave className="w-5 h-5 mr-3 text-gray-400" />
                  <span>₹{job.salary}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaBriefcase className="w-5 h-5 mr-3 text-gray-400" />
                  <span>{job.experience}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Job Description</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <FaClock className="mr-2" />
                    <span className="text-sm">
                      Posted {new Date(job.postedDate).toLocaleDateString()}
                    </span>
                  </div>
                  {hasApplied(job) ? (
                    <button
                      disabled
                      className="flex items-center space-x-2 bg-green-500 text-white px-6 py-2 rounded-lg cursor-not-allowed opacity-90"
                    >
                      <FaCheck className="w-4 h-4" />
                      <span>Applied</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleApply(job)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Application Modal */}
      {showModal && selectedJob && (
        <div
          className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="bg-white rounded-xl max-w-2xl w-full my-8 relative"
          >
            <div className="max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Apply for {selectedJob.title}</h2>
                    <p className="text-gray-600 mt-1">{selectedJob.company}</p>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                <form onSubmit={submitApplication} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                      className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                      className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                    <input
                      type="text"
                      required
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm({ ...applicationForm, experience: e.target.value })}
                      className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g. 3 years in web development"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="space-y-1 text-center">
                        <FaFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label htmlFor="resume-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="resume-upload"
                              name="resume"
                              type="file"
                              required
                              className="sr-only"
                              accept=".pdf,.doc,.docx"
                              onChange={handleResumeChange}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PDF, DOC up to 5MB</p>
                        {applicationForm.resume && (
                          <p className="text-sm text-gray-600">
                            Selected: {applicationForm.resume.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                    <textarea
                      required
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                      rows="4"
                      className="w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Tell us why you're interested in this position..."
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-3 sticky bottom-0 bg-white py-4 border-t">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-6 py-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobSeekerHome;
