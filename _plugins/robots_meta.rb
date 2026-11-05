# Emits page-level crawler instructions for pages that explicitly request them.
# The theme's metadata partial does not currently render a `robots` front-matter key.
Jekyll::Hooks.register :pages, :post_render do |page|
  next unless page.data["robots"] == "noindex"

  page.output = page.output.sub(
    /<head>/i,
    "<head>\n<meta name=\"robots\" content=\"noindex\">"
  )
end
