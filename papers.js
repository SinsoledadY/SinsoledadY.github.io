// =============================================================
//  📚  papers.js — 论文数据文件
//  这是你唯一需要编辑的文件，用来新增或修改论文条目。
//  index.html 会自动读取这里的数据来渲染页面。
// =============================================================

// -------------------------------------------------------------
//  ✏️  如何新增一篇论文？
//
//  在下方 PAPERS 数组末尾（最后一个 } 后面）加一个逗号，
//  然后粘贴以下模板并填写内容：
//
//  {
//    title:      "论文标题",                       ← 必填
//    authors:    "Zhang, S., Liu, Y., et al.",     ← 必填
//    venue:      "ICML 2024",                      ← 必填（会议或期刊名）
//    year:       2024,                             ← 必填（数字，不加引号）
//    categories: ["机器学习", "多模态"],              ← 必填，可自由填写
//    tagLabels:  ["Transformer", "RAG"],            ← 可选，页面显示的主题标签
//    abstract:   "论文摘要原文...",                 ← 必填
//    note:       "你的阅读笔记和思考。",             ← 可选，不写则填 null
//    pdf:        "https://arxiv.org/abs/xxxx",     ← 可选，不写则填 null
//    code:       "https://github.com/xxx/yyy",     ← 可选，不写则填 null
//    accent:     "#1B3F7F",                        ← 必填，卡片顶部色条颜色
//  }
//
//  旧数据里的 tags 仍然兼容，会自动映射为分类：
//    "nlp"  →  NLP / 自然语言处理
//    "cv"   →  计算机视觉
//    "ml"   →  机器学习
//    "llm"  →  大语言模型
//
//  accent 推荐色（复制即用）：
//    深蓝   #1B3F7F    紫色   #6D28D9    绿色   #047857
//    红色   #B91C1C    橙色   #D97706    青色   #0E7490
//    玫瑰   #BE185D    靛蓝   #3730A3
// -------------------------------------------------------------

