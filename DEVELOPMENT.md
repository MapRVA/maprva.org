Running a development server locally using podman/python:

- make sure _config.yml has "http://localhost:8000" as the site URL

in one terminal:
- podman run -it -v .:/mnt:Z docker.io/ruby:3.3.0-bookworm /bin/bash
  - cd /mnt
  - bundle install
  - cd dogwood
  - bundle install
  - cd ..
  - bundle exec jekyll build --watch

in a new terminal while that's running
- cd to ~/Documents/maprva-site/_site
- python -m http.server
