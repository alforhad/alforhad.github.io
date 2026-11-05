---
layout: about
title: about
permalink: /
nav: false
subtitle: ""

profile:
  align: right
  image: forhad-profile.png
  image_circular: true
  more_info: ""

selected_papers: false
social: true

announcements:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 6 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<p style="margin-top: -0.9rem;">
  <strong>Ph.D. Candidate</strong>
  <img src="/assets/img/unt-cse.png" alt="University of North Texas College of Engineering, Department of Computer Science and Engineering" width="175" style="vertical-align: middle; margin-left: 0.55rem;">
</p>

I am a Ph.D. candidate in Computer Science and Engineering at the University of North Texas. I conduct research in the <span style="color: var(--global-theme-color, #9c3c92);">Active Machine Learning (AML) Lab</span> and the [Learning, Language, Vision (LLaVi) Lab](https://llavi-lab.github.io/) under the supervision of Dr. Weishi Shi. I completed my Master's degree in Computer Science from the Department of Computer Science and Engineering at the University of North Texas with a 4.00 GPA.

My research focuses on **deep active learning**, **continual lifelong learning**, and **multimodal learning**, with the goal of making AI systems more adaptive, robust, and useful in real-world settings.

<style>
  .opportunities-callout {
    margin: 1.25rem 32% 1.25rem 0;
    padding: 0.9rem 1.1rem;
    border-left: 4px solid var(--global-theme-color);
    background: rgba(156, 60, 146, 0.08);
  }

  @media (max-width: 575px) {
    .opportunities-callout {
      margin-right: 0;
    }
  }
</style>

<div class="opportunities-callout">
  <strong>Actively seeking opportunities</strong><br>
  I am actively looking for Applied Scientist, Research Scientist, Postdoctoral, and Assistant Professor positions.
</div>

[LinkedIn](https://www.linkedin.com/in/alforhad) · [GitHub](https://github.com/alforhad) · [Google Scholar](https://scholar.google.com/citations?user=AljTQdQAAAAJ&hl=en)

<h2><a href="/news/" style="color: inherit;">news</a></h2>

{% include news.liquid limit=true %}

[See all news →](/news/)

<h2><a href="/publications/" style="color: inherit;">selected publications</a></h2>

{% include selected_papers.liquid %}

[See all publications →](/publications/)
