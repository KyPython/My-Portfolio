# Portfolio Theme Guide

## Overview
This portfolio uses a centralized theme system with CSS variables for consistent styling across all components.

## Theme Structure

### Colors
All colors are defined as CSS variables in `src/app/globals.css`:

- **Primary**: `--color-primary` (#000000) - Main brand color
- **Secondary**: `--color-secondary` (#f5f5f5) - Secondary backgrounds
- **Accent**: `--color-accent` (#3b82f6) - Interactive elements, links, buttons
- **Background**: `--color-background` (#ffffff) - Page backgrounds
- **Foreground**: `--color-foreground` (#000000) - Text color
- **Muted**: `--color-muted` (#f9fafb) - Subtle backgrounds
- **Border**: `--color-border` (#e5e7eb) - Border colors
- **Success/Error/Warning**: Semantic colors for feedback

### Typography
Custom utility classes defined in `globals.css`:

- `heading-hero` - 56px, for main hero headings
- `heading-section` - 40px, for section headings
- `heading-subsection` - 48px, for subsection headings
- `heading-card` - 24px, for card titles
- `text-body` - 16px, for body text
- `text-body-large` - 18px, for emphasized body text
- `text-small` - 14px, for small text
- `text-tiny` - 12px, for fine print

### Fonts
- **Heading**: BioRhyme (serif)
- **Body**: IBM Plex Sans (sans-serif)
- **Mono**: Roboto (monospace)

## Usage in Components

### Using CSS Variables with Tailwind v4
```tsx
// ✅ Correct - Use parentheses for CSS variables
<div className="bg-(--color-primary) text-(--color-primary-foreground)">

// ❌ Wrong - Don't use square brackets
<div className="bg-[--color-primary]">

// ❌ Wrong - Don't use hardcoded colors
<div className="bg-blue-600 text-white">
```

### Using Typography Utilities
```tsx
// ✅ Correct
<h1 className="heading-hero text-(--color-foreground)">

// ❌ Wrong
<h1 className="text-5xl font-bold">
```

### Component Styling Best Practices

1. **Always use theme variables** - Never hardcode colors
2. **Use utility classes** - Leverage the custom typography utilities
3. **Consistent spacing** - Use the spacing scale (xs, sm, md, lg, xl, 2xl, 3xl)
4. **Proper layering** - Follow Tailwind v4 layer structure (@layer base, @layer utilities)

## Theme Configuration Files

- `src/app/globals.css` - CSS variable definitions and utilities
- `src/lib/theme.ts` - TypeScript theme constants (for programmatic access)
- `postcss.config.js` - PostCSS configuration with Tailwind v4

## Tailwind v4 Specifics

This project uses Tailwind CSS v4, which has important differences from v3:

1. **Layer Structure**: All custom CSS must be wrapped in `@layer base` or `@layer utilities`
2. **Import Syntax**: Use `@import "tailwindcss";` instead of `@tailwind` directives
3. **CSS Variables**: Use parentheses `bg-(--var)` instead of brackets `bg-[--var]`
4. **Custom Utilities**: Define with `@utility` directive inside `@layer utilities`

## Adding New Theme Values

1. Add CSS variable to `:root` in `globals.css` within `@layer base`
2. Add corresponding entry to `src/lib/theme.ts`
3. Document the new value in this guide
4. Use the new variable in components with `(--variable-name)` syntax

## Checking Theme Consistency

Before committing, verify:
- [ ] No hardcoded colors (search for `bg-blue-`, `text-gray-`, etc.)
- [ ] All text uses typography utilities
- [ ] CSS variables used with parentheses syntax
- [ ] All custom CSS is within proper layers
- [ ] Theme values are centralized in globals.css

## Common Patterns

### Buttons
```tsx
<button className="px-4 py-2 bg-(--color-accent) text-(--color-accent-foreground) rounded-md hover:opacity-90 transition-opacity">
  Click Me
</button>
```

### Cards
```tsx
<div className="bg-white border border-(--color-border) rounded-lg p-6 shadow-sm">
  <h3 className="heading-card text-(--color-foreground)">Title</h3>
  <p className="text-body text-(--color-muted-foreground)">Description</p>
</div>
```

### Links
```tsx
<a className="text-(--color-accent) hover:text-(--color-primary) transition-colors">
  Learn More
</a>
```