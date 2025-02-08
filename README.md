# Job Portal Project

This is a job portal web application built with React, featuring separate dashboards for Job Seekers and Recruiters. The application uses **local storage** for role-based access and includes a variety of job posting and application features. The frontend is styled using **Shadcn components** and **Tailwind CSS**.

## Live Demo

You can try the live version of the application here:  
[Live Demo](https://job-portal-omega-mauve.vercel.app/)

## Features

### Job Seeker Dashboard:
- View available job openings.
- Apply for jobs and wait for confirmation from recruiters.
- Validation ensures Job Seekers cannot access the Recruiter dashboard.

### Recruiter Dashboard:
- Post new job openings.
- Open and close job openings.
- View applications from job seekers.
- Accept or reject job seeker applications.
- Schedule virtual interviews (to be implemented) via video call or Google Meet.

### Additional Features:
- Role-based access ensures Job Seekers cannot access Recruiter features and vice versa.
- Ongoing feature development for virtual interview scheduling upon acceptance of applications.

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS, Shadcn Components
- **State Management:** Local Storage for role-based access
- **Validation:** Role-based restrictions and form validation

## Installation

1. Clone the repository.
    ```bash
    git clone https://github.com/PulkitDagar/JobPortal.git
    ```
2. Navigate to the project directory.
    ```bash
    cd job-portal
    ```
3. Install dependencies.
    ```bash
    npm install
    ```
4. Run the development server.
    ```bash
    npm run dev
    ```
5. Open the app in your browser at `http://localhost:5173`.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features!




