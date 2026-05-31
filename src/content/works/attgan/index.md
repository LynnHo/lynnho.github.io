---
work: true
slug: "AttGAN"
section: "publication"
order: 70
title_html: "AttGAN: Facial Attribute Editing by Only Changing What You Want"
authors_html: "<strong>Zhenliang He</strong>, Wangmeng Zuo, Meina Kan, Shiguang Shan<sup>✉</sup>, Xilin Chen"
image: "./attgan.jpg"
image_link: "https://github.com/LynnHo/AttGAN-Tensorflow"
badges:
  - url: "https://kdocs.cn/l/cpp7J2ZsFUW7"
    image: "https://img.shields.io/badge/TIP%202019-3A98B9"
  - url: "https://github.com/LynnHo/AttGAN-Tensorflow"
    image: "https://img.shields.io/github/stars/LynnHo/AttGAN-Tensorflow.svg?style=social"
links:
  - label: "Paper"
    url: "https://kdocs.cn/l/cpp7J2ZsFUW7"
  - label: "TensorFlow (Official)"
    url: "https://github.com/LynnHo/AttGAN-Tensorflow"
  - label: "PyTorch"
    url: "https://github.com/elvisyjlin/AttGAN-PyTorch"
  - label: "PaddlePaddle"
    url: "https://www.paddlepaddle.org.cn/modelbasedetail/attgan"
bib: |
  @article{he2019attgan,
    title={AttGAN: Facial Attribute Editing by Only Changing What You Want},
    author={He, Zhenliang and Zuo, Wangmeng and Kan, Meina and Shan, Shiguang and Chen, Xilin},
    journal={IEEE Transactions on Image Processing (TIP)},
    volume={28},
    number={11},
    pages={5464--5478},
    year={2019}
  }
---

Facial attribute editing aims to manipulate single or multiple attributes on a given face image, i.e., to generate a new face image with desired attributes while preserving other details. Recently, generative adversarial net (GAN) and encoder-decoder architecture are usually incorporated to handle this task with promising results. Based on the encoder-decoder architecture, facial attribute editing is achieved by decoding the latent representation of a given face conditioned on the desired attributes. Some existing methods attempt to establish an attribute-independent latent representation for further attribute editing. However, such attribute-independent constraint on the latent representation is excessive because it restricts the capacity of the latent representation and may result in information loss, leading to over-smooth or distorted generation. Instead of imposing constraints on the latent representation, in this work we propose to apply an <strong>attribute classification constraint</strong> to the generated image to just guarantee the correct change of desired attributes, i.e., to "change what you want". Meanwhile, the <strong>reconstruction learning</strong> is introduced to preserve attribute-excluding details, in other words, to "only change what you want". Besides, the <strong>adversarial learning</strong> is employed for visually realistic editing. These three components cooperate with each other forming an effective framework for high quality facial attribute editing, referred as <strong>AttGAN</strong>. Furthermore, the proposed method is extended for <strong>attribute style manipulation</strong> in an unsupervised manner. Experiments on two wild datasets, CelebA and LFW, show that the proposed method outperforms the state-of-the-arts on realistic attribute editing with other facial details well preserved.
