# Exercise Tracker

A single-page web app that turns a weekly exercise routine into levels. You log each day's exercise, see your week on a chart, and unlock the next level once you hit the weekly target.

Built with HTML, CSS and JavaScript as a diploma project at Republic Polytechnic.

## What it does

- **Three levels, each with a weekly goal:** Level 1 is 5 hours of yoga, Level 2 is 8 km of running and Level 3 is 15 laps of swimming. Each level stays locked until you pass the one before it.
- **Weekly logging:** enter what you did on each of the 7 days. The app adds up your total and tells you whether you passed, with options to retry the week or go on to the next level.
- **Progress chart:** your week is drawn as a chart (Chart.js) as soon as you submit.
- **Personal welcome:** you enter your name on the first screen, and it greets you throughout. Hover over the greeting to change your name.
- **Animated full-screen sections:** each section scrolls into view with its own animation (fullPage.js and anime.js).

## Built with

| Area | Tools |
|---|---|
| Structure and styling | HTML, CSS, Bootstrap 3 |
| Logic | JavaScript, jQuery |
| Charts | Chart.js |
| Layout and motion | fullPage.js, anime.js, Tippy.js tooltips |
| Icons and fonts | Font Awesome, Google Fonts (Arvo, Hind) |

## Run it

No build step is needed. Clone the repo and open `index.html` in a browser:

```
git clone https://github.com/hui0w0/ExerciseTracker.git
```

## Project structure

```
index.html   page layout and all sections
style.css    styling
script.js    animations, level logic and charts
Images/      illustrations and backgrounds
```

## Author

Chan Rou Hui · [LinkedIn](https://www.linkedin.com/in/chan-rou-hui/) · [Portfolio](https://hui0w0.github.io/PD/)
