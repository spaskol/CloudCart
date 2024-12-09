# CloudCart

Project Overview

Frontend: React-based application for UI.
Backend: Express.js server exposing REST APIs.
Database: PostgreSQL running as a service in Kubernetes.
Cloud: Google Cloud Platform (GCP) with GKE.
CI/CD: GitHub Actions for building and deploying.

Testing and Deployment

    Clone Repository:

git clone <repository-url>
cd CloudCart

Run Locally:

    Backend: cd backend && npm install && npm start.
    Frontend: cd frontend && npm install && npm start.

Deploy to GKE:

    Build Docker Images.
    Push Images to Google Container Registry.
    Deploy with helm install cloudcart ./charts/cloudcart.
