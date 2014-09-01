structural-site
===============

## Workflow
First, run `npm install` and `bower install` to install build and library dependencies, respectively. Then, run
`gem install bundler` if you want to use jekyll to build and host the site.

Run `gulp` to do the primary build. Then, run `bundler exec jekyll serve` to run jekyll and
serve the site at `http://localhost:4000/`.
