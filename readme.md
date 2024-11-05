
# IIT BHU CyberSec Club Website

Welcome to the IIT BHU CyberSec Club website repository! This project is built using **Hugo**, a fast and modern static site generator, along with **Tailwind CSS** for styling.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)

## Features

- **Responsive Design:** Built with Tailwind CSS for a fluid and adaptable layout.
- **Fast Performance:** Utilizes Hugo's static site generation for quick load times.
- **Customizable:** Easy to extend and modify to fit your needs.

## Getting Started

To get started with this project, you will need to have [Node.js](https://nodejs.org/) and Hugo installed on your machine. Follow these steps to set up the project:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/iitbhu-cybersec.git
   cd iitbhu-cybersec
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   To start the development server and build the CSS using Tailwind, run:
   ```bash
   npm run dev
   ```
   This command runs the `build:css` script to generate the CSS files and then starts the Hugo server.

4. **Open Your Browser:**
   Visit [http://localhost:1313](http://localhost:1313) to view the website in your browser.

## Scripts

The following scripts are available in this project:

- **`build:css`:** Generates the minified CSS from the Tailwind CSS input file.
- **`hugo`:** Starts the Hugo development server with specific options.
- **`dev`:** Combines the `build:css` and `hugo` commands to prepare and run the server.
