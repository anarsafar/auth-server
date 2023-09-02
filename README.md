# Auth API

Auth Server API is a versatile RESTful API designed to streamline user management, authentication, and more for web and mobile applications. Built on Node.js, Express, and MongoDB, this API offers robust features to ensure a secure and scalable user experience.

## Features

- **User Authentication**: Secure user authentication and authorization with access and refresh tokens.
- **Social Logins**: Effortlessly integrate with Google, Facebook, and GitHub for user sign-ups and logins.
- **Password Management**: Enable password reset and password change functionality for users.
- **User Profiles**: Easily manage user profiles with customizable information.
- **Token-Based Authentication**: Utilize JSON Web Tokens (JWT) for user authentication.
- **API Documentation**: Comprehensive Swagger documentation for seamless testing and integration.

## Getting Started

To kickstart your journey with My Awesome API, follow these steps:

1. **Clone the Repository**: `git clone git@github.com:anarsafar/auth-server.git`

2. **Install Dependencies**: `npm i`

3. **Configure Environment Variables**: Set up environment variables and API configurations.

4. **Start the Server**: `npm start`

## API Endpoints

- **/signup**: Create new user accounts.
- **/login**: Authenticate and log in users.
- **/logout**: Log out users and invalidate tokens.
- **/google**, **/facebook**, **/github**: Implement social login and sign-up.
- **/profile**: Manage user profiles.
- **/change-password**: Allow users to update their passwords.
- **/reset-password**: Request password resets.
- **/confirm-user**: Confirm user registrations.
- **/refresh-token**: Generate new access token when expires.

## Documentation

For comprehensive API documentation and reference, please visit our [Swagger Documentation](https://auth-server-iv8b.onrender.com/api-docs/).