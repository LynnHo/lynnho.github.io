<!-- =============================== -->
<!-- =           STD-GAN           = -->
<!-- =============================== -->
<td width="1000" style="padding-left:0;padding-top:30px;padding-bottom:0;"><a href="https://github.com/XuyangGuo/STD-GAN">
    <img src="0_lynn/projects/std-gan/std-gan.jpg" width="1000"></a>
</td>

<td width="4000" style="padding-top:30px;padding-bottom:0;">
    <p><strong>Image Style Disentangling for Instance-Level Facial Attribute Transfer</strong></p>
    <p>Xuyang Guo, Meina Kan<sup>✉</sup>, <strong>Zhenliang He</strong>, Xingguang Song, Shiguang Shan</p>
    <p>
        <a href="0_lynn/projects/std-gan/std-gan.pdf"><img src="https://img.shields.io/badge/CVIU%202021-3A98B9" style="width:auto;height:25px;"></a>&nbsp;&nbsp;
        <a href="https://github.com/XuyangGuo/STD-GAN"><img src="https://img.shields.io/github/stars/XuyangGuo/STD-GAN.svg?style=social" style="width:auto;height:25px;" class="no-shadow"></a>
    </p>
    <span id="STD-GAN Abstract open" onclick="toggle('STD-GAN', 'Abstract')"><a href="javascript:;">&#11167; Abstract</a></span>
    <span id="STD-GAN Abstract close" onclick="toggle('STD-GAN', 'Abstract')" style="display:none;"><a href="javascript:;">&#11165; Abstract</a></span> |
    <a href="0_lynn/projects/std-gan/std-gan.pdf">Paper</a> |
    <a href="https://github.com/XuyangGuo/STD-GAN">PyTorch (Official)</a> |
    <span id="STD-GAN Bib open" onclick="toggle('STD-GAN', 'Bib')"><a href="javascript:;">&#11167; Bib</a></span>
    <span id="STD-GAN Bib close" onclick="toggle('STD-GAN', 'Bib')" style="display:none;"><a href="javascript:;">&#11165; Bib</a></span>
</td>

<tr><td colspan="2" style="padding:0;">
    <div id="STD-GAN Abstract" style="display:none;"><p align="justify" style="margin-top:15px;margin-bottom:0;">
        Instance-level facial attribute transfer aims at transferring an attribute including its style from a source face to a target one. Existing studies have limitations on fidelity or correctness. To address this problem, we propose a weakly supervised style disentangling method embedded in Generative Adversarial Network (GAN) for accurate instance-level attribute transfer, using only binary attribute annotations. In our method, the whole attributes transfer process is designed as two steps for easier transfer, which first removes the original attribute or transfers it to a neutral state and then adds the attributes style disentangled from a source face. Moreover, a style disentangling module is proposed to extract the attribute style of an image used in the adding step. Our method aims for accurate attribute style transfer. However, it is also capable of semantic attribute editing as a special case, which is not achievable with existing instance-level attribute transfer methods. Comprehensive experiments on CelebA Dataset show that our method can transfer the style more precisely than existing methods, with an improvement of 39% in user study, 16.5% in accuracy, and about 3.3 in FID.
    </p></div>
</td></tr>

<tr><td colspan="2" style="padding:0;">
    <div id="STD-GAN Bib" style="display:none;"><p style="margin-top:15px;margin-bottom:0;">
        @article{guo2021image,<br>&emsp;title={Image Style Disentangling for Instance-level Facial Attribute Transfer},<br>&emsp;author={Guo, Xuyang and Kan, Meina and He, Zhenliang and Song, Xingguang and Shan, Shiguang},<br>&emsp;journal={Computer Vision and Image Understanding},<br>&emsp;volume={207},<br>&emsp;pages={103205},<br>&emsp;year={2021}<br>}
    </p></div>
</td></tr>
