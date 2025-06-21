# Sales Proposal Development Process

This project provides a simple web application for creating customized sales proposals. It is now built with [Flask](https://flask.palletsprojects.com/) and uses the Jinja2 templating engine.

## Features

- Create proposals by entering a job description, cover letter and client name.
- Server rendered views using Jinja2.
- Configurable port via the `PORT` environment variable.

## Getting Started

Follow these steps to run the application locally from a clean environment:

1. **Clone the repository**

   ```bash
   git clone https://github.com/<USER>/Sales-Proposal-Development-Process.git
   cd Sales-Proposal-Development-Process
   ```

2. **Create a virtual environment and install dependencies**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Start the server**

   ```bash
   python app.py
   ```

By default the application runs on `http://localhost:3000`. You can override the port by setting the `PORT` environment variable:

```bash
PORT=4000 python app.py
```

## \ud83d\ude80 Run in GitHub Codespaces

Click the green **[Code]** button and select **"Open with Codespaces"**. All dependencies will install automatically in the container. Once ready, start the app with:

```bash
python app.py
```

### GitHub Pages

You can enable **GitHub Pages** from the `/docs` folder to host a static landing page.
In the repository settings, choose the `main` branch and `/docs` folder as the source.



## Deployment

This application can be deployed on any platform that supports Python. Ensure that the environment installs dependencies from `requirements.txt` during build and executes `python app.py` (or your preferred WSGI server) to launch the server. The `PORT` variable should be set by the hosting provider.

## License

This project is licensed under the ISC License.
