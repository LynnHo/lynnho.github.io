---
work: true
slug: "S2GAN"
section: "publication"
order: 80
title_html: "S<sup>2</sup>GAN: Share Aging Factors Across Ages and Share Aging Trends Among Individuals"
authors_html: "<strong>Zhenliang He</strong>, Meina Kan<sup>✉</sup>, Shiguang Shan, Xilin Chen"
image: "./s2gan.jpg"
image_link: "https://openaccess.thecvf.com/content_ICCV_2019/html/He_S2GAN_Share_Aging_Factors_Across_Ages_and_Share_Aging_Trends_ICCV_2019_paper.html"
badges:
  - url: "https://openaccess.thecvf.com/content_ICCV_2019/papers/He_S2GAN_Share_Aging_Factors_Across_Ages_and_Share_Aging_Trends_ICCV_2019_paper.pdf"
    image: "https://img.shields.io/badge/Oral-FFF1DC?label=ICCV%202019&labelColor=3A98B9"
links:
  - label: "Paper"
    url: "https://openaccess.thecvf.com/content_ICCV_2019/papers/He_S2GAN_Share_Aging_Factors_Across_Ages_and_Share_Aging_Trends_ICCV_2019_paper.pdf"
  - label: "Video"
    url: "https://www.youtube.com/watch?v=ByfFufRhuRc"
bib: |
  @inproceedings{he2019s2gan,
    title={S2GAN: Share Aging Factors Across Ages and Share Aging Trends Among Individuals},
    author={He, Zhenliang and Kan, Meina and Shan, Shiguang and Chen, Xilin},
    booktitle={IEEE International Conference on Computer Vision (ICCV)},
    year={2019}
  }
---

Generally, we human follow the roughly <strong>common aging trends</strong>, e.g., the wrinkles only tend to be more, longer or deeper. However, the aging process of each individual is more dominated by his/her <strong>personalized factors</strong>, including the invariant factors such as identity and mole, as well as the personalized aging patterns, e.g., one may age by graying hair while another may age by receding hairline. Following this biological principle, in this work, we propose an effective and efficient method to simulate natural aging. Specifically, a <strong>personalized aging basis</strong> is established for each individual to depict his/her own aging factors. Then different ages share this basis, being derived through <strong>age-specific transforms</strong>. The age-specific transforms represent the aging trends which are shared among all individuals. The proposed method can achieve continuous face aging with favorable aging accuracy, identity preservation, and fidelity. Furthermore, befitted from the effective design, a unique model is capable of all ages and the prediction time is significantly saved.
