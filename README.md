# REM Waste Project by Farid

A modern React application, featuring an elegant, responsive carousel for skip selection.

---

##  Features

- **Skip Selection Carousel:**  
  Instead of a static card grid, users scroll horizontally through available skips in a visually engaging carousel. This approach:
  - Focuses user attention on one skip at a time.
  - Works beautifully on both desktop and mobile.
  - Provides smooth navigation with scroll buttons and indicators.
  - Improves usability and aesthetics compared to traditional card layouts.

- **Step-by-Step Booking:**  
  A progress bar guides users through each booking step, ensuring clarity and a streamlined experience.

- **Responsive Design:**  
  Fully responsive for all devices, with adaptive layouts for carousel, progress bar, and footer.

---

##  Technologies & Libraries

- **React 19**  
  Modern, component-based UI development.

- **Vite**  
  Lightning-fast development server and build tool.

- **React Router v7**  
  Declarative routing for multi-step navigation.

- **React Icons**  
  Beautiful, scalable icons for steps and actions.

- **CSS Custom Properties (Variables)**  
  For theme consistency and easy customization.

- **Custom Context (React Context API)**  
  Centralized state management for booking flow and skip selection.

---

##  Project Structure

```
src/
  assets/           # Static assets (images, etc.)
  components/       # Reusable UI components (carousel, footer, progress bar)
  contexts/         # React context for booking state
  data/             # Skip data (JSON)
  layouts/          # Layout components
  pages/            # Page components (Start, Select Skip, End)
  styles/           # CSS modules for each feature
  App.jsx           # Main app component
  main.jsx          # Entry point
```

---

## Carousel Approach

- **Why Carousel?**  
  The carousel provides a focused, interactive way for users to browse skips, especially on mobile. It avoids overwhelming users with too many choices at once and allows for smooth, touch-friendly navigation.

- **How It Works:**  
  - Skips are displayed as horizontally scrollable cards.
  - Navigation arrows and a progress indicator enhance usability.
  - Each card shows skip size, price, hire period, and key features (on-road, heavy waste).
  - Selection is accessible via click or keyboard.

---

## How to Run

1. **Install dependencies:**  
   `npm install`

2. **Start the development server:**  
   `npm run dev`

3. **Build for production:**  
   `npm run build`

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

MIT

---

