# DigitalCard

DigitalCard is a polished, browser-based business card generator built for fast personal branding and clean presentation. Users can enter their details, choose from multiple premium templates, preview changes instantly, and export a finished card as PNG or PDF.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8)

## What it does

- Builds professional digital business cards in the browser
- Supports live preview with instant form updates
- Offers three distinct visual templates
- Lets users upload a profile image
- Exports cards as high-quality PNG or PDF
- Includes light/dark mode support

## Why it stands out

DigitalCard focuses on speed, clarity, and presentation. It removes the need for design tools or backend setup and gives users a simple workflow to create a shareable business card in minutes.

## Key Features

| Feature | Description |
| --- | --- |
| Live preview | See changes as you type |
| Template selection | Choose from 3 card styles |
| Form validation | Ensures clean and accurate inputs |
| Image upload | Add a profile picture instantly |
| Export options | Download PNG or PDF |
| Theme support | Switch between light and dark modes |
| Responsive UI | Works smoothly on different screen sizes |

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- React Hook Form
- Zod
- html-to-image
- jsPDF
- next-themes

## Getting Started

### Prerequisites

- Node.js 18 or later
- Bun

### Installation

```bash
git clone <repository-url>
cd business-card
bun install
```

### Run locally

```bash
bun run dev
```

Then open:

```bash
http://localhost:3000
```

### Build for production

```bash
bun run build
bun run start
```

## How to use

1. Enter your personal and professional information.
2. Add your social links and optional profile image.
3. Pick a template that matches your style.
4. Review the live preview.
5. Export the final card in PNG or PDF format.

## Project Structure

```text
src/
  app/            # App shell and route entry
  components/     # UI, layout, and business card components
  constants/      # Shared template and social configuration
  data/           # Default form values
  hooks/          # Form state and download logic
  lib/            # Validation and export helpers
  types/          # Shared TypeScript types
```

## Submission Notes

- Fully frontend-based
- No backend or database required
- Exports are generated locally in the browser
- Suitable for quick demoing during contests and hackathons



## License

This project is intended for educational and contest submission use. Add your preferred license if needed.
