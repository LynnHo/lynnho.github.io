---
work: true
slug: "CtrLoRA"
section: "publication"
order: 40
title_html: "CtrLoRA: An Extensible and Efficient Framework for Controllable Image Generation"
authors_html: "Yifeng Xu, <strong>Zhenliang He</strong><sup>✉</sup>, Shiguang Shan, Xilin Chen"
image: "./ctrlora.jpg"
image_link: "https://github.com/xyfJASON/ctrlora"
badges:
  - url: "https://arxiv.org/pdf/2410.09400"
    image: "https://img.shields.io/badge/ICLR%202025-3A98B9"
  - url: "https://github.com/xyfJASON/ctrlora"
    image: "https://img.shields.io/github/stars/xyfJASON/ctrlora.svg?style=social"
links:
  - label: "Paper"
    url: "https://arxiv.org/pdf/2410.09400"
  - label: "Project"
    url: "https://github.com/xyfJASON/ctrlora"
bib: |
  @inproceedings{xu2024ctrlora,
    title={CtrLoRA: An Extensible and Efficient Framework for Controllable Image Generation},
    author={Xu, Yifeng and He, Zhenliang and Shan, Shiguang and Chen, Xilin},
    journal={International Conference on Learning Representations (ICLR)},
    year={2025}
  }
---

Recently, large-scale diffusion models have made impressive progress in text-to-image (T2I) generation. To further equip these T2I models with fine-grained spatial control, approaches like ControlNet introduce an extra network that learns to follow a condition image. However, for every single condition type, ControlNet requires independent training on millions of data pairs with hundreds of GPU hours, which is quite expensive and makes it challenging for ordinary users to explore and develop new types of conditions. To address this problem, we propose the CtrLoRA framework, which trains a Base ControlNet to learn the common knowledge of image-to-image generation from multiple base conditions, along with condition-specific LoRAs to capture distinct characteristics of each condition. <strong>Utilizing our pretrained Base ControlNet, users can easily adapt it to new conditions, requiring as few as 1,000 data pairs and less than one hour of single-GPU training to obtain satisfactory results in most scenarios. Moreover, our CtrLoRA reduces the learnable parameters by 90% compared to ControlNet, significantly lowering the threshold to distribute and deploy the model weights</strong>. Extensive experiments on various types of conditions demonstrate the efficiency and effectiveness of our method.
