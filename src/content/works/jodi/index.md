---
work: true
slug: "Jodi"
section: "publication"
order: 30
title_html: "Jodi: Unification of Visual Generation and Understanding via Joint Modeling"
authors_html: "Yifeng Xu, <strong>Zhenliang He</strong><sup>✉</sup>, Meina Kan, Shiguang Shan, Xilin Chen"
image: "./jodi.jpg"
image_link: "https://vipl-genun.github.io/Project-Jodi"
badges:
  - url: "https://arxiv.org/pdf/2505.19084"
    image: "https://img.shields.io/badge/arXiv%202025-3A98B9"
  - url: "https://github.com/VIPL-GENUN/Jodi"
    image: "https://img.shields.io/github/stars/VIPL-GENUN/Jodi.svg?style=social"
links:
  - label: "Paper"
    url: "https://arxiv.org/pdf/2505.19084"
  - label: "Project"
    url: "https://vipl-genun.github.io/Project-Jodi"
  - label: "Joint-1.6M Dataset"
    url: "https://huggingface.co/datasets/VIPL-GENUN/Joint-1.6M-1024px"
bib: |
  @article{xu2025jodi,
    title={Jodi: Unification of Visual Generation and Understanding via Joint Modeling},
    author={Xu, Yifeng and He, Zhenliang and Kan, Meina and Shan, Shiguang and Chen, Xilin},
    journal={arXiv:2505.19084},
    year={2025},
  }
---

Visual generation and understanding are two deeply interconnected aspects of human intelligence, yet they have been traditionally treated as separate tasks in machine learning. In this paper, we propose Jodi, a diffusion framework that unifies visual generation and understanding by jointly modeling the image domain and multiple label domains. Specifically, Jodi is built upon a linear diffusion transformer along with a role switch mechanism, which enables it to perform three particular types of tasks: (1) <strong>joint generation</strong>, where the model simultaneously generates images and multiple labels; (2) <strong>controllable generation</strong>, where images are generated conditioned on any combination of labels; and (3) <strong>image perception</strong>, where multiple labels can be predicted at once from a given image. Furthermore, we present the <strong>Joint-1.6M dataset</strong>, which contains 200,000 high-quality images collected from public sources, automatic labels for 7 visual domains, and LLM-generated captions. Extensive experiments demonstrate that Jodi excels in both generation and understanding tasks and exhibits strong extensibility to a wider range of visual domains.
