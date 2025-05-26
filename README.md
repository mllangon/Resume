# Text Animation Demo

This project demonstrates a text animation effect where text appears to scroll upward as the user scrolls down the page. The effect creates the illusion that text is rotating upward into view and becoming part of the page layout with a smooth, seamless animation.

## Features

- Text elements animate as they enter the viewport
- 3D rotation effect for a more immersive experience
- Smooth transitions with blur effects
- Responsive design that works on all screen sizes
- Customizable text styles, colors, and animation timing

## How It Works

The animation is achieved using a combination of:

1. **Intersection Observer API** - Detects when elements enter the viewport
2. **Framer Motion** - Provides smooth animations and transitions
3. **CSS Transforms** - Creates 3D effects with perspective and rotation
4. **Scroll-based Animation** - Animates elements based on scroll position

## Components

### ScrollText

The main component that handles the text animation. It accepts the following props:

- `text`: The text content to display
- `delay`: Animation delay in seconds (default: 0)
- `fontSize`: Text size (default: "xl")
- `fontWeight`: Text weight (default: "medium")
- `color`: Text color (default: "gray.700")

### AnimatedTextSection

A container component that displays multiple ScrollText elements with different styles and animations.

## Usage

```jsx
import AnimatedTextSection from './AnimatedTextSection';

function App() {
  return (
    <div>
      <AnimatedTextSection />
      {/* Other content */}
    </div>
  );
}
```

## Customization

You can customize the animation by modifying the `useScrollAnimation` hook parameters:

```jsx
const { ref, isVisible, animationValues } = useScrollAnimation({
  offset: ["start", "center"], // Change when animation starts
  threshold: 0.2 // Change when element is considered visible
});
```

## Technologies Used

- React
- TypeScript
- Framer Motion
- Chakra UI
- CSS Animations

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## License

MIT
