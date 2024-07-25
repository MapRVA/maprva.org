Running a development server locally using podman/python:

1. make sure `_config.yml` has "http://localhost:8000" as the site URL

2. In one terminal:
   - `podman run -it -v .:/mnt:Z docker.io/ruby:3.3.4-bookworm /bin/bash`
   - `cd /mnt`
   - `bundle install`
   - `bundle exec jekyll build --watch`

   In a new terminal while that's running:
   - `cd` to `/path/to/repo/_site`
   - `python -m http.server`
