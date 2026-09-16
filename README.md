# Aoi Murakami — Academic Pages website

Live site: <https://aogorou.github.io/>

日本語: <https://aogorou.github.io/ja/>

This personal academic website uses [Academic Pages](https://academicpages.github.io/), derived from Michael Rose's Minimal Mistakes theme. The original MIT license is retained in `LICENSE`. Additional dependency notices are in `THIRD_PARTY_NOTICES.md` and `licenses/`.

## Editing content

- `_config.yml`: site URL, name, sidebar and profile links.
- `_data/navigation.yml`: English and Japanese navigation.
- `_pages/about.md` and `_pages/about-ja.md`: homepages.
- `_pages/research*.md`: research descriptions.
- `_publications/`: one Markdown record per publication or thesis.
- `_pages/cv*.md`: CV pages.

Each English page has `lang: en`, and each Japanese page has `lang: ja`. `lang_alt` points to the corresponding translation. Language switching uses ordinary links and works without JavaScript.

For a new publication, copy one of the files in `_publications/`, update the title, authors, year, venue and `paper_link`, and use a unique permalink. Only a verified publication year is recorded; no approximate publication day is inserted.

## Publishing

GitHub Pages builds this repository with Jekyll from `main`, folder `/(root)`. Pushes to `main` trigger the existing Pages build and deployment. Do not add `.nojekyll`, which would disable Jekyll processing.

To preview locally with Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

## Licenses and attribution

Keep `LICENSE`, `licenses/`, `THIRD_PARTY_NOTICES.md`, and existing license headers when redistributing theme code or assets. The site footer retains the Jekyll, Academic Pages and Minimal Mistakes attribution and links to the detailed credits.

Template licensing does not relicense the research text, profile image or linked publications. Papers are linked by DOI or institutional record, and are not republished as local PDFs.

See `UPSTREAM.md` for the imported template revision and local changes.
