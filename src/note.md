# Stuff to create

components that i need to make for spotify clone

## core components [priority 0]

- [] `Sidebar.tsx` : The left-hand navigation panel
  - This will contain the navigation links (Home, Search, Your Library) and the user's list of playlists.
- [] `Player.tsx` :The music player bar that sits at the bottom of the screen.
  - It will manage the currently playing track's info, playback controls (play/pause, next/previous), a progress bar, and volume controls.
- [] `MainView.tsx` : The main content area that displays the different pages (Home, Search, Playlist, etc.).
  - This component will also have the top bar with back/forward navigation arrows and the user profile button.
- [] `AppLayout.tsx` : A primary layout component that assembles the Sidebar, MainView, and Player into the classic three-part Spotify grid.

## Page components [priority 1]

These are the main "views" that are rendered inside your MainView component when the user navigates through the app.

- [] `HomePage.tsx`:
  It will display various carousels like "Good Morning," "Recently Played," and "Made For You."
- [] `SearchPage.tsx` :
  Contains the search input bar and displays categorized results (Top Result, Songs, Artists, Albums).
- [] `LibraryPage.tsx`:
  Will likely have tabs or filters for "Playlists," "Artists," and "Albums."
- [] `PlaylistPage.tsx`:
  Shows the playlist header (image, name, description) and a table/list of all the tracks in it.
- [] `AlbumPage.tsx` : Very similar to the PlaylistPage, but for a single album.
- [] `ArtistPage.tsx` :
  Displays the artist's banner, their most popular songs, and a list of their albums/singles.

## reusable components [priority 2]

These are the smaller, reusable building blocks that you will use across all your pages and layouts. Building these first will make assembling the pages much faster.

- [] `Icon.tsx` : A component to easily render various SVG icons (Home, Search, Play, Heart, Shuffle, etc.).
- [] `Button.tsx` : A reusable button component. You'll need variants for primary actions (like the green "Play" button), secondary actions, and icon-only buttons.
- [] `Card.tsx` : A universal card component used to display playlists, albums, and artists in grids or carousels. It will take props like `imageUrl`, `title`, and `subtitle`.
- [] `Carousel.tsx` : A container for a row of Card components with a title (e.g., "Your Top Mixes"). It will handle the horizontal scrolling behavior.
- [] `TrackList.tsx` : The table or list used in PlaylistPage and AlbumPage to display songs. It should have columns for index (#), title, album, and duration.
- [] `TrackListItem.tsx` :
- [] `ProgressBar.tsx` :The interactive seek/progress bar used in the `Player`.
- [] `VolumeControl.tsx` : The volume slider component, also used in the `Player`.
