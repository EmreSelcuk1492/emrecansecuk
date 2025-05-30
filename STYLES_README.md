# CSS Architecture Documentation

## Overview

The styles have been refactored from a single 2,695-line file into a modular, maintainable architecture following SOLID principles.

## File Structure

```
src/
├── styles.css                 # Main styles with imports + unique styles
└── styles/
    ├── index.css              # Clean import index
    ├── variables.css          # CSS custom properties & themes
    ├── base.css               # Reset, typography, fundamentals
    ├── layout.css             # Navigation, sections, page structure
    ├── components.css         # Reusable UI components
    ├── projects.css           # Project-specific styles
    ├── experience.css         # Experience section styles
    └── responsive.css         # Media queries & responsive design
```

## Design System

### CSS Custom Properties (variables.css)
- **Colors**: Theme-aware color system with dark/light modes
- **Spacing**: Consistent spacing scale (`--spacing-xs` to `--spacing-xl`)
- **Typography**: Font size scale (`--font-size-xs` to `--font-size-6xl`)
- **Border Radius**: Consistent radius values (`--radius-sm` to `--radius-xl`)
- **Transitions**: Standardized timing (`--transition-fast/base/slow`)
- **Shadows**: Consistent shadow system (`--shadow-sm` to `--shadow-xl`)

### Component System
- **Buttons**: `.btn`, `.btn-modern` with consistent hover states
- **Cards**: `.card` with header/body/footer sections
- **Forms**: `.form-input`, `.form-textarea` with icons and focus states
- **Badges**: `.badge` for tech stack and tags
- **Theme Toggle**: Animated theme switcher

### Benefits

1. **Maintainability**: Each file has a single responsibility
2. **Scalability**: Easy to add new components without affecting others
3. **Consistency**: Shared design tokens ensure visual harmony
4. **Performance**: Better CSS organization and caching
5. **Developer Experience**: Easier to find and modify specific styles

### Usage

Import the complete system:
```css
@import url('./styles/index.css');
```

Or import individual modules as needed:
```css
@import url('./styles/variables.css');
@import url('./styles/components.css');
```

### Theme System

The design system supports automatic dark/light theme switching:
- Dark theme (default): High contrast with neon purple accents
- Light theme: Clean, minimal with subtle purple accents
- Smooth transitions between themes
- CSS custom properties automatically update based on `[data-theme]` attribute

### Responsive Design

Mobile-first approach with breakpoints:
- **Mobile**: `max-width: 768px`
- **Small Mobile**: `max-width: 480px` 
- **Tablet**: `max-width: 1024px`
- **Large Screens**: `min-width: 1400px`

All responsive adjustments are centralized in `responsive.css` for easy maintenance. 