---
work: true
slug: "EigenGAN"
section: "publication"
order: 60
title_html: "EigenGAN: Layer-Wise Eigen-Learning for GANs"
authors_html: "<strong>Zhenliang He</strong>, Meina Kan<sup>✉</sup>, Shiguang Shan"
image: "./eigengan.gif"
image_link: "https://github.com/LynnHo/EigenGAN-Tensorflow"
badges:
  - url: "https://openaccess.thecvf.com/content/ICCV2021/papers/He_EigenGAN_Layer-Wise_Eigen-Learning_for_GANs_ICCV_2021_paper.pdf"
    image: "https://img.shields.io/badge/ICCV%202021-3A98B9"
  - url: "https://github.com/LynnHo/EigenGAN-Tensorflow"
    image: "https://img.shields.io/github/stars/LynnHo/EigenGAN-Tensorflow.svg?style=social"
links:
  - label: "Paper"
    url: "https://openaccess.thecvf.com/content/ICCV2021/papers/He_EigenGAN_Layer-Wise_Eigen-Learning_for_GANs_ICCV_2021_paper.pdf"
  - label: "Proof"
    url: "./proof.pdf"
  - label: "Video"
    url: "https://www.youtube.com/watch?v=E_88BajgIOs"
  - label: "TensorFlow (Official)"
    url: "https://github.com/LynnHo/EigenGAN-Tensorflow"
  - label: "PyTorch"
    url: "https://github.com/bryandlee/eigengan-pytorch"
bib: |
  @inproceedings{he2021eigengan,
    title={EigenGAN: Layer-Wise Eigen-Learning for GANs},
    author={He, Zhenliang and Kan, Meina and Shan, Shiguang},
    booktitle={IEEE International Conference on Computer Vision (ICCV)},
    year={2021}
  }
---

Recent studies on Generative Adversarial Network (GAN) reveal that different layers of a generative CNN hold different semantics of the synthesized images. However, few GAN models have explicit dimensions to control the semantic attributes represented in a specific layer. This paper proposes EigenGAN which is able to unsupervisedly mine interpretable and controllable dimensions from different generator layers. Specifically, EigenGAN embeds one linear subspace with orthogonal basis into each generator layer. Via generative adversarial training to learn a target distribution, <strong>these layer-wise subspaces automatically discover a set of eigen-dimensions at each layer corresponding to a set of semantic attributes or interpretable variations</strong>. By traversing the coefficient of a specific eigen-dimension, the generator can produce samples with continuous changes corresponding to a specific semantic attribute. Taking the human face for example, EigenGAN can discover controllable dimensions for high-level concepts such as pose and gender in the subspace of deep layers, as well as low-level concepts such as hue and color in the subspace of shallow layers. Moreover, in the linear case, we theoretically prove that our algorithm derives the principal components as PCA does.
