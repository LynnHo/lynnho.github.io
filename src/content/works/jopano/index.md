---
work: true
slug: "JoPano"
section: "publication"
order: 20
title_html: "JoPano: Unified Panorama Generation via Joint Modeling"
authors_html: "Wancheng Feng<sup>†</sup>, Chen An<sup>†</sup>, <strong>Zhenliang He</strong><sup>✉</sup>, Meina Kan, Shiguang Shan, Lukun Wang"
image: "./jopano.gif"
image_link: "https://vipl-genun.github.io/Project-JoPano/"
badges:
  - url: "https://arxiv.org/pdf/2512.06885"
    image: "https://img.shields.io/badge/arXiv%202025-3A98B9"
  - url: "https://github.com/VIPL-GENUN/JoPano"
    image: "https://img.shields.io/github/stars/VIPL-GENUN/JoPano.svg?style=social"
links:
  - label: "Paper"
    url: "https://arxiv.org/pdf/2512.06885"
  - label: "Project"
    url: "https://vipl-genun.github.io/Project-JoPano/"
bib: |
  @article{feng2025jopano,
    title={JoPano: Unified Panorama Generation via Joint Modeling},
    author={Feng, Wancheng and An, Chen and He, Zhenliang and Kan, Meina and Shan, Shiguang and Wang, Lukun},
    journal={arXiv:2512.06885},
    year={2025}
  }
---

Panorama generation has recently attracted growing interest in the research community, with two core tasks, text-to-panorama and view-to-panorama generation. However, existing methods still face two major challenges: their U-Net-based architectures constrain the visual quality of the generated panoramas, and they usually treat the two core tasks independently, which leads to modeling redundancy and inefficiency. To overcome these challenges, we propose a joint-face panorama (JoPano) generation approach that unifies the two core tasks within a DiT-based model. To transfer the rich generative capabilities of existing DiT backbones learned from natural images to the panorama domain, we propose a Joint-Face Adapter built on the cubemap representation of panoramas, which enables a pretrained DiT to jointly model and generate different views of a panorama. We further apply Poisson Blending to reduce seam inconsistencies that often appear at the boundaries between cube faces. Correspondingly, we introduce Seam-SSIM and Seam-Sobel metrics to quantitatively evaluate the seam consistency. Moreover, we propose a condition switching mechanism that unifies text-to-panorama and view-to-panorama tasks within a single model. Comprehensive experiments show that JoPano can generate high-quality panoramas for both text-to-panorama and view-to-panorama generation tasks, achieving state-of-the-art performance on FID, CLIP-FID, IS, and CLIP-Score metrics.
