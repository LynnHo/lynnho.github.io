---
permalink: /
title: "何振梁（Zhenliang He）"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


<!-- ======================================================================= -->
<!-- =                              Contents                               = -->
<!-- ======================================================================= -->

I am an Assistant Professor in the Visual Information Processing and Learning ([VIPL](http://vipl.ict.ac.cn/en)) research group at the Institute of Computing Technology ([ICT](http://www.ict.cas.cn)), Chinese Academy of Sciences ([CAS](https://english.cas.cn/)). I received my Ph.D. from ICT, CAS in 2021, under the supervision of Prof. [Shiguang Shan](https://vipl.ict.ac.cn/people/~sgshan) and close collaboration with Prof. [Meina Kan](https://vipl.ict.ac.cn/homepage/mnkan/index.html) and Prof. [Xilin Chen](https://vipl.ict.ac.cn/people/~xlchen). I received my B.E. from Beijing University of Posts and Telecommunications in 2015. My current research focuses on generative models and representation learning.

<a href="https://scholar.google.com/citations?user=fDTTEaAAAAAJ"><img src="images/google-scholar.png" style="width:auto;height:30px;"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/LynnHo"><img src="images/github.png" style="width:auto;height:30px;"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:hezhenliang@ict.ac.cn"><img src="images/email.png" style="width:auto;height:30px;"></a>
&nbsp;[<font size="4">hezhenliang@ict.ac.cn</font>](mailto:hezhenliang@ict.ac.cn)


---

Tutorial
======

<table>
<!--Matrix Calculus-->
    <tr>
        <td width="1000" style="padding-left:0;padding-top:5px;padding-bottom:0;">
            <a href="https://github.com/LynnHo/Matrix-Calculus-Tutorial"><img src="0_lynn/projects/matrix_calculus/matrix_calculus.png" width="1000"></a>
        </td>
        <td width="4000" style="padding-top:5px;padding-bottom:0;">
            <p class="content"><strong>Matrix Calculus (Matrix Derivative, 矩阵求导教程)</strong></p>
            <p class="content"><strong>Zhenliang He</strong></p>
            <p class="content"><img src="https://img.shields.io/github/stars/LynnHo/Matrix-Calculus-Tutorial.svg?style=social" style="width:auto;height:25px;"></p>

            <span id="Matrix Calculus Abstract open" onclick="toggleText('Matrix Calculus Abstract');toggleText('Matrix Calculus Abstract close');toggleText('Matrix Calculus Abstract open')"><a>&#11167; Abstract</a></span>
            <span id="Matrix Calculus Abstract close" onclick="toggleText('Matrix Calculus Abstract');toggleText('Matrix Calculus Abstract close');toggleText('Matrix Calculus Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
            <a href="https://github.com/LynnHo/Matrix-Calculus-Tutorial">Project</a>
        </td>
    </tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="Matrix Calculus Abstract" style="display:none;">
            In this page, we introduce a differential based method for vector and matrix derivatives (matrix calculus), which <strong>only needs a few simple rules to derive most matrix derivatives</strong>. This method is useful and well established in mathematics; however, few documents clearly or detailedly describe it. Therefore, we make this page aiming at the comprehensive introduction of <strong>matrix calculus via differentials</strong>.
        </div>
    </td></tr>
</table>


---

Selected Publications
======

*See the full list on [Google Scholar](https://scholar.google.com/citations?user=fDTTEaAAAAAJ)*


<table>
    <!-- =============================== -->
    <!-- =          EigenGAN           = -->
    <!-- =============================== -->
    <tr>
        <td width="1000" style="padding-left:0;padding-top:5px;padding-bottom:0;">
            <a href="https://github.com/LynnHo/EigenGAN-Tensorflow"><img src="0_lynn/projects/eigengan/eigengan.gif" width="1000"></a>
        </td>
        <td width="4000" style="padding-top:5px;padding-bottom:0;">
            <p class="content"><strong>EigenGAN: Layer-Wise Eigen-Learning for GANs</strong></p>
            <p class="content"><strong>Zhenliang He</strong>, Meina Kan, Shiguang Shan</p>
            <p class="content"><img src="https://img.shields.io/badge/ICCV%202021-3A98B9" style="width:auto;height:25px;">&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/github/stars/LynnHo/EigenGAN-Tensorflow.svg?style=social" style="width:auto;height:25px;"></p>

            <span id="EigenGAN Abstract open" onclick="toggleText('EigenGAN Abstract');toggleText('EigenGAN Abstract close');toggleText('EigenGAN Abstract open')"><a>&#11167; Abstract</a></span>
            <span id="EigenGAN Abstract close" onclick="toggleText('EigenGAN Abstract');toggleText('EigenGAN Abstract close');toggleText('EigenGAN Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
            <a href="https://openaccess.thecvf.com/content/ICCV2021/papers/He_EigenGAN_Layer-Wise_Eigen-Learning_for_GANs_ICCV_2021_paper.pdf">Paper</a> |
            <a href="0_lynn/projects/eigengan/proof.pdf">Proof</a> |
            <!-- <a href="https://github.com/LynnHo/EigenGAN-Tensorflow">Project</a> | -->
            <a href="https://www.youtube.com/watch?v=E_88BajgIOs">Video</a> |
            <a href="https://github.com/LynnHo/EigenGAN-Tensorflow">TensorFlow (Official)</a> |
            <a href="https://github.com/bryandlee/eigengan-pytorch">PyTorch</a> |
            <span id="EigenGAN Bib open" onclick="toggleText('EigenGAN Bib');toggleText('EigenGAN Bib close');toggleText('EigenGAN Bib open')"><a>&#11167; Bib</a></span>
            <span id="EigenGAN Bib close" onclick="toggleText('EigenGAN Bib');toggleText('EigenGAN Bib close');toggleText('EigenGAN Bib open')" style="display:none;"><a>&#11165; Bib</a></span>
        </td>
    </tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="EigenGAN Abstract" style="display:none;">
            Recent studies on Generative Adversarial Network (GAN) reveal that different layers of a generative CNN hold different semantics of the synthesized images. However, few GAN models have explicit dimensions to control the semantic attributes represented in a specific layer. This paper proposes EigenGAN which is able to unsupervisedly mine interpretable and controllable dimensions from different generator layers. Specifically, EigenGAN embeds one linear subspace with orthogonal basis into each generator layer. Via generative adversarial training to learn a target distribution, these layer-wise subspaces automatically discover a set of eigen-dimensions at each layer corresponding to a set of semantic attributes or interpretable variations. By traversing the coefficient of a specific eigen-dimension, the generator can produce samples with continuous changes corresponding to a specific semantic attribute. Taking the human face for example, EigenGAN can discover controllable dimensions for high-level concepts such as pose and gender in the subspace of deep layers, as well as low-level concepts such as hue and color in the subspace of shallow layers. Moreover, in the linear case, we theoretically prove that our algorithm derives the principal components as PCA does.
        </div>
    </td></tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="EigenGAN Bib" style="display:none;">
            @inproceedings{he2021eigengan,<br>
              &emsp;title={EigenGAN: Layer-Wise Eigen-Learning for GANs},<br>
              &emsp;author={He, Zhenliang and Kan, Meina and Shan, Shiguang},<br>
              &emsp;booktitle={International Conference on Computer Vision},<br>
              &emsp;year={2021}<br>
            }
        </div>
    </td></tr>


    <!-- =============================== -->
    <!-- =           AttGAN            = -->
    <!-- =============================== -->
    <tr>
        <td width="1000" style="padding-left:0;padding-top:30px;padding-bottom:0;">
            <a href="https://github.com/LynnHo/AttGAN-Tensorflow"><img src="0_lynn/projects/attgan/attgan.jpg" width="1000"></a>
        </td>

        <td width="4000" style="padding-top:30px;padding-bottom:0;">
            <p class="content"><strong>AttGAN: Facial Attribute Editing by Only Changing What You Want</strong></p>
            <p class="content"><strong>Zhenliang He</strong>, Wangmeng Zuo, Meina Kan, Shiguang Shan, Xilin Chen</p>
            <p class="content"><img src="https://img.shields.io/badge/T--IP%202019-3A98B9" style="width:auto;height:25px;">&nbsp;&nbsp;&nbsp;<img src="https://img.shields.io/github/stars/LynnHo/AttGAN-Tensorflow.svg?style=social" style="width:auto;height:25px;"></p>

            <span id="AttGAN Abstract open" onclick="toggleText('AttGAN Abstract');toggleText('AttGAN Abstract close');toggleText('AttGAN Abstract open')"><a>&#11167; Abstract</a></span>
            <span id="AttGAN Abstract close" onclick="toggleText('AttGAN Abstract');toggleText('AttGAN Abstract close');toggleText('AttGAN Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
            <a href="https://vipl.ict.ac.cn/publications/2019/jour/202212/P020221230369682856969.pdf">Paper</a> |
            <!-- <a href="https://github.com/LynnHo/AttGAN-Tensorflow">Project</a> | -->
            <a href="https://github.com/LynnHo/AttGAN-Tensorflow">TensorFlow (Official)</a> |
            <a href="https://github.com/elvisyjlin/AttGAN-PyTorch">PyTorch</a> |
            <a href="https://www.paddlepaddle.org.cn/modelbasedetail/attgan">PaddlePaddle</a> |
            <span id="AttGAN Bib open" onclick="toggleText('AttGAN Bib');toggleText('AttGAN Bib close');toggleText('AttGAN Bib open')"><a>&#11167; Bib</a></span>
            <span id="AttGAN Bib close" onclick="toggleText('AttGAN Bib');toggleText('AttGAN Bib close');toggleText('AttGAN Bib open')" style="display:none;"><a>&#11165; Bib</a></span>
        </td>
    </tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="AttGAN Abstract" style="display:none;">
            Facial attribute editing aims to manipulate single or multiple attributes on a given face image, i.e., to generate a new face image with desired attributes while preserving other details. Recently, generative adversarial net (GAN) and encoder-decoder architecture are usually incorporated to handle this task with promising results. Based on the encoder-decoder architecture, facial attribute editing is achieved by decoding the latent representation of a given face conditioned on the desired attributes. Some existing methods attempt to establish an attribute-independent latent representation for further attribute editing. However, such attribute-independent constraint on the latent representation is excessive because it restricts the capacity of the latent representation and may result in information loss, leading to over-smooth or distorted generation. Instead of imposing constraints on the latent representation, in this work we propose to apply an <strong>attribute classification constraint</strong> to the generated image to just guarantee the correct change of desired attributes, i.e., to "change what you want". Meanwhile, the <strong>reconstruction learning</strong> is introduced to preserve attribute-excluding details, in other words, to "only change what you want". Besides, the <strong>adversarial learning</strong> is employed for visually realistic editing. These three components cooperate with each other forming an effective framework for high quality facial attribute editing, referred as <strong>AttGAN</strong>. Furthermore, the proposed method is extended for <strong>attribute style manipulation</strong> in an unsupervised manner. Experiments on two wild datasets, CelebA and LFW, show that the proposed method outperforms the state-of-the-arts on realistic attribute editing with other facial details well preserved.
        </div>
    </td></tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="AttGAN Bib" style="display:none;">
            @article{he2019attgan,<br>
              &emsp;title={AttGAN: Facial Attribute Editing by Only Changing What You Want},<br>
              &emsp;author={He, Zhenliang and Zuo, Wangmeng and Kan, Meina and Shan, Shiguang and Chen, Xilin},<br>
              &emsp;journal={IEEE Transactions on Image Processing},<br>
              &emsp;volume={28},<br>
              &emsp;number={11},<br>
              &emsp;pages={5464--5478},<br>
              &emsp;year={2019}<br>
            }
        </div>
    </td></tr>


    <!-- =============================== -->
    <!-- =            S2GAN            = -->
    <!-- =============================== -->
    <tr>
        <td width="1000" style="padding-left:0;padding-top:30px;padding-bottom:0;">
            <a href="https://openaccess.thecvf.com/content_ICCV_2019/html/He_S2GAN_Share_Aging_Factors_Across_Ages_and_Share_Aging_Trends_ICCV_2019_paper.html"><img src="0_lynn/projects/s2gan/s2gan.jpg" width="1000"></a>
        </td>

        <td width="4000" style="padding-top:30px;padding-bottom:0;">
            <p class="content"><strong>S2GAN: Share Aging Factors Across Ages and Share Aging Trends Among Individuals</strong></p>
            <p class="content"><strong>Zhenliang He</strong>, Meina Kan, Shiguang Shan, Xilin Chen</p>
            <p class="content"><img src="https://img.shields.io/badge/Oral-FFF1DC?label=ICCV%202019&labelColor=3A98B9" style="width:auto;height:25px;"></p>

            <span id="S2GAN Abstract open" onclick="toggleText('S2GAN Abstract');toggleText('S2GAN Abstract close');toggleText('S2GAN Abstract open')"><a>&#11167; Abstract</a></span>
            <span id="S2GAN Abstract close" onclick="toggleText('S2GAN Abstract');toggleText('S2GAN Abstract close');toggleText('S2GAN Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
            <a href="https://openaccess.thecvf.com/content_ICCV_2019/papers/He_S2GAN_Share_Aging_Factors_Across_Ages_and_Share_Aging_Trends_ICCV_2019_paper.pdf">Paper</a> |
            <a href="https://www.youtube.com/watch?v=ByfFufRhuRc">Video</a> |
            <span id="S2GAN Bib open" onclick="toggleText('S2GAN Bib');toggleText('S2GAN Bib close');toggleText('S2GAN Bib open')"><a>&#11167; Bib</a></span>
            <span id="S2GAN Bib close" onclick="toggleText('S2GAN Bib');toggleText('S2GAN Bib close');toggleText('S2GAN Bib open')" style="display:none;"><a>&#11165; Bib</a></span>
        </td>
    </tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="S2GAN Abstract" style="display:none;">
            Generally, we human follow the roughly <strong>common aging trends</strong>, e.g., the wrinkles only tend to be more, longer or deeper. However, the aging process of each individual is more dominated by his/her <strong>personalized factors</strong>, including the invariant factors such as identity and mole, as well as the personalized aging patterns, e.g., one may age by graying hair while another may age by receding hairline. Following this biological principle, in this work, we propose an effective and efficient method to simulate natural aging. Specifically, a <strong>personalized aging basis</strong> is established for each individual to depict his/her own aging factors. Then different ages share this basis, being derived through <strong>age-specific transforms</strong>. The age-specific transforms represent the aging trends which are shared among all individuals. The proposed method can achieve continuous face aging with favorable aging accuracy, identity preservation, and fidelity. Furthermore, befitted from the effective design, a unique model is capable of all ages and the prediction time is significantly saved.
        </div>
    </td></tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="S2GAN Bib" style="display:none;">
            @inproceedings{he2019s2gan,<br>
              &emsp;title={S2GAN: Share Aging Factors Across Ages and Share Aging Trends Among Individuals},<br>
              &emsp;author={He, Zhenliang and Kan, Meina and Shan, Shiguang and Chen, Xilin},<br>
              &emsp;booktitle={International Conference on Computer Vision},<br>
              &emsp;year={2019}<br>
            }
        </div>
    </td></tr>


    <!-- =============================== -->
    <!-- =           PA-GAN            = -->
    <!-- =============================== -->
    <tr>
        <td width="1000" style="padding-left:0;padding-top:30px;padding-bottom:0;">
            <a href="https://github.com/LynnHo/PA-GAN-Tensorflow"><img src="0_lynn/projects/pa-gan/pa-gan.jpg" width="1000"></a>
        </td>

        <td width="4000" style="padding-top:30px;padding-bottom:0;">
            <p class="content"><strong>PA-GAN: Progressive Attention Generative Adversarial Network for Facial Attribute Editing</strong></p>
            <p class="content"><strong>Zhenliang He</strong>, Meina Kan, Jichao Zhang, Shiguang Shan</p>
            <p class="content"><img src="https://img.shields.io/badge/arXiv-3A98B9" style="width:auto;height:25px;"></p>

            <span id="PA-GAN Abstract open" onclick="toggleText('PA-GAN Abstract');toggleText('PA-GAN Abstract close');toggleText('PA-GAN Abstract open')"><a>&#11167; Abstract</a></span>
            <span id="PA-GAN Abstract close" onclick="toggleText('PA-GAN Abstract');toggleText('PA-GAN Abstract close');toggleText('PA-GAN Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
            <a href="https://arxiv.org/pdf/2007.05892.pdf">Paper</a> |
            <!-- <a href="https://github.com/LynnHo/PA-GAN-Tensorflow">Project</a> | -->
            <a href="https://github.com/LynnHo/PA-GAN-Tensorflow">TensorFlow (Official)</a> |
            <span id="PA-GAN Bib open" onclick="toggleText('PA-GAN Bib');toggleText('PA-GAN Bib close');toggleText('PA-GAN Bib open')"><a>&#11167; Bib</a></span>
            <span id="PA-GAN Bib close" onclick="toggleText('PA-GAN Bib');toggleText('PA-GAN Bib close');toggleText('PA-GAN Bib open')" style="display:none;"><a>&#11165; Bib</a></span>
        </td>
    </tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="PA-GAN Abstract" style="display:none;">
            Facial attribute editing aims to manipulate attributes on the human face, e.g., adding a mustache or changing the hair color. Existing approaches suffer from a serious compromise between correct attribute generation and preservation of the other information such as identity and background, because they edit the attributes in the imprecise area. To resolve this dilemma, we propose a progressive attention GAN (PA-GAN) for facial attribute editing. In our approach, the editing is progressively conducted from high to low feature level while being constrained inside a proper attribute area by an attention mask at each level. This manner prevents undesired modifications to the irrelevant regions from the beginning, and then the network can focus more on correctly generating the attributes within a proper boundary at each level. As a result, our approach achieves correct attribute editing with irrelevant details much better preserved compared with the state-of-the-arts.
        </div>
    </td></tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="PA-GAN Bib" style="display:none;">
            @article{he2020pagan,<br>
              &emsp;title={PA-GAN: Progressive Attention Generative Adversarial Network for Facial Attribute Editing},<br>
              &emsp;author={He, Zhenliang and Kan, Meina and Zhang, Jichao and Shan, Shiguang},<br>
              &emsp;journal={arXiv:2007.05892},<br>
              &emsp;year={2020}<br>
            }

        </div>
    </td></tr>


    <!-- =============================== -->
    <!-- =           STD-GAN           = -->
    <!-- =============================== -->
    <td width="1000" style="padding-left:0;padding-top:30px;padding-bottom:0;"><a href="0_lynn/projects/std-gan/std-gan.pdf">
        <img src="0_lynn/projects/std-gan/std-gan.jpg" width="1000"></a>
    </td>
    
    <td width="4000" style="padding-top:30px;padding-bottom:0;">
        <p class="content"><strong>Image Style Disentangling for Instance-Level Facial Attribute Transfer</strong></p>
        <p class="content">Xuyang Guo, Meina Kan, <strong>Zhenliang He</strong>, Xingguang Song, Shiguang Shan</p>
        <p class="content"><img src="https://img.shields.io/badge/CVIU%202021-3A98B9" style="width:auto;height:25px;"></p>
        
        <span id="STD-GAN Abstract open" onclick="toggleText('STD-GAN Abstract');toggleText('STD-GAN Abstract close');toggleText('STD-GAN Abstract open')"><a>&#11167; Abstract</a></span>
        <span id="STD-GAN Abstract close" onclick="toggleText('STD-GAN Abstract');toggleText('STD-GAN Abstract close');toggleText('STD-GAN Abstract open')" style="display:none;"><a>&#11165; Abstract</a></span> |
        <a href="0_lynn/projects/std-gan/std-gan.pdf">Paper</a> |
        <!-- <a href="https://github.com/XuyangGuo/STD-GAN">Project</a> | -->
        <a href="https://github.com/XuyangGuo/STD-GAN">PyTorch (Official)</a> |
        <span id="STD-GAN Bib open" onclick="toggleText('STD-GAN Bib');toggleText('STD-GAN Bib close');toggleText('STD-GAN Bib open')"><a>&#11167; Bib</a></span>
        <span id="STD-GAN Bib close" onclick="toggleText('STD-GAN Bib');toggleText('STD-GAN Bib close');toggleText('STD-GAN Bib open')" style="display:none;"><a>&#11165; Bib</a></span>
    </td>

    <tr><td colspan="2" style="padding: 0;">
        <div id="STD-GAN Abstract" style="display:none;">
            Instance-level facial attribute transfer aims at transferring an attribute including its style from a source face to a target one. Existing studies have limitations on fidelity or correctness. To address this problem, we propose a weakly supervised style disentangling method embedded in Generative Adversarial Network (GAN) for accurate instance-level attribute transfer, using only binary attribute annotations. In our method, the whole attributes transfer process is designed as two steps for easier transfer, which first removes the original attribute or transfers it to a neutral state and then adds the attributes style disentangled from a source face. Moreover, a style disentangling module is proposed to extract the attribute style of an image used in the adding step. Our method aims for accurate attribute style transfer. However, it is also capable of semantic attribute editing as a special case, which is not achievable with existing instance-level attribute transfer methods. Comprehensive experiments on CelebA Dataset show that our method can transfer the style more precisely than existing methods, with an improvement of 39% in user study, 16.5% in accuracy, and about 3.3 in FID.
        </div>
    </td></tr>

    <tr><td colspan="2" style="padding: 0;">
        <div id="STD-GAN Bib" style="display:none;">
            @article{guo2021image,<br>
              &emsp;title={Image Style Disentangling for Instance-level Facial Attribute Transfer},<br>
              &emsp;author={Guo, Xuyang and Kan, Meina and He, Zhenliang and Song, Xingguang and Shan, Shiguang},<br>
              &emsp;journal={Computer Vision and Image Understanding},<br>
              &emsp;volume={207},<br>
              &emsp;pages={103205},<br>
              &emsp;year={2021}<br>
            }
        </div>
    </td></tr>
</table>


---

Education & Experience
======

+ 2023.04 - now, Assistant Professor in the Visual Information Processing and Learning ([VIPL](http://vipl.ict.ac.cn/en)) research group at the Institute of Computing Technology ([ICT](http://www.ict.cas.cn)), Chinese Academy of Sciences ([CAS](https://english.cas.cn/)).
+ 2021.08 - 2023.03, Research Engineer at JD.com, Inc.
+ 2015.09 - 2021.06, Ph.D. student at the Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS), under the supervision of Prof. [Shiguang Shan](https://vipl.ict.ac.cn/people/~sgshan). I also had close collaboration with Prof. [Meina Kan](https://vipl.ict.ac.cn/homepage/mnkan/index.html) and Prof. [Xilin Chen](https://vipl.ict.ac.cn/people/~xlchen).
+ 2011.09 - 2015.07, college student at Beijing University of Posts and Telecommunications.


---

Honors & Awards
======

+ Outstanding Graduates Award of Beijing, ICT, CAS, 2021
+ Special Scholarship of ICT (**highest award in ICT**), ICT, CAS, 2019
+ Huawei Excellent Cooperation Award, 2017
+ Second Place Winner of MENPO Challenge in CVPR 2017
+ First Prize of Beijing Higher Mathematics Competition, 2012
+ National Scholarship (**top 8 of 610 students**), BUPT, 2012 & 2014


<!-- ======================================================================= -->
<!-- =                                Utils                                = -->
<!-- ======================================================================= -->

<script>
function toggleText(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "inline";
  } else {
    x.style.display = "none";
  }
}
</script>
