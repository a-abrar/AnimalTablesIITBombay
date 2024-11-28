# Design Approach and Code Choices

## Overview

The **Animal Tables Challenge** is a dynamic web application developed for managing and displaying categorized animal data. This project demonstrates core JavaScript concepts, particularly Object-Oriented Programming (OOP) principles, ensuring a modular, maintainable, and scalable solution. The application features CRUD (Create, Read, Update, Delete) operations on animal data, sorting, filtering, and offline capabilities.

This document outlines the design approach, architecture, and technology choices made throughout the development of the project.

## Design Principles

The following principles guided the design of this project:

- **Modularity**: The application is divided into smaller, reusable components. Each component handles specific functionality (e.g., table rendering, animal data management).
- **Maintainability**: Clear, well-structured, and documented code ensures that the project can be maintained and extended easily.
- **User Experience**: The design prioritizes ease of use, providing a straightforward and responsive UI to manage and display animal data.
- **Performance**: Techniques like caching and offline functionality were implemented to enhance performance, especially for users on slower networks.

## Project Architecture

### 1. **Modular Structure**

The application follows a modular design to ensure scalability and maintainability. Key components are separated into their respective JavaScript, HTML, and CSS files.

#### Folder Structure:
/assets # Static assets like images and icons /css # Stylesheets (responsive design and minimal styling) style.css # General styles for the app /js # JavaScript logic /components # Modular components for handling animal data animal.js # Animal class (encapsulation of animal data) table.js # Table class (handles table rendering and operations) service-worker.js # Service worker file for offline functionality index.html # Main HTML file containing the structure of the application README.md # Project description and setup instructions DESIGN.md # Design document (this file)


### 2. **Core Functionalities**

The application features core functionalities that ensure the user can interact with the animal data seamlessly. These are the main features:

- **Add Animal**: Users can add animals to the table with specific attributes (name, size, location).
- **Edit Animal**: Existing animal data can be edited.
- **Delete Animal**: Users can remove an animal from the table.
- **Sort Animals**: The table can be sorted by different attributes (name, size, or location).
- **Real-Time Updates**: Any action on the animal data (add, edit, delete) updates the table dynamically without requiring a page reload.
- **Input Validation**: Ensures that only valid animal data is entered.

### 3. **Technology Stack**

- **HTML5**: Provides the structure of the web page, ensuring proper semantics.
- **CSS3**: Used to style the web page with a focus on responsive design.
- **JavaScript (ES6)**: Implements the application logic and user interactions, utilizing DOM manipulation to dynamically render the table and manage animal data.
- **Service Worker**: Ensures offline functionality by caching necessary assets and enabling the app to work without a network connection.

### 4. **Code Design Decisions**

#### **Object-Oriented Programming (OOP)**

OOP principles are used to encapsulate the core logic for managing animal data:

- **Animal Class**:
  - Encapsulates data such as animal name, size, and location.
  - Provides methods for editing and updating animal attributes.
  - Makes it easy to create new animal objects and manage their data consistently.

### 5. **Conclusion**
The Animal Tables Challenge demonstrates modern web development practices, focusing on JavaScript concepts like OOP, DOM manipulation, and service worker integration for offline capabilities. The project emphasizes a clean, modular structure to ensure maintainability, while also prioritizing performance and usability.