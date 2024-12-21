# MyFamilyRecipes

MyFamilyRecipes is a web application designed to bring families and close friends together through the love of cooking. Users can upload recipes, connect with their family members or close people, and share recipes within their private network.

## Features

- **Recipe Uploads**: Add recipes with detailed information, including:
  - Images
  - Tags (e.g., "vegetarian," "spicy")
  - Categories (e.g., "desserts," "main course")
  - Timers for precise cooking steps
- **Private Spaces**: Maintain a private recipe space for yourself and share it selectively with family or close friends.
- **Recipe Sharing**: Share your recipes within your trusted circle.
- **Authentication**: Secure login with Auth0.

## Tech Stack

### Front-End
- **Nuxt.js**: For building a performant and SEO-friendly front-end.

### Back-End
- **Node.js with Express.js**: To handle server-side logic and API endpoints.

### Database
- **MongoDB**: A NoSQL database to manage recipes, user data, and relationships.

### Authentication
- **Auth0**: To enable secure user authentication.

## Goals

The main goals of this project are:
- **Learning**: Enhance skills in full-stack web development with modern tools and frameworks.
- **Sharing**: Build a meaningful application that can bring people closer through shared cooking experiences.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/MyFamilyRecipes.git
   cd MyFamilyRecipes
   ```

2. **Install dependencies**:
   ```bash
   # Install front-end dependencies
   cd frontend
   npm install

   # Install back-end dependencies
   cd ../backend
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in both the `frontend` and `backend` directories.
   - Add the necessary keys (e.g., MongoDB URI, Auth0 client ID/secret).

4. **Run the development servers**:
   ```bash
   # Start the front-end
   cd frontend
   npm run dev

   # Start the back-end
   cd ../backend
   npm run dev
   ```

5. **Access the app**:
   Open your browser and navigate to `http://localhost:3000`.

## Roadmap

- [ ] Implement basic recipe uploads
- [ ] Add image upload functionality
- [ ] Introduce recipe categories and tags
- [ ] Set up user authentication with Auth0
- [ ] Create private user spaces
- [ ] Enable recipe sharing
- [ ] Optimize for mobile devices

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/my-feature`).
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the love for family and food.
- Built with passion for learning and sharing.

---
Feel free to reach out if you have any questions or suggestions!

