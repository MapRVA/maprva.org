FROM docker.io/ruby:3.3.4-bookworm

WORKDIR /mnt

COPY Gemfile /mnt/Gemfile
COPY dogwood /mnt/dogwood
RUN bundle install

COPY . /mnt

CMD jekyll serve --livereload --host=0.0.0.0 --port=4000
