# Codex Build Prompt

Read `RESEARCH.md` first, then build a polished working prototype called **OC Rec Finder** in this repository.

OC Rec Finder helps Orange County parents and caregivers discover and compare public recreation classes, camps, and activities offered by different cities.

Implement the product now. Do not stop after producing a plan, specification, mockup, or research summary. Make reasonable product, design, and technical decisions autonomously unless a genuine blocker makes implementation impossible.

## Required experience

Create a responsive web application where users can:

- Search programs by keyword
- Filter by city, category, age, schedule/date, and price
- Browse readable program cards
- See active filters and clear them easily
- Open a program detail view
- Follow an official provider link to verify details or register

Create approximately 25 realistic sample listings across Irvine, Santa Ana, Costa Mesa, Newport Beach, and Huntington Beach. Keep the dataset in a separate, well-structured local file. Every listing must follow the fields and guardrails in `RESEARCH.md`.

## Product and design requirements

- Make the interface friendly, trustworthy, locally relevant, and visually polished.
- Make the primary search-and-filter journey excellent on both mobile and desktop.
- Include useful empty-results and error states.
- Follow basic accessibility practices: semantic HTML, keyboard usability, visible focus states, form labels, and adequate contrast.
- Prominently disclose that the application is a prototype using sample data and that users must verify information with the official provider.
- Do not imply that availability, schedules, or prices are live.

## Technical boundaries

- Inspect and preserve any useful existing repository setup.
- If the repository is effectively empty, use React, TypeScript, and Vite with a maintainable component structure.
- No backend, database, authentication, payments, scraping, live APIs, analytics, or admin interface.
- Do not add features outside the core discovery flow until the required experience works correctly.
- Keep dependencies modest and avoid unnecessary infrastructure.

## Verification and completion

Test the important search and filtering behavior. Run the relevant linting, type checking, tests, and production build, and fix failures before finishing.

The task is complete when:

1. The app runs successfully from documented commands.
2. Search and every required filter work with the sample dataset.
3. Program details and official external links work.
4. The prototype/sample-data disclosure is obvious.
5. The core journey is usable on mobile and desktop.
6. Relevant automated checks and the production build pass.

At the end, provide a concise summary of what you built, how to run it, what you verified, and any important limitations.
