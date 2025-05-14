// A helper from React that checks your code and warns you if you do something bad. It’s like a teacher watching and helping.
import { StrictMode } from 'react'
// This tells React where to put your app on the screen.
import { createRoot } from 'react-dom/client'
// This loads your style file (colors, fonts, sizes). It makes your app look nice.
import './index.css'
// You made a big LEGO block called App in another file. This brings it in to use here.
import App from './App.jsx'

// Show your App on the screen
// document.getElementById('root'): Find the empty spot on the web page.
// createRoot(...).render(...): Build a stage and show your App on it.
// <StrictMode>: Wraps around App to make sure your code is safe and clean.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* 
More details 
React looks for this in your index.html:
<div id="root"></div>
Then it puts your whole app inside it.
*/