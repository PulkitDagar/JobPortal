import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTimes, FaEye, FaTrash, FaCheck, FaBan, FaBriefcase, FaFileDownload, FaFilePdf, FaFileWord } from 'react-icons/fa';
import toast from 'react-hot-toast';

function RecruiterHome() {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showApplications, setShowApplications] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
    requirements: '',
    experience: '',
    type: 'Full-time'
  });

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(savedJobs);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      id: Date.now(),
      ...formData,
      status: 'open',
      applications: [],
      postedBy: 'recruiter@example.com',
      postedDate: new Date().toISOString(),
    };

    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    setShowModal(false);
    setFormData({
      title: '',
      company: '',
      location: '',
      salary: '',
      description: '',
      requirements: '',
      experience: '',
      type: 'Full-time'
    });
    toast.success('Job posted successfully!');
  };

  const toggleJobStatus = (jobId) => {
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        return {
          ...job,
          status: job.status === 'open' ? 'closed' : 'open'
        };
      }
      return job;
    });
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
    toast.success('Job status updated successfully!');
  };

  const deleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      const updatedJobs = jobs.filter(job => job.id !== jobId);
      setJobs(updatedJobs);
      localStorage.setItem('jobs', JSON.stringify(updatedJobs));
      toast.success('Job deleted successfully!');
    }
  };

  const viewApplications = (job) => {
    setSelectedJob(job);
    setShowApplications(true);
  };

  const handleApplicationStatus = (jobId, applicationEmail, status) => {
    const updatedJobs = jobs.map(job => {
      if (job.id === jobId) {
        return {
          ...job,
          applications: job.applications.map(app => {
            if (app.email === applicationEmail) {
              return {
                ...app,
                status,
                statusDate: new Date().toISOString()
              };
            }
            return app;
          })
        };
      }
      return job;
    });

    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));

    const action = status === 'accepted' ? 'accepted' : 'rejected';
    toast.success(`Application ${action} successfully!`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'accepted':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <FaCheck className="mr-1" /> Accepted
        </span>;
      case 'rejected':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <FaBan className="mr-1" /> Rejected
        </span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Pending
        </span>;
    }
  };

  const downloadResume = (application) => {
    if (!application.resume) {
      toast.error('No resume available');
      return;
    }

    // we created  a link element
    const link = document.createElement('a');
    link.href = application.resume.data;
    link.download = application.resume.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getResumeIcon = (fileType) => {
    if (fileType.includes('pdf')) {
      return <FaFilePdf className="w-4 h-4 text-red-500" />;
    }
    return <FaFileWord className="w-4 h-4 text-blue-500" />;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Recruiter Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your job postings and applications</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <FaPlus />
          <span>Post New Job</span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <span className="text-sm text-gray-500">{job.type}</span>
              </div>
              <span
                className={`px-2 py-1 rounded text-sm ${job.status === 'open'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                  }`}
              >
                {job.status}
              </span>
            </div>
            <div className="space-y-2 mb-4">
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-600">{job.location}</p>
              <p className="text-gray-600">₹{job.salary}</p>
              <p className="text-gray-600">Experience: {job.experience}</p>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    onClick={() => viewApplications(job)}
                    className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
                  >
                    <FaEye />
                    <span>Applications ({job.applications.length})</span>
                  </button>
                  <button
                    onClick={() => deleteJob(job.id)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                    <span>Delete</span>
                  </button>
                </div>
                <button
                  onClick={() => toggleJobStatus(job.id)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded ${job.status === 'open'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                    }`}
                >
                  {job.status === 'open' ? (
                    <>
                      <FaTimes />
                      <span>Close</span>
                    </>
                  ) : (
                    <>
                      <FaEdit />
                      <span>Reopen</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post Job Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Post New Job</h2>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Salary</label>
                  <input
                    type="text"
                    required
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Experience Required</label>
                  <input
                    type="text"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="e.g. 2-3 years"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Requirements</label>
                <textarea
                  required
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Applications Modal */}
      {showApplications && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Applications for {selectedJob.title}</h2>
                <p className="text-gray-600 mt-1">
                  {selectedJob.applications.length} application{selectedJob.applications.length !== 1 ? 's' : ''} received
                </p>
              </div>
              <button
                onClick={() => setShowApplications(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {selectedJob.applications.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FaBriefcase className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Applications Yet</h3>
                <p className="text-gray-500">When candidates apply, their applications will appear here.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {selectedJob.applications.map((application, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{application.name}</h3>
                          <p className="text-gray-600">{application.email}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(application.status)}
                          <span className="text-sm text-gray-500">
                            Applied {new Date(application.appliedDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Experience</h4>
                        <p className="text-gray-600">{application.experience}</p>
                      </div>

                      {application.resume && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Resume</h4>
                          <button
                            onClick={() => downloadResume(application)}
                            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            {getResumeIcon(application.resume.type)}
                            <span className="ml-2">{application.resume.name}</span>
                            <FaFileDownload className="ml-2 text-gray-500" />
                          </button>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Cover Letter</h4>
                        <p className="text-gray-600 whitespace-pre-line">{application.coverLetter}</p>
                      </div>

                      {!application.status && (
                        <div className="flex justify-end space-x-3">
                          <button
                            onClick={() => handleApplicationStatus(selectedJob.id, application.email, 'rejected')}
                            className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            <FaBan className="mr-2" />
                            Reject
                          </button>
                          <button
                            onClick={() => handleApplicationStatus(selectedJob.id, application.email, 'accepted')}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          >
                            <FaCheck className="mr-2" />
                            Accept
                          </button>
                        </div>
                      )}

                      {application.status && application.statusDate && (
                        <div className="mt-4 text-sm text-gray-500">
                          {application.status === 'accepted' ? 'Accepted' : 'Rejected'} on {new Date(application.statusDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default RecruiterHome;
