# Mubarak Abdulrafiu Portfolio


# Personal Portfolio

![Portfolio Screenshot](./src/assets/portfolioHome.PNG)

## Overview

Welcome to my personal portfolio website built with React, featuring animations powered by the AOS library and email functionality integrated using EmailJS. This portfolio showcases my skills, projects, and provides a way to contact me. Feel free to explore and get in touch!

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Interactive Design:** The portfolio is designed to be visually appealing and user-friendly, with smooth animations powered by the AOS library to engage visitors.

- **Project Showcase:** Display your projects, work experience, and skills to highlight your expertise and accomplishments.

- **Contact Form:** An integrated contact form powered by EmailJS allows visitors to send you messages directly from the portfolio.

- **Responsive:** The portfolio is designed to be responsive and adapt to various screen sizes and devices.

## Technologies

- **React:** The portfolio is built with React, a popular JavaScript library for building user interfaces.

- **AOS Library:** AOS is used for animating elements on scroll, adding a dynamic touch to the portfolio.

- **EmailJS:** EmailJS is used for the contact form to send emails directly from the portfolio.

## Getting Started

To get a copy of this project up and running on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/binary-tech001/MyPortfolio.git

2. Navigate to the project directory:

   ```bash
   cd your-portfolio


3. Install the project dependencies:

   ```bash
   npm install


4. Create a .env file in the root directory and configure your EmailJS API credentials as follows:

   ```makefile
      REACT_APP_EMAILJS_USERID=your-emailjs-user-id
      REACT_APP_EMAILJS_SERVICEID=your-emailjs-service-id
      REACT_APP_EMAILJS_TEMPLATEID=your-emailjs-template-id


5. Start the development server:
      ```bash
      npm start

6. Open your web browser and visit http://localhost:3000 to see the portfolio.

## Usage

Customize the portfolio to showcase your own projects, skills, and work experience. You can easily update the content by modifying the React components and data files.

### Modifying Content

1. Update the projects, skills, and work experience data in the `src/data` directory.

2. Customize the portfolio layout and appearance by editing the React components in the `src/components` directory.

3. Feel free to add more sections or features to the portfolio to suit your needs.

### Contact Form Configuration

To configure the contact form to send emails to your email address:

1. Sign up for an EmailJS account at [EmailJS](https://www.emailjs.com/).

2. Create an email template and note down the template ID.

3. Create a service and note down the service ID.

4. Update the `.env` file with your EmailJS API credentials (as mentioned in the "Getting Started" section).

## Contributing

If you'd like to contribute to this project, please follow the [Contributing Guidelines](CONTRIBUTING.md).




