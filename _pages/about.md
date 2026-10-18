---
layout: profile
permalink: /
title: ""
excerpt: "About Haohang Huang"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---
<section id="research" class="profile-section research-section" aria-labelledby="research-title">
  <h2 id="research-title">Research</h2>
  <p>My research focuses on <strong>information retrieval</strong>, <strong>multimodal representation learning</strong>, and <strong>agentic search</strong>, with an emphasis on building retrieval systems that are fine-grained, efficient, and reliable.</p>
  <div class="research-grid">
    {% for direction in site.data.profile.research %}
    <div class="research-direction">
      <h3>{{ direction.title }}</h3>
      {{ direction.body | markdownify }}
    </div>
    {% endfor %}
  </div>
  <div class="collaboration-note">{{ site.data.profile.collaboration | markdownify }}</div>
</section>

<section id="news" class="profile-section" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <div class="news-list">
    {% for item in site.data.profile.news %}
    <div class="news-row">
      <time datetime="{{ item.datetime }}">{{ item.date }}</time>
      <div>{{ item.text | markdownify }}</div>
    </div>
    {% endfor %}
  </div>
</section>

<section id="publications" class="profile-section" aria-labelledby="publications-title">
  <h2 id="publications-title">Publications</h2>
  <p class="publication-intro">Selected publications and manuscripts. Add paper, code, or project URLs in <code>_data/profile.yml</code> when they are ready.</p>
  <h3 class="publication-group-title">Conference Papers &amp; Preprints</h3>
  {% for paper in site.data.profile.publications %}
  <article class="publication">
    <div class="publication-venue" aria-label="{{ paper.venue }} {{ paper.meta }}"><span>{{ paper.venue }}</span><small>{{ paper.meta }}</small></div>
    <div class="publication-body">
      <h3>{{ paper.title }}</h3>
      <div class="publication-authors">{{ paper.authors | markdownify }}</div>
      {% if paper.links and paper.links.size > 0 %}
      <div class="publication-links">
        <p>{% for link in paper.links %}{% if link.url %}<a href="{{ link.url }}">{{ link.label }}</a>{% endif %}{% endfor %}</p>
      </div>
      {% endif %}
    </div>
  </article>
  {% endfor %}
</section>

<section id="experience" class="profile-section" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience &amp; Education</h2>
  <div class="profile-subsection">
    <h3 class="profile-subtitle">Experience</h3>
    <div class="profile-timeline">
      {% for item in site.data.profile.experience %}
      <article class="timeline-item">
        <div class="timeline-meta"><strong>{{ item.dates }}</strong></div>
        <div class="timeline-body"><h3>{{ item.role }}</h3><p class="timeline-organization">{{ item.organization }}</p><p>{{ item.description }}</p></div>
      </article>
      {% endfor %}
    </div>
  </div>
  <div class="profile-subsection education-subsection">
    <h3 class="profile-subtitle">Education</h3>
    <div class="profile-timeline">
      {% for item in site.data.profile.education %}
      <article class="timeline-item">
        <div class="timeline-meta"><strong>{{ item.dates }}</strong></div>
        <div class="timeline-body"><h3>{{ item.program }}</h3><p class="timeline-organization">{{ item.institution }}</p></div>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<section id="skills" class="profile-section service-section" aria-labelledby="skills-title">
  <h2 id="skills-title">Skills</h2>
  <div class="skills-grid">
    {% for skill in site.data.profile.skills %}
    <div class="skill-group"><strong>{{ skill.label }}</strong><p>{{ skill.value }}</p></div>
    {% endfor %}
  </div>
</section>