const PAPERS = [
  {
    title: "Attention Is All You Need",
    authors: "Vaswani, A., Shazeer, N., Parmar, N., et al.",
    venue: "NeurIPS 2017",
    year: 2017,
    categories: ["NLP", "机器学习"],
    tags: ["nlp", "ml"],
    tagLabels: ["NLP", "Transformer"],
    abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.",
    note: "Transformer 架构的奠基之作。Multi-head self-attention 彻底改变了序列建模的范式——不再依赖 RNN 的时序递推，而是并行地对全局依赖建模。positional encoding 的设计也值得细看。",
    pdf: "https://arxiv.org/abs/1706.03762",
    code: "https://github.com/jadore801120/attention-is-all-you-need-pytorch",
    accent: "#1B3F7F"
  },
  {
    title: "Language Models are Few-Shot Learners (GPT-3)",
    authors: "Brown, T., Mann, B., Ryder, N., et al.",
    venue: "NeurIPS 2020",
    year: 2020,
    categories: ["大语言模型", "NLP"],
    tags: ["llm", "nlp"],
    tagLabels: ["LLM", "GPT", "In-Context Learning"],
    abstract: "We demonstrate that scaling language models greatly improves task-agnostic, few-shot performance, sometimes even reaching competitiveness with prior state-of-the-art fine-tuning approaches. Specifically, we train GPT-3, an autoregressive language model with 175 billion parameters, and test its performance in the few-shot setting. For all tasks, GPT-3 is applied without any gradient updates or fine-tuning, with tasks and few-shot demonstrations specified purely via text interaction with the model.",
    note: "In-context learning 的突破性工作。175B 参数下出现的涌现能力让人印象深刻，也正式引爆了大家对规模定律的热情。理解 prompt 设计对 few-shot 效果的影响是读这篇的收获之一。",
    pdf: "https://arxiv.org/abs/2005.14165",
    code: null,
    accent: "#6D28D9"
  },
  {
    title: "An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale (ViT)",
    authors: "Dosovitskiy, A., Beyer, L., Kolesnikov, A., et al.",
    venue: "ICLR 2021",
    year: 2021,
    categories: ["计算机视觉", "机器学习"],
    tags: ["cv", "ml"],
    tagLabels: ["Vision Transformer", "图像分类"],
    abstract: "While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks, Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks.",
    note: "把图像切成 16×16 的 patch，展平后当 token 喂给 Transformer——想法简单到令人惊讶，效果却超越了 CNN 最佳基线。关键在于大规模预训练：数据量不够时 ViT 反而不如 ResNet，这个 trade-off 很有意思。",
    pdf: "https://arxiv.org/abs/2010.11929",
    code: "https://github.com/google-research/vision_transformer",
    accent: "#047857"
  },
  {
    title: "Denoising Diffusion Probabilistic Models (DDPM)",
    authors: "Ho, J., Jain, A., Abbeel, P.",
    venue: "NeurIPS 2020",
    year: 2020,
    categories: ["计算机视觉", "机器学习"],
    tags: ["cv", "ml"],
    tagLabels: ["扩散模型", "生成模型"],
    abstract: "We present high quality image synthesis results using diffusion probabilistic models, a class of latent variable models inspired by considerations from nonequilibrium thermodynamics. Our best results are obtained by training on a weighted variational bound designed according to a novel connection between diffusion probabilistic models and denoising score matching with Langevin dynamics, and our models naturally admit a progressive lossy decompression scheme that can be interpreted as a generalization of autoregressive decoding.",
    note: "扩散模型在图像生成上的奠基之作。前向过程逐步加噪（马尔可夫链），反向过程学习去噪——训练目标最终化简为一个非常干净的 MSE loss。采样质量极高，理解 DDPM 是入门 Stable Diffusion 的必要前置。",
    pdf: "https://arxiv.org/abs/2006.11239",
    code: "https://github.com/hojonathanho/diffusion",
    accent: "#B91C1C"
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Hu, E.J., Shen, Y., Wallis, P., et al.",
    venue: "ICLR 2022",
    year: 2022,
    categories: ["大语言模型", "NLP"],
    tags: ["llm", "nlp"],
    tagLabels: ["LLM", "高效微调", "PEFT"],
    abstract: "We propose Low-Rank Adaptation, or LoRA, which freezes the pretrained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture, greatly reducing the number of trainable parameters for downstream tasks. Compared to GPT-3 175B fine-tuned with Adam, LoRA can reduce the number of trainable parameters by 10,000 times and the GPU memory requirement by 3 times.",
    note: "极其实用！冻结原始权重，只在 attention 层旁边插入低秩矩阵 A×B，可训练参数降至原来的 0.01% 量级，性能却几乎无损。现在已成为开源社区 fine-tuning 的标配方案，值得把推导过程完整手推一遍。",
    pdf: "https://arxiv.org/abs/2106.09685",
    code: "https://github.com/microsoft/LoRA",
    accent: "#D97706"
  },
  {
    title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces",
    authors: "Gu, A., Dao, T.",
    venue: "COLM 2024",
    year: 2024,
    categories: ["机器学习", "NLP"],
    tags: ["ml", "nlp"],
    tagLabels: ["SSM", "序列建模", "高效推理"],
    abstract: "Foundation models are almost universally based on the Transformer architecture and its core attention module. Many subquadratic-time architectures have been developed to address Transformers' computational inefficiency on long sequences, but have not performed as well as attention on important modalities such as language. We identify that a key weakness of such models is their inability to perform content-based reasoning, and propose a selection mechanism to address this. The resulting architecture, Mamba, achieves Transformer-quality performance while scaling linearly in sequence length.",
    note: "对 Transformer 二次复杂度的有力挑战。Selective SSM 的核心创新是让矩阵参数随输入内容动态变化（selective），既保留了 RNN 推理高效的优点，又实现了内容感知的长距离依赖。是 2024 年最值得关注的架构方向之一。",
    pdf: "https://arxiv.org/abs/2312.00752",
    code: "https://github.com/state-spaces/mamba",
    accent: "#0E7490"
  }
  // ↑ 在这里继续添加新论文，记得在上一条末尾加逗号 ","
];


// =============================================================
//  🎨  TAG_COLORS — 标签颜色映射
//
//  如果你在 tagLabels 里用了新标签，在这里加上对应的颜色。
//  格式："标签名": "#十六进制颜色",
// =============================================================

const TAG_COLORS = {
  "NLP":                 "#1B3F7F",
  "机器学习":             "#1B3F7F",
  "Transformer":         "#3B6CC7",
  "LLM":                 "#6D28D9",
  "大语言模型":           "#6D28D9",
  "GPT":                 "#7C3AED",
  "In-Context Learning": "#5B21B6",
  "计算机视觉":           "#047857",
  "Vision Transformer":  "#047857",
  "图像分类":             "#059669",
  "扩散模型":             "#B91C1C",
  "生成模型":             "#DC2626",
  "高效微调":             "#B45309",
  "PEFT":                "#D97706",
  "SSM":                 "#0E7490",
  "序列建模":             "#0891B2",
  "高效推理":             "#06B6D4",
  // ↑ 新增标签颜色在这里加
};
