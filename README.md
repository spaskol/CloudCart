# CloudCart

Project Overview

    Frontend: React-based application for UI.
    Backend: Express.js server exposing REST APIs.
    Database: PostgreSQL running as a service in Kubernetes.
    Cloud: Google Cloud Platform (GCP) with GKE.
    CI/CD: GitHub Actions for building and deploying.

Directory Structure

CloudCart/
├── .github/
│   └── workflows/
│       ├── build.yml
│       ├── deploy.yml
├── charts/
│   └── cloudcart/
│       ├── Chart.yaml
│       ├── values.yaml
│       └── templates/
│           ├── deployment.yaml
│           ├── service.yaml
│           ├── ingress.yaml
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   │   └── ProductController.js
│   │   └── routes/
│   │       └── index.js
│   └── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── index.js
│   │   └── components/
│   │       └── ProductList.js
│   └── Dockerfile
│   └── package.json
└── README.md
