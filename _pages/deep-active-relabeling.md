---
layout: standalone
title: "Deep Active Relabeling"
permalink: /deep-active-relabeling/
---

<div class="logo-container">
  <img src="/images/dal_images/untcse.png" alt="UNT CSE">
  <img src="/images/dal_images/BigData2025.jpg" alt="BigDT 2025">
</div>

# Deep Active Re-Labeling: Toward Noise-Resilient Annotation Efficiency

<div class="authors">
<a href="/images/dal_images/CertificateofAttendance.pdf" target="_blank">Md Abdullah Al Forhad</a>, Weishi Shi
</div>

## Abstract

<div class="abstract">
While Deep Active Learning (DAL) effectively reduces human annotation costs, its efficacy is constrained by human annotation errors. This is because the data sampled for active learning is assumed to be highly informative for training. When human annotators introduce errors into this informative data at a certain rate, the active learning performance drops significantly and, in some cases, even exhibits worse outcomes than passive learning. In this paper, we first analyze the impact of human annotation errors in the DAL setting. Then we propose a framework to address the human annotation noise problem for DAL. Informed by human learning patterns, the core idea of our proposed solution involves allocating a portion of the human annotation budget to re-annotate data that has already been labeled. Previous theoretical work suggests that when the model possesses a certain level of ability to identify potentially noisy data, even re-labeling a small fraction of the data can effectively remove noise from the active training set. To achieve this, we implement two active noise sampling strategies to detect noise under different circumstances and allocate a part of the annotation budget to re-annotate these instances. Our approach imbues active learning with a revisiting and introspective behavior. Our experiments demonstrate that, under the same annotation budget, our method is more data-efficient and yields a relatively noise-free annotation dataset in the end.
</div>

<div class="button-container">
  <a href="#" class="btn btn-paper">Read Full Paper</a>
</div>

If you find this work useful, please cite:

<div class="citation-container">
  <button class="copy-btn" onclick="copyCitation()" id="copyBtn">
    <span id="copyText">Copy Citation</span>
    <span id="copiedText" style="display: none;">✓ Copied!</span>
  </button>
  <pre id="citationCode"><code>@inproceedings{forhad2025DAL,
  title={Deep Active Re-Labeling: Toward Noise-Resilient Annotation Efficiency},
  author={Al Forhad, Md Abdullah and Shi, Weishi},
  booktitle={2025 IEEE International Conference on Big Data (Big Data)},
  pages={886--895},
  year={2025},
  organization={IEEE}
}</code></pre>
</div>

<div class="conference-info">
The IEEE International Conference on Big Data (Big Data) is a top-tier conference ranked by both CORE and CCF, with this year's acceptance rate: 18.7% (140/746)
</div>