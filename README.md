### README.md

````markdown
# Next.js Portfolio Project with Docker

This project is a portfolio built with Next.js, TypeScript, and Tailwind CSS, fully containerized using Docker for easy development and deployment.

## Features

- **Next.js**: React-based framework for production-ready web applications.
- **TypeScript**: Static typing for better code quality.
- **Tailwind CSS**: Utility-first CSS framework.
- **Docker**: Containerized development and production environments.
- **MongoDB**: Integrated database with Dockerized setup.

---

## Prerequisites

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop).
2. Install [Node.js (v18)](https://nodejs.org/) for local debugging.
3. Clone this repository:
   ```bash
   git clone <repository_url>
   cd next-portfolio
   ```
````

---

## Setup Instructions

### 1. Environment Variables

This project uses two environment files:

- `.env` (default shared variables):
  ```env
  MONGODB_URI=mongodb://mongo:27017/mydatabase
  NODE_ENV=development
  ```
- `.env.local` (local development overrides, ignored in production):
  ```env
  MONGODB_URI=mongodb://root:example@mongo:27017/mydatabase
  ```

### 2. Development

Run the following to start the project in development mode:

```bash
docker-compose up --build
```

This will:

- Start the Next.js development server at `http://localhost:3000`.
- Start MongoDB on `mongodb://localhost:27017`.

To stop the containers:

```bash
docker-compose down
```

### 3. Production

To build and serve the app in production:

1. Build the app:
   ```bash
   docker-compose build
   ```
2. Run the production container:
   ```bash
   docker-compose -f docker-compose.yml up
   ```

---

## Docker Commands Cheatsheet

### General Commands

| Command                                 | Description                                      |
| --------------------------------------- | ------------------------------------------------ |
| `docker-compose up --build`             | Build and start the containers.                  |
| `docker-compose up`                     | Start containers without rebuilding.             |
| `docker-compose down`                   | Stop and remove containers.                      |
| `docker ps`                             | List running containers.                         |
| `docker exec -it <container_name> bash` | Access a container's shell.                      |
| `docker logs <container_name>`          | View logs for a container.                       |
| `docker system prune -f`                | Clean up unused containers, images, and volumes. |

### Debugging

| Command                  | Description                          |
| ------------------------ | ------------------------------------ |
| `docker-compose logs -f` | View real-time logs of all services. |
| `docker-compose restart` | Restart the containers.              |

---

## Adding Dependencies

1. Install dependencies locally:
   ```bash
   npm install <package_name>
   ```
2. Rebuild the Docker container:
   ```bash
   docker-compose up --build
   ```

---

## CI/CD

To set up a CI/CD pipeline, this project can be integrated with:

- **GitHub Actions** for automated builds.
- **AWS (EC2)** or **Vercel** for hosting.

Let me know if you'd like step-by-step guidance on CI/CD setup! 🚀

```

---

### **Next Steps**
1. Add this `README.md` to your project root.
2. Review the Docker Cheatsheet to get comfortable with the workflow.
3. Let me know if you need help with the CI/CD pipeline setup.
```
