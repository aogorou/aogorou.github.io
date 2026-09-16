# Aoi Murakami — academic website

A dependency-free personal academic website designed for GitHub Pages.

## Publish on GitHub Pages

1. Create a public repository named `aogorou.github.io`.
2. Add the files in this folder to the repository's `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/(root)`.
4. The site will be available at <https://aogorou.github.io/>.

## Files

- `index.html` — all page content and metadata
- `styles.css` — responsive layout and visual design
- `script.js` — language toggle and reveal effects
- `.nojekyll` — serves the static files without Jekyll processing

## Updating the site

Edit publication entries in the `#publications` section of `index.html`. All Japanese/English text pairs use `data-en` and `data-ja` attributes.
