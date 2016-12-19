---
title: Test
collection: julie-parker
layout: test-layout
permalink: "/test/"
---
<h1>This is a test</h1>
{% assign items = site.[page.collection] | sort:"order" %}


{% for x in items %}
<p>{{ x.order }}</p>
{% endfor %}