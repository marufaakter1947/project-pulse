ProjectPulse
1. Project Overview

ProjectPulse is a comprehensive project monitoring platform for IT and software teams. It allows admins, employees, and clients to:

Track project progress

Submit and review weekly check-ins

Collect structured client feedback

Manage risks and monitor project health scores

The platform centralizes all project data for better decision-making, communication, and transparency.

2. Tech Stack Used

Frontend: Next.js, React, Tailwind CSS

Backend / API: Next.js API Routes

Database: MongoDB

Authentication: JWT (JSON Web Token)

Deployment: Vercel

3. Backend Choice

The project uses Next.js API Routes to handle backend logic. All APIs (authentication, projects, check-ins, feedback, risks, and users) are implemented inside the app/api/ folder.

Live Link:https://project-pulse-phi.vercel.app/

4. Setup Instructions
Prerequisites

Node.js 

npm

MongoDB database 

Steps

Clone the repository:

git clone https://github.com/marufaakter1947/project-pulse.git
cd project-pulse


Install dependencies:

npm install


Create a .env file in the root folder:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key


Run the development server:

npm run dev


Open http://localhost:3000
 in your browser.

To build for production:

npm run build
npm start

5. Demo Login Credentials
Role	Email	Password
Admin	admin@example.com
	password123
Employee	employee1@example.com
	password123
Employee	employee2@example.com
	password123
Client	client1@example.com
	password123
Client	client2@example.com
	password123

Use these credentials to test dashboards and functionality.

6. Explanation of Health Score Logic

ProjectPulse calculates a Health Score for each project to provide a quick overview of project status. The calculation uses:

Weekly Check-ins: Employees submit progress, blockers, and confidence levels.

Client Feedback: Satisfaction and communication ratings from clients.

Risk Assessment: Identified risks and priority levels.

Health Score formula (simplified):

Health Score = (Average Progress + Average Client Satisfaction - Risk Penalty) / 3


Average Progress: Employee updates (0–100%)

Average Client Satisfaction: Client feedback (0–100%)

Risk Penalty: Weighted score of active risks

A higher Health Score indicates a healthier project with minimal risks and good progress.