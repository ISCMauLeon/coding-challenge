# Facealbum app - Coding Challenge from Mauricio Leon Murillo
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

In Facealbum, you can load 10 random posts from different different people! (right now Facealbum has only 6 total users, you and your 5 friends). Be sure to enter their profiles and like (or unlike) their posts. You can view your own profile too!

To view different posts, try reloading the page.

## Getting Started

- Open a terminal and navigate to the root of this project

- Make sure you have Node 24 installed on your machine
  - Run: `nvm use` to ensure you are on version 24

- Run: `npm i`

- Run: `npm run dev`

- Open a browser and navigate to [http://localhost:3000](http://localhost:3000) to see the result (if you already have that port occupied by another process, follow the prompt instructions).

## Notes
- I added and used two Google fonts. Alan Sans and SUSE Mono.
- Used [Mockaroo](https://www.mockaroo.com/) to create custom mock data.
- Mockaroo uses the [Dummyimage](https://dummyimage.com) website to generate the images.
- I'm using better-sqllite3 package to use SQL to store the mocked data into a database that I can consult using a built API.
  - I already ran a node script (the `initdb.js` file on the root of this project) to init the SQL database, creating the `facealbum.db` file.
  - The used mock data is inside the `dbInit` path.
- Posts are fetched randomly by id, 10 at a time (The idea was to load more with a lazy loading technique, but could not reach it due to time constraints).
- Posts can be liked! they like can also be revoked :(
  - Posts liked status is saved in the browsers localStorage.

## Known issues
- Since posts come out random, the same post could potentially appear twice in the same page load.
- You can't open a view for a specific post.
- Posts are rarelly seen again on the list view since there is a 1000 mocked posts.
- To see different posts, you need to either reload the page or navigate back to the homepage.

## Thought enhancements
- Page route to see individual posts. Possibly `/post/[postId]`
- A button to share and copy posts urls
- A load more button for the homepage to load more posts, or any other lazy loading technique, like scroll handling or pagination.
- An API to fetch from Client Components
- Loading screens to visually indicate that requests are being made

## Difficulties encountered
- When creating the `Button` component, the name was already reserved for more components, so I changed the name to `StyledButton` instead.
- When creating the API and a quick storage for the info, I didn't had time to create a full API, so instead I created functions that accessed a mock SQL database through the sqlite driver.