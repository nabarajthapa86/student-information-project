# Student Information — Aadikavi Bhanubhakta Campus

A Next.js (App Router) + TypeScript + Tailwind CSS website for Aadikavi
Bhanubhakta Campus, built with pnpm.

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Scripts

- `pnpm dev` – start the local development server
- `pnpm build` – create an optimized production build
- `pnpm start` – run the production build (run `pnpm build` first)
- `pnpm lint` – check the code with ESLint
- `pnpm exec tsc --noEmit` – type-check the whole project without building

## Project structure

```
src/
  app/
    layout.tsx        Root layout (fonts, <html>/<body>, metadata)
    page.tsx           Home page - assembles all the sections
    globals.css        Tailwind import + global styles
    students/
      page.tsx          "/students" route - the Student List page
  components/
    Navbar.tsx         Sticky header, scroll links, Student List button
    Hero.tsx           Big banner section (id="home")
    AboutUs.tsx        About Us section (id="about")
    Programs.tsx       Programs & Faculties grid (id="faculty")
    CallToAction.tsx   Blue "Start Your Journey Today" band
    Footer.tsx         Footer + contact info (id="contact")
    StudentTable.tsx   Searchable/filterable, paginated table used on /students
public/
  images/               Logo and campus photos used across the site
```

## How the navigation works

- "Home", "About Us", "Faculty", and "Contact Us" in the navbar are anchor
  links (`/#home`, `/#about`, `/#faculty`, `/#contact`) that smooth-scroll to
  the matching `id` on the home page.
- "Student List" is a real Next.js route (`/students`) rendered by
  `src/app/students/page.tsx`.

## TypeScript notes

- `Student` (in `StudentTable.tsx`) and `Program` (in `Programs.tsx`) are the
  two custom types you'll touch most - they describe the shape of each row
  in the mock data arrays.
- `tsconfig.json` is managed mostly by Next.js itself; it auto-updates a few
  fields (like `jsx`) on each build, which is expected behavior.

## Notes

- Replace the mock data in `src/components/StudentTable.jsx` with data from
  your own database or API once you have one.
- Swap the images in `public/images` for your own campus photography at any
  time - the file names are the same, so no code changes are required.
