# Sales Proposal Development Process

This project provides a simple web application for creating customized sales proposals. It is built with [Express](https://expressjs.com/) and uses [EJS](https://ejs.co/) for templating.

## Features

- Create proposals by entering a job description, cover letter and client name.
- Server rendered views using EJS.
- Configurable port via the `PORT` environment variable.

## Getting Started

Follow these steps to run the application locally from a clean environment:

1. **Clone the repository**

   ```bash
   git clone https://github.com/<USER>/Sales-Proposal-Development-Process.git
   cd Sales-Proposal-Development-Process
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the server**

   ```bash
   npm start
   ```

By default the application runs on `http://localhost:3000`. You can override the port by setting the `PORT` environment variable:

```bash
PORT=4000 npm start
```

## \ud83d\ude80 Run in GitHub Codespaces

Click the green **[Code]** button and select **"Open with Codespaces"**. All dependencies will install automatically in the container. Once ready, start the app with:

```bash
npm start
```

### GitHub Pages

You can enable **GitHub Pages** from the `/docs` folder to host a static landing page.
In the repository settings, choose the `main` branch and `/docs` folder as the source.



## Deployment

This application can be deployed on any platform that supports Node.js. Ensure that the environment runs `npm install` during build and executes `npm start` to launch the server. The `PORT` variable should be set by the hosting provider.

## License

This project is licensed under the ISC License.
