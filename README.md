# NavPlay

This is a simple test app to experiment with Typescript, NextJS, Layouts and API requests

## Getting Started

Make sure you have pnpm instead of npm installed. (On Mac I like to grab it from brew but you can also just curl it down).

Run the dev server for NextJS
pnpm dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Key learning points

_app.tsx contains the entry point to the app. Everything in it is applied to all pages that are loaded.  If you wanted to have layout that affected your whole app you would do it here.
NavLayout.tsx is a component that defines a navigation layout and exports a function called  navLayout. If you import navLayout and use it as you getLayout() function it will wrap your pages in the NavLayout component.

main.tsx and profile.tsx import the navLayout and use it to make sure that the nav bar and copyright are displayed on both pages.

about.tsx does not import nor use the navLayout so it does not contain the nav bar and copyright.

index.tsc is the root page (/). It also does not use the navLayout import.
