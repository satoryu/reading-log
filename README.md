# 📚 Reading Log

Reading Log is a small React + TypeScript application for experimenting with book-tracking features.
The current focus is building the domain layer (repository + storage) that lets you register books, list them by freshness, and remove entries. The UI is still the default Vite starter, so most behaviors are covered through unit tests.

## Features

- Create `Book` entities with UUIDv7 identifiers, ISO timestamp metadata, and default `planned` status.
- In-memory storage abstraction (`src/storage.ts`) that mimics the browser storage API, making the domain logic framework-agnostic and test-friendly.
- Sorted retrieval (`listBooks`) that always returns the newest updates first, ensuring deterministic UI ordering.
- Deletion helper (`removeBook`) for pruning a specific book without mutating callers.
- Vitest coverage for repository behaviors, including timestamp validation helpers in `src/test/utils.ts`.

## Tech Stack

- React 19 + Vite 5 for the web client bootstrap.
- TypeScript strict mode for type-safe domain models (`src/types.ts`).
- Vitest + Testing Library for fast unit tests.
- ESLint, Prettier, and TypeScript ESLint for linting / formatting.

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start Vite dev server (http://localhost:5173 by default)
npm run build      # type-check + production build
npm run preview    # preview the production bundle
```

### Quality Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm run test`     | Execute the Vitest suite once.               |
| `npm run test:watch` | Re-run tests on file changes.             |
| `npm run coverage` | Collect V8 coverage while running tests.     |
| `npm run lint`     | Run ESLint across the repo.                  |
| `npm run lint:fix` | Auto-fix lint issues where possible.         |
| `npm run format`   | Format the project with Prettier.            |

## Project Layout

```
src/
├─ App.tsx            # Vite starter component (UI work TBD)
├─ repository/
│  └─ bookRepository.ts   # Domain logic for Book CRUD
├─ storage.ts         # Simple in-memory storage shim
├─ types.ts           # Shared domain types and helpers
└─ test/              # Vitest utilities (ISO checks, etc.)
```

## Roadmap Ideas

- Replace the placeholder UI in `App.tsx` with components that surface the repository features.
- Persist data to `localStorage` (or a backend) instead of the current in-memory store.
- Extend the domain with reading sessions, notes, and richer status transitions.
- Add integration tests that cover the UI once it is implemented.

## License

This project is private and currently has no explicit license. Please ask the repository owner before sharing or reusing the code.
