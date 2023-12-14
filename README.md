# MentorHub

This repository contains the source code for [MentorHub](mentorhub.amrthabit.com), a web app for mentors and mentees to connect and learn from each other.
It contains a simple React application utilizing SCSS for styling. The app is integrated with AWS Code Build for continuous integration and continuous deployment (CI/CD), automatically building and deploying the app to an AWS S3 bucket, with AWS CloudFront as the CDN.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and yarn
- Git

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/amrthabit/mentorhub.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mentorhub
   ```
3. Install dependencies with Yarn:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

The CI/CD pipeline is set up with AWS Cloud Build. On every push to the main branch, Cloud Build automatically builds the React app and deploys it to an Amazon S3 bucket.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [SCSS](https://sass-lang.com/) - Used for styling
- [AWS CodeBuild](https://aws.amazon.com/codebuild/) - Used for CI/CD
- [AWS S3](https://aws.amazon.com/s3/) - Used for hosting
- [AWS CloudFront](https://aws.amazon.com/cloudfront/) - CDN service
