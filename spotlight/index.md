---
title: Spotlight on Assael
layout: "default"
class: "spotlight"
permalink: "/spotlight/"
_hide_content: true
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

      {% if post.summary_markdown %}
        <p>{{ post.summary_markdown|markdownify }}</p>
      {% endif %}
    </div>
  </section>
{% endfor %}
