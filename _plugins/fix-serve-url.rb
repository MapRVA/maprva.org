# Jekyll serve with --host=0.0.0.0 (needed for Docker) overrides site.url
# to http://0.0.0.0:<port>, which browsers block. This plugin resets it to
# localhost so absolute_url and other URL helpers produce working URLs.

Jekyll::Hooks.register :site, :after_init do |site|
  if site.config['url'] && site.config['url'].include?('0.0.0.0')
    site.config['url'] = site.config['url'].sub('0.0.0.0', 'localhost')
  end
end
