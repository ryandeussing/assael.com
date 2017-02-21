---
title: Spotlight on Assael
---
{% for post in site.posts %}
  <section class="headline">
    <div class="inner center intro">
      <p class="title">{{post.title}}</p>
      <hr>
    </div>
  </section>

  <section class="text">
    <div class="inner">
      {% if post.featured_image %}
        <img src="/assets/img/trans.gif" data-src="{{ post.featured_image }}" alt="{{ post.title }}" class="featured-image lazyload">
      {% endif %}

        <p>{{ post.content|markdownify }}</p>
    </div>
  </section>
{% endfor %}
