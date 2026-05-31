---
work: true
slug: "Unipercept"
section: "publication"
order: 10
title_html: "UniPercept: A Unified Diffusion Model for Generalizable Visual Perception"
authors_html: "Zuyan Zhao, <strong>Zhenliang He</strong><sup>✉</sup>, Meina Kan, Shiguang Shan, Xilin Chen"
image: "./unipercept.jpg"
image_link: "https://vipl-genun.github.io/Project-UniPercept/"
badges:
  - url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_UniPercept_A_Unified_Diffusion_Model_for_Generalizable_Visual_Perception_CVPR_2026_paper.pdf"
    image: "https://img.shields.io/badge/CVPR%202026-3A98B9"
links:
  - label: "Paper"
    url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Zhao_UniPercept_A_Unified_Diffusion_Model_for_Generalizable_Visual_Perception_CVPR_2026_paper.pdf"
  - label: "Project"
    url: "https://vipl-genun.github.io/Project-UniPercept"
bib: |
  @inproceedings{zhao2026unipercept,
    title={UniPercept: A Unified Diffusion Model for Generalizable Visual Perception},
    author={Zhao, Zuyan and He, Zhenliang and Kan, Meina and Shan, Shiguang and Chen, Xilin},
    journal={IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    year={2026}
  }
---

Diffusion models have shown impressive performance in generative tasks, demonstrating their ability to capture detailed structural and semantic information. Recently, these capabilities have been extended to visual understanding, with studies employing diffusion models as the backbone for various perception tasks. However, existing diffusion-based perception models are generally restricted to a single task or a fixed set of predefined tasks, lacking an efficient mechanism to generalize to novel tasks. To overcome this limitation, we propose a unified DiT-based perception framework called <strong>UniPercept</strong>, which introduces a novel foundation-adapter paradigm for general visual perception. In this framework, a shared diffusion-based foundation model is trained to capture common and generalizable visual knowledge across diverse perception tasks, with task-specific adapters integrated for each individual task. Leveraging its superior generalization ability, the foundation model can be efficiently adapted to novel domains through lightweight adapters, requiring as few as <strong>1,000</strong> training samples and less than <strong>1%</strong> of trainable parameters. Furthermore, UniPercept demonstrates strong performance across various perception tasks, outperforming state-of-the-art generalist models in most cases and achieving accuracy comparable to specialist models.
