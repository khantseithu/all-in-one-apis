# All in One APIs

## Problem

We are trying to build a single source API hub that can be used to learn api handling in any programming language. Users can build their front end portfolio in web and mobile apps using this api hub.

The project focuses on delivering a wide range of APIs that cater to various domains and functionalities, enabling developers to seamlessly integrate these APIs into their applications.

# How to contribute - Guidelines

## Contribute in core AllInOneAPIs codebase:

We welcome your interest in contributing to our open source project!

To contribute to AllInOneAPIs, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feat/your-feature-name` or `git checkout -b fix/your-bug-fix-name`.
3. Make your changes and commit them using conventional commit messages: `git commit -am "feat: Add new feature"`.
4. Push your changes to your forked repository: `git push origin feat/your-feature-name`.
5. Submit a pull request to the main repository, explaining the changes you've made and providing any necessary details.

We appreciate your enthusiasm and look forward to your valuable contributions.

Together, we can foster a collaborative environment and make a significant impact in the API integration landscape.

# 🏁 Installation

### 📦 Using Docker (recommended)

To run the AllInOneAPIs project, follow these steps:

1. Install [Docker](https://www.docker.com/) on your machine.
2. Clone the project repository.
3. Navigate to the project directory.
4. Create `.env` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.
5. Run the Docker Compose command:

```bash
docker-compose up --build --attach backend

# --build: Rebuild the image and run the containers
# --attach: only show logs of Node app container and not mongodb
```

6. Access the project APIs at the specified endpoints.

### 💻 Running locally

To run the AllInOneAPIs project locally, follow these steps:

1. Install [Yarn](https://yarnpkg.com/), [NodeJs](https://www.nodejs.org/), [MongoDB](https://www.mongodb.com) and [MongoDB Compass (optional)](https://www.mongodb.com/products/compass) on your machine.
2. Clone the project repository.
3. Navigate to the project directory.
4. Create `.env` file in the root folder and copy paste the content of `.env.sample`, and add necessary credentials.
5. Install the packages:

```bash
yarn install
```

6. Run the project:

```bash
yarn start
```

7. Access the project APIs at the specified endpoints.
