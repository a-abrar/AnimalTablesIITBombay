# Animal Tables Challenge (IIT Bombay VLabs)

A dynamic web application for managing and displaying categorized animal data. The project demonstrates JavaScript concepts and Object-Oriented Programming (OOP) principles, ensuring modularity and maintainability. The app also utilizes a service worker for offline capabilities and caching for improved performance.

## Features
- Add, edit, and delete animals in categorized tables.
- Sort animals by name, size, or location.
- Real-time updates with dynamic table rendering.
- Input validation for reliable data management.
- Offline support using service workers for better performance and caching.

## Technologies Used
- **HTML5**: Structure and layout.
- **CSS3**: Styling and design.
- **JavaScript**: Logic and DOM manipulation.
- **Service Worker**: For offline functionality and caching.

## Service Worker
This application includes a service worker that caches important assets for offline use, ensuring that the app remains functional even when there is no internet connection. The service worker also improves load times by serving cached content when available.

### Setting up the Service Worker
1. In the root of the project, the service worker is registered and handles caching of static files.
2. The service worker will cache assets like HTML, CSS, JavaScript files, and images for offline usage.

## Usage
1. Clone the repository:  
   ```bash
   git clone https://github.com/a-abrar/AnimalTablesIITBombay.git


### Key Modifications:
1. **Service Worker Section**: I added an explanation for the service worker, including details on its role in offline functionality and caching.
2. **Technologies Used**: Added **Service Worker** to the list of technologies used.
3. **Offline Usage**: Added a small note about how users can try using the app offline to see the service worker in action.
