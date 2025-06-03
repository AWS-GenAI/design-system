# Enterprise Design System

This repository contains the enterprise design system that provides a unified set of UI components, patterns, and guidelines for all digital products.

## Project Overview

This design system implements the guidelines described in the [Design System Guidelines](../confluence_samples/10_design_system_guidelines.html) document.

## Related Jira Stories
- [DES-150](../jira_stories/DES-150.json): Implement responsive component library

## Features

- Comprehensive component library
- Design tokens for colors, typography, spacing, etc.
- Responsive design patterns
- Accessibility compliance (WCAG 2.1 AA)
- Interactive documentation and examples
- Integration with popular frameworks (React, Angular, Vue)
- Design assets for Figma and Sketch
- Theming support for white-labeling
- Versioning and release management

## Architecture

The design system follows a multi-layered architecture:

1. **Design Tokens**
   - Foundational variables for colors, typography, spacing, etc.
   - Platform-agnostic format (JSON)
   - Transformed for different platforms (CSS variables, SCSS, iOS, Android)

2. **Core Styles**
   - Global styles and utilities
   - Typography system
   - Grid and layout system
   - Animation and motion

3. **Components**
   - Atomic UI components
   - Composite patterns
   - Form elements
   - Navigation components
   - Feedback components

4. **Documentation**
   - Usage guidelines
   - Code examples
   - Accessibility guidelines
   - Interactive playground

## Technology Stack

- **Core Library**: TypeScript
- **CSS Framework**: CSS Modules with PostCSS
- **Component Framework**: React
- **Documentation**: Storybook
- **Testing**: Jest, React Testing Library, Axe for accessibility
- **Build Tools**: Vite, Rollup
- **Package Management**: npm, Lerna for monorepo
- **CI/CD**: GitHub Actions

## Repository Structure

```
design-system/
├── packages/
│   ├── tokens/             # Design tokens
│   ├── core/               # Core styles and utilities
│   ├── components/         # React components
│   ├── icons/              # Icon library
│   ├── hooks/              # React hooks
│   ├── utils/              # Utility functions
│   └── themes/             # Theme definitions
├── tools/                  # Build and development tools
├── docs/                   # Documentation
├── examples/               # Example applications
│   ├── react/              # React example
│   ├── angular/            # Angular example
│   └── vue/                # Vue example
├── design-assets/          # Figma and Sketch files
└── storybook/              # Storybook configuration
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm 8+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/example/design-system.git

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

### Using the Design System

```bash
# Install the design system in your project
npm install @example/design-system

# Import components
import { Button, Card, TextField } from '@example/design-system';
```

## Component Development

### Creating a New Component

```bash
# Generate a new component
npm run generate component MyComponent

# Run tests
npm test

# Build the component
npm run build
```

### Component Guidelines

- All components must be fully accessible (WCAG 2.1 AA)
- Components must be responsive and work on all supported devices
- Include comprehensive documentation and examples
- Write unit tests for all functionality
- Follow the established naming conventions and code style

## Accessibility

The design system is built with accessibility as a core principle:

- All components meet WCAG 2.1 AA standards
- Regular automated accessibility testing with Axe
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management utilities

## Versioning and Releases

We follow Semantic Versioning (SemVer):

- **Major version**: Breaking changes
- **Minor version**: New features, no breaking changes
- **Patch version**: Bug fixes, no breaking changes

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to the design system.

## Related Documentation

- [Design System Guidelines](../confluence_samples/10_design_system_guidelines.html)
