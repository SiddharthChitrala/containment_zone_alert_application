# Containment Zone Tracker

Containment Zone Tracker is a web application that allows users and admins to search for locations in containment zones and update their status. Users can check the containment zone status of different locations, while admins have the ability to manage and update this information. Additionally, both users and admins can visualize containment zones on a map.

## Features

### User Features:

- **User Login:** Users can create an account or log in to their existing account.
- **Search Locations:** Users can search for the containment zone status of locations, which are displayed as cards.
- **Add Location Details:** Users can add information about the containment zone status of a location.
- **View Containment Zone Map:** Users can view a map that displays containment zones with multiple locations.

### Admin Features:

- **Admin Login:** Admins can log in to their administrative accounts.
- **Search Locations:** Admins can search for locations and see their containment zone status, as well as update or delete this information.
- **Add Location Details:** Admins can add or update containment zone status and the number of cases for a location.
- **View Containment Zone Map:** Admins can see a map that displays containment zones and the locations within them.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Maps Integration:** OpenCage Geosearch Leaflet Api
- **Version Control:** Git

## Installation

To set up the Containment Zone Tracker in your local environment, follow these steps:

1. Clone the repository from GitHub:

git clone https://github.com/SiddharthChitrala/containment_zone_alert_application.git

2. Navigate to the project directory:

   cd containment_zone_alert_application

3. Install dependencies for the frontend and backend:
   
   ```
   cd container-zone-alert-frontend
   npm install
   ```
   ```
   cd ../container-zone-alert-backend
   npm install
   ```
   
4. Configure the environment variables. You must set up the necessary environment variables for the database connection, OpenCage Geosearch Leaflet Api, and secret key.
   
   https://opencagedata.com/tutorials/leaflet-location-search

5. Start the development servers:

- Start the frontend:

  ```
  cd container-zone-alert-frontend
  npm install
  npm start
  ```

- Start the backend:

  ```
  cd container-zone-alert-backend
  node index.js
  ```

6. Access the application in your web browser by visiting `http://localhost:4200`.

## Contributing

If you'd like to contribute to this project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Providing free mapping services by OpenCage Geosearch Leaflet.

## Contact

If you have any questions or need assistance, please get in touch with us at siddharthchitrala4@gmail.com.
