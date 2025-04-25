
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/68b8fe9f-0ca1-497b-8d79-27b3ae9af2e9

## Docker Setup

This project can be run as a Docker container. Follow these steps to build and run the container:

```sh
# Build and start the container
docker-compose up -d

# Stop the container
docker-compose down
```

Key files can be placed in the `keys` directory which is mounted as a volume in the container.

**Note**: You may want to manually add `keys/*` to your `.gitignore` file to avoid committing key files to your repository.

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/68b8fe9f-0ca1-497b-8d79-27b3ae9af2e9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Docker for containerization

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/68b8fe9f-0ca1-497b-8d79-27b3ae9af2e9) and click on Share -> Publish.

Alternatively, you can use the Docker setup described above to deploy the application on any system that supports Docker.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
