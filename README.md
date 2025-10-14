This project is a solution for the **Product Manager test**

## Features

- **Add sections from the library**: Users can select sections (Hero, Header, Footer, Card) to add to the page.  
- **Inline content editing**: Texts and images are editable directly on the canvas.  
- **Drag & drop sections**: Sections can be rearranged dynamically using drag & drop.  
- **Export and Import JSON**: Save or load page designs as JSON files.  
- **Responsive design**: Works well on all screen sizes.

## Design and Structure

- Used the **default design** and added a **global.css** file for customizing colors, borders, and buttons.  
- Project structure organized in folders:  
  - **components**: reusable components like SectionRenderer, SectionLibrary, CanvasPreview  
  - **lib**: Zustand store and utility functions for Export/Import  
  - **styles**: CSS files including global.css  
- Used libraries like **Zustand** for state management and **Dnd-kit** for drag & drop.

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Tech Tools

- **Next.js 13** (App Router)  
- **React**  
- **TailwindCSS**  
- **Zustand** for state management  
- **Dnd-kit** for drag & drop

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



