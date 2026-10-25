# react_play_app
Web Application to Play Around with React

The app is the Centric admin theme (themicon, 2016) on Vite, React 19, React Router and Bootstrap 5.

## Run

```bash
npm ci
npm run dev       # http://localhost:3120
npm run build     # production build in dist/
npm run preview   # serves dist/ on http://localhost:3121
```

## Keeping it current

Dependabot proposes every npm and GitHub Actions update daily, and CI merges each one once the build passes.

- The theme's demo pages drive about thirty jQuery plugins. jQuery Migrate (`app/Vendor.jsx`) restores the
  jQuery APIs that jQuery 4 removed and the older plugins still call.
- `app/components/Bootstrap/Bootstrap3Compat.scss` restores the Bootstrap 3 classes the theme's markup uses.
- `package.json` overrides bootstrap-datepicker's jQuery range (`<4`) so it shares the app's jQuery 4, which
  it runs on through jQuery Migrate. Drop the override once bootstrap-datepicker accepts jQuery 4.
- `vite.config.js` patches three old scripts (d3 v3, datamaps, loaders.css) that need sloppy-mode semantics an
  ES module bundle does not have. The build fails if a patch stops applying, so an update that changes those
  files shows up in CI.
- The Google Maps pages use the theme vendor's API key from `index.html`. Google rejects it for other sites,
  so the maps show Google's error overlay until the key is replaced with one for this app.
