# Knowledge Portfolio Documentation

## Overview

The Knowledge Portfolio feature tracks important learning and career milestones, inspired by "Your Knowledge Portfolio" from *The Pragmatic Programmer*. It displays a chronological timeline of projects shipped, courses completed, jobs, and major learning events.

## Data Location

All milestone data is stored in a single TypeScript file:

**File:** `src/milestonesData.ts`

This file contains:
- TypeScript type definitions (`Milestone`, `MilestoneType`)
- The milestones array with all milestone entries
- Helper functions for filtering and grouping milestones

## How to Add/Edit Milestones

### Adding a New Milestone

1. Open `src/milestonesData.ts`
2. Add a new object to the `milestones` array:

```typescript
{
  id: 'unique-id',                    // Required: unique identifier
  date: '2024-12-15',                 // Required: ISO date (YYYY-MM-DD)
  title: 'Milestone Title',            // Required: display title
  type: 'project',                     // Required: 'project' | 'course' | 'job' | 'learning'
  description: 'Optional description',  // Optional: detailed description
  technologies: ['Tech1', 'Tech2'],    // Optional: array of technologies
  link: 'https://example.com'          // Optional: URL to project/certificate/resource
}
```

### Milestone Types

- **`project`**: Projects you've shipped or completed
- **`course`**: Courses, certifications, or training completed
- **`job`**: Career milestones, job changes, or role transitions
- **`learning`**: Major learning events, deep dives, or skill acquisitions

### Example Milestone Entry

```typescript
{
  id: 'react-mastery',
  date: '2024-11-20',
  title: 'Mastered React Advanced Patterns',
  type: 'learning',
  description: 'Deep dive into React hooks, context API, and performance optimization techniques.',
  technologies: ['React', 'TypeScript', 'Hooks', 'Context API'],
  link: 'https://react.dev/learn'
}
```

### Editing Existing Milestones

Simply modify the object in the `milestones` array in `src/milestonesData.ts`. The changes will automatically appear on the `/knowledge` page.

### Sorting

Milestones are automatically sorted by date (newest first) and grouped by year. No manual sorting is required.

## UI Components

### KnowledgeTimeline Component

**Location:** `src/components/KnowledgeTimeline.tsx`

A reusable component that displays milestones in a timeline format with:
- Year-based grouping
- Type filtering (All, Projects, Courses, Jobs, Learning)
- Responsive design
- Accessibility features (semantic HTML, ARIA labels, keyboard navigation)

**Props:**
- `showFilters?: boolean` - Show/hide filter controls (default: `true`)

### Knowledge Page

**Location:** `src/app/knowledge/page.tsx`

The main page that displays the Knowledge Portfolio. Accessible at `/knowledge`.

## Navigation

The Knowledge Portfolio is accessible via:
- Navigation menu: "Knowledge" link
- Direct URL: `/knowledge`

The navigation link is defined in `src/portfolioMockData.ts` in the `navigationLinks` array.

## Styling

The Knowledge Portfolio uses the same theme system as the rest of the portfolio:
- CSS custom properties for colors (`--color-accent`, `--color-background`, etc.)
- Consistent typography (`heading-section`, `heading-card`, `text-body`)
- Responsive design with Tailwind CSS
- Dark mode support via theme context

## Connection to "Your Knowledge Portfolio"

This feature embodies the principles from *The Pragmatic Programmer*:

1. **Invest Regularly**: The timeline encourages regular updates as you learn and grow
2. **Diversify**: Track different types of milestones (projects, courses, jobs, learning)
3. **Manage Risk**: Document your learning journey to demonstrate continuous growth
4. **Review and Rebalance**: The chronological view helps you see your learning trajectory

## Best Practices

1. **Keep it Updated**: Add milestones regularly to maintain an accurate knowledge portfolio
2. **Be Specific**: Include technologies and links when relevant
3. **Chronological Accuracy**: Use accurate dates for better timeline visualization
4. **Descriptive Titles**: Use clear, descriptive titles that communicate the milestone's significance
5. **Link Everything**: Include links to projects, certificates, or learning resources when available

## Technical Details

### Data Structure

```typescript
export interface Milestone {
  id: string;              // Unique identifier
  date: string;            // ISO date string (YYYY-MM-DD)
  title: string;           // Display title
  type: MilestoneType;     // 'project' | 'course' | 'job' | 'learning'
  description?: string;    // Optional description
  technologies?: string[]; // Optional array of technologies
  link?: string;           // Optional URL
}
```

### Helper Functions

- `groupMilestonesByYear()`: Groups milestones by year
- `filterMilestonesByType()`: Filters milestones by type
- `getMilestoneTypes()`: Returns all available milestone types

## Future Enhancements

Potential future improvements:
- Search functionality
- Export to PDF/JSON
- Integration with GitHub/GitLab for automatic project detection
- Tags/categories beyond the four main types
- Visual charts/graphs of learning progress

