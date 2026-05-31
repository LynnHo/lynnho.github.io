---
work: true
slug: "PrecNeRF"
section: "publication"
order: 50
title_html: "Precise Integral in NeRFs: Overcoming the Approximation Errors of Numerical Quadrature"
authors_html: "Boyuan Zhang, <strong>Zhenliang He</strong><sup>✉</sup>, Meina Kan, Shiguang Shan"
image: "./precnerf-poster.jpg"
video: "./precnerf.mp4"
image_link: "https://github.com/Moreland-cas/Precise-NeRF"
badges:
  - url: "https://openaccess.thecvf.com/content/WACV2025/papers/Zhang_Precise_Integral_in_NeRFs_Overcoming_the_Approximation_Errors_of_Numerical_WACV_2025_paper.pdf"
    image: "https://img.shields.io/badge/Oral-FFF1DC?label=WACV%202025&labelColor=3A98B9"
  - url: "https://github.com/Moreland-cas/Precise-NeRF"
    image: "https://img.shields.io/github/stars/Moreland-cas/Precise-NeRF.svg?style=social"
links:
  - label: "Paper"
    url: "https://openaccess.thecvf.com/content/WACV2025/papers/Zhang_Precise_Integral_in_NeRFs_Overcoming_the_Approximation_Errors_of_Numerical_WACV_2025_paper.pdf"
  - label: "Project"
    url: "https://github.com/Moreland-cas/Precise-NeRF"
bib: |
  @inproceedings{zhang2025precnerf,
    title={Precise Integral in NeRFs: Overcoming the Approximation Errors of Numerical Quadrature},
    author={Zhang, Boyuan and He, Zhenliang and Kan, Meina and Shan, Shiguang},
    booktitle={IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
    year={2025}
  }
---

Neural Radiance Fields (NeRFs) use neural networks to translate spatial coordinates to corresponding volume density and directional radiance, enabling realistic novel view synthesis through volume rendering. Rendering new viewpoints involves computing volume rendering integrals along rays, usually approximated by numerical quadrature because of lacking closed-form solutions. In this paper, utilizing Taylor expansion, we demonstrate that numerical quadrature causes inevitable approximation error in NeRF integrals due to ignoring the parameter associated with the Lagrange remainder. To mitigate the approximation error, we propose a novel neural field with segment representation as input to implicitly model the remainder parameter. In theory, our proposed method is proven to possess the potential to achieve fully precise rendering integral, as demonstrated by comprehensive experiments on several commonly used datasets with state-of-the-art results.
