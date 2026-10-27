# FRAME/30 — Photo Gallery

A responsive photo gallery built with React, Vite, and Tailwind CSS as part of the Celebrare Frontend Intern assignment.

**Submitted by:** AbuHamza

## Overview

FRAME/30 is a minimal, responsive photo gallery that displays 30 photographs fetched from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30). Users can search photos by author, mark photos as favourites, and retain their favourite selections even after refreshing the page.

The interface features a warm ivory background, bold typography, cobalt-blue accents, and a clean, grid-based layout.

## Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum Photos API.
- **Responsive Layout:** Displays one column on mobile, two on tablet, and four on desktop.
- **Author Search:** Filters photos by author name in real time without additional API requests.
- **Favourites:** Add or remove photos from favourites using interactive heart buttons.
- **Persistent Favourites:** Saves favourites in `localStorage` and restores them after a page refresh.
- **Loading State:** Displays a loading spinner while photos are being fetched.
- **Error Handling:** Displays an error message if the API request fails.
- **Custom React Hook:** Encapsulates API fetching and loading/error state management in `useFetchPhotos`.
- **Optimised State Logic:** Uses `useReducer` for favourites, `useCallback` for the search handler, and `useMemo` for filtering photos.

## Tech Stack

- **React** — UI components and state management
- **Vite** — Development server and build tooling
- **Tailwind CSS** — Responsive styling
- **JavaScript (ES6+)** — Application logic
- **Picsum Photos API** — Photo data
- **Browser localStorage** — Persistent favourites
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aiibooouuu/celebrare
   ```

2. Navigate to the project directory:

   ```bash
   cd celebrare
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually `http://localhost:5173`.

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx
│   ├── PhotoCard.jsx
│   ├── PhotoGrid.jsx
│   ├── SearchBar.jsx
│   ├── LoadingSpinner.jsx
│   └── ErrorMessage.jsx
├── hooks/
│   └── useFetchPhotos.js
├── reducers/
│   └── favouritesReducer.js
├── App.jsx
├── index.css
└── main.jsx
```

## Implementation Highlights

### Custom Data-Fetching Hook

`useFetchPhotos` fetches photo data from the Picsum Photos API and exposes three values:

- `photos` — the fetched photo list
- `loading` — whether the request is in progress
- `error` — an error message if the request fails

### Favourites with `useReducer`

The favourites reducer handles the `TOGGLE_FAVOURITE` action. It adds a photo ID if the photo is not a favourite, or removes it if it is already saved.

The application reads and writes favourites through `localStorage`, allowing selections to persist across page refreshes.

### Search with `useMemo` and `useCallback`

`useMemo` caches the filtered photo list until the photo data or search query changes. `useCallback` memoizes the search handler function reference.

Search runs against the photos already fetched by the application, so typing in the search field does not trigger another API request.

## API Reference

**Picsum Photos API**

```text
https://picsum.photos/v2/list?limit=30
```

The API returns a list of photo objects, including photo IDs, author names, dimensions, and image URLs.

## Author & Submission

**Submitted by:** AbuHamza

**Assignment:** Celebrare — Frontend Intern

**Project:** FRAME/30 — Responsive Photo Gallery

---

Built with React and Tailwind CSS.
