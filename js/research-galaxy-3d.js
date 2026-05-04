(function () {
  function initResearchGalaxy() {
    const container = document.getElementById("research-galaxy-3d");

    if (!container) {
      console.error("[Research Galaxy] container #research-galaxy-3d not found");
      return;
    }

    document.body.classList.add("research-galaxy-theme");

    if (typeof ForceGraph3D === "undefined") {
      console.error("[Research Galaxy] ForceGraph3D not loaded. Please check CDN script in index.md.");
      return;
    }

    console.log("[Research Galaxy] init");

    const nodeInfo = {
      galaxy: {
        name: "Galaxy Lab",
        group: "core",
        val: 36,
        category: "Core System",
        status: "Building",
        desc: "Galaxy Lab 是我的个人数字实验室，连接 AI、生信、蛋白质组学和网页交互系统。",
        tags: ["AI", "Bioinformatics", "Proteomics", "Digital Lab"],
        link: "/"
      },

      ai: {
        name: "Medical AI",
        group: "direction",
        val: 18,
        category: "Research Direction",
        status: "Exploring",
        desc: "医学智能方向关注多模态医学数据、医学图像理解、AI Agent 与科研辅助系统。",
        tags: ["Medical Imaging", "Multimodal", "AI Agent"],
        link: "/projects/#medical-ai-agent"
      },

      bio: {
        name: "Bioinformatics",
        group: "direction",
        val: 18,
        category: "Research Direction",
        status: "Active",
        desc: "生信方向主要围绕序列分析、motif 可视化、差异模式识别与科研流程自动化。",
        tags: ["Sequence", "Motif", "Visualization"],
        link: "/projects/#bioinformatics"
      },

      proteomics: {
        name: "Proteomics",
        group: "direction",
        val: 18,
        category: "Research Direction",
        status: "Active",
        desc: "蛋白质组学模型方向聚焦 PSM 重打分、Transformer 结构、loss 设计与测试集评估风险控制。",
        tags: ["PSM", "Transformer", "Rescoring"],
        link: "/projects/#psm-rescoring"
      },

      virtual: {
        name: "Virtual Lab",
        group: "direction",
        val: 18,
        category: "Interface System",
        status: "Online",
        desc: "虚拟实验室方向把 Live2D、PixiJS、网页交互和个人主页结合，构建具有陪伴感的科研入口。",
        tags: ["Live2D", "PixiJS", "WebGL"],
        link: "/projects/#digital-lab"
      },

      medicalAgent: {
        name: "Medical Imaging AI Agent",
        group: "project",
        val: 9,
        category: "Project Idea",
        status: "Planning",
        desc: "面向医学影像和临床推理的 AI Agent 设想，用于连接多模态数据、模型推理与解释输出。",
        tags: ["Agent", "Medical AI", "Diagnosis"],
        link: "/projects/#medical-ai-agent"
      },

      multimodal: {
        name: "Multimodal Diagnosis",
        group: "topic",
        val: 8,
        category: "Topic",
        status: "Exploring",
        desc: "多模态诊断关注图像、文本、结构化数据之间的信息融合。",
        tags: ["Multimodal", "Fusion", "Healthcare"],
        link: "/projects/#medical-ai"
      },

      llm: {
        name: "LLM Assistant",
        group: "tool",
        val: 8,
        category: "Tooling",
        status: "Future",
        desc: "大语言模型助手可以作为科研笔记、网页导航和实验解释的交互入口。",
        tags: ["LLM", "Assistant", "Research Tool"],
        link: "/projects/#medical-ai-agent"
      },

      logo: {
        name: "Two-Sample Logo",
        group: "article",
        val: 9,
        category: "Article / Tool",
        status: "Done",
        desc: "Two-Sample Logo 用于比较前景序列和背景序列在 motif 上的差异，是当前生信可视化的重要实验记录。",
        tags: ["Logo", "Motif", "R", "Python"],
        link: "/2026/04/28/Two-Sample-Logo-Analysis/"
      },

      airwayRnaseq: {
  	name: "Airway Dexamethasone RNA-seq",
  	group: "project",
  	val: 10,
  	category: "Bioinformatics Project",
 	status: "Completed",
  	desc: "基于 airway RNA-seq 数据集，使用 DESeq2 分析 dexamethasone 处理对人气道平滑肌细胞基因表达的影响，并结合 GO / KEGG 进行功能解释。",
  	tags: ["RNA-seq", "DESeq2", "GO", "KEGG"],
  	link: "/projects/airway-dexamethasone-rnaseq/"
      },

      motif: {
        name: "Motif Analysis",
        group: "topic",
        val: 8,
        category: "Topic",
        status: "Active",
        desc: "Motif 分析用于寻找序列中显著富集或缺失的模式，适合与可视化工具结合。",
        tags: ["Motif", "Sequence", "Statistics"],
        link: "/notes/"
      },

      sequence: {
        name: "Sequence Visualization",
        group: "topic",
        val: 8,
        category: "Topic",
        status: "Active",
        desc: "序列可视化方向关注如何把生物序列中的差异、保守性和富集位置直观展示出来。",
        tags: ["Sequence", "Visualization", "Bioinformatics"],
        link: "/2026/04/28/Two-Sample-Logo-Analysis/"
      },

      psm: {
        name: "PSM Rescoring",
        group: "project",
        val: 9,
        category: "Model Project",
        status: "Active",
        desc: "PSM 重打分是蛋白质组学模型优化主线之一，用深度学习改进谱图匹配结果的排序。",
        tags: ["PSM", "Proteomics", "Rescoring"],
        link: "/projects/#psm-rescoring"
      },

      transformer: {
        name: "Transformer for PSM",
        group: "model",
        val: 8,
        category: "Model Architecture",
        status: "Experimenting",
        desc: "Transformer 用于建模 PSM 或相关质谱特征之间的复杂关系，是当前模型优化重点。",
        tags: ["Transformer", "Deep Learning", "Proteomics"],
        link: "/projects/#psm-rescoring"
      },

      loss: {
        name: "Loss Design",
        group: "model",
        val: 8,
        category: "Model Optimization",
        status: "Active",
        desc: "Loss 设计包括 mask_loss、dda_loss 等组合方式，直接影响模型对目标任务和辅助约束的学习偏好。",
        tags: ["mask_loss", "dda_loss", "Optimization"],
        link: "/projects/#psm-rescoring"
      },

      live2d: {
        name: "Live2D Interface",
        group: "frontend",
        val: 8,
        category: "Frontend System",
        status: "Online",
        desc: "Live2D 是虚拟实验室角色的视觉核心，用于增强主页的交互感和个人辨识度。",
        tags: ["Live2D", "Cubism", "Interaction"],
        link: "/projects/#kewei-6"
      },

      pixijs: {
        name: "PixiJS Renderer",
        group: "frontend",
        val: 8,
        category: "Frontend System",
        status: "Online",
        desc: "PixiJS 负责网页端 2D 渲染，是 Live2D 模型在页面中稳定运行的重要基础。",
        tags: ["PixiJS", "Canvas", "WebGL"],
        link: "/projects/#kewei-6"
      },

      kewei: {
        name: "Kewei_6 Assistant",
        group: "assistant",
        val: 9,
        category: "Virtual Assistant",
        status: "Online",
        desc: "Kewei_6 是 Galaxy Lab 的虚拟向导，未来可以从装饰角色升级为站内导航与科研解释助手。",
        tags: ["Kewei_6", "Assistant", "Galaxy Lab"],
        link: "/projects/#kewei-6"
      }
    };

    const nodes = Object.keys(nodeInfo).map(id => ({
      id,
      ...nodeInfo[id],
      fx: id === "galaxy" ? 0 : undefined,
      fy: id === "galaxy" ? 0 : undefined,
      fz: id === "galaxy" ? 0 : undefined
    }));

    const links = [
      { source: "galaxy", target: "ai", type: "core" },
      { source: "galaxy", target: "bio", type: "core" },
      { source: "galaxy", target: "proteomics", type: "core" },
      { source: "galaxy", target: "virtual", type: "core" },

      { source: "ai", target: "medicalAgent" },
      { source: "ai", target: "multimodal" },
      { source: "ai", target: "llm" },

      { source: "bio", target: "logo" },
      { source: "bio", target: "motif" },
      { source: "bio", target: "sequence" },

      { source: "proteomics", target: "psm" },
      { source: "proteomics", target: "transformer" },
      { source: "proteomics", target: "loss" },

      { source: "virtual", target: "live2d" },
      { source: "virtual", target: "pixijs" },
      { source: "virtual", target: "kewei" },

      { source: "logo", target: "motif" },
      { source: "psm", target: "transformer" },
      { source: "transformer", target: "loss" },
      { source: "kewei", target: "llm" },

      { source: "bio", target: "airwayRnaseq" },
      { source: "airwayRnaseq", target: "logo" }
    ];

    const colorMap = {
      core: "#fff2a8",
      direction: "#73d7ff",
      project: "#5eead4",
      article: "#f0abfc",
      topic: "#a78bfa",
      model: "#fbbf24",
      frontend: "#60a5fa",
      assistant: "#fb7185",
      tool: "#c4b5fd"
    };

    function updatePanel(node) {
      const title = document.getElementById("rg3d-title");
      const desc = document.getElementById("rg3d-desc");
      const category = document.getElementById("rg3d-category");
      const status = document.getElementById("rg3d-status");
      const tags = document.getElementById("rg3d-tags");
      const link = document.getElementById("rg3d-link");

      if (title) title.textContent = node.name || "Galaxy Lab";
      if (desc) desc.textContent = node.desc || "";
      if (category) category.textContent = node.category || "";
      if (status) status.textContent = node.status || "";

      if (tags) {
        tags.innerHTML = "";

        (node.tags || []).forEach(tag => {
          const span = document.createElement("span");
          span.textContent = tag;
          tags.appendChild(span);
        });
      }

      if (link) {
        link.href = node.link || "/";
      }
    }

    if (!container.style.height) {
      container.style.height = "720px";
    }

    const graph = ForceGraph3D()(container)
      .graphData({ nodes, links })
      .backgroundColor("rgba(0,0,0,0)")
      .nodeId("id")

      .nodeLabel(node => {
        return `
          <div style="
            padding: 8px 10px;
            border-radius: 10px;
            background: rgba(6, 10, 24, 0.92);
            border: 1px solid rgba(115, 215, 255, 0.35);
            color: #ffffff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          ">
            <div style="font-weight: 800; margin-bottom: 4px;">${node.name}</div>
            <div style="color: #9ee7ff; font-size: 12px;">${node.category}</div>
            <div style="
              color: rgba(255,255,255,0.72);
              font-size: 12px;
              margin-top: 4px;
              max-width: 220px;
              line-height: 1.5;
            ">
              ${node.desc}
            </div>
          </div>
        `;
      })

      .nodeVal(node => {
        if (node.id === "galaxy") return 36;
        if (node.group === "direction") return 18;
        return node.val || 8;
      })

      /* 关键修复：放大节点球体 */
      .nodeRelSize(7)

      .nodeColor(node => {
        if (node.id === "galaxy") return "#fff2a8";
        return colorMap[node.group] || "#73d7ff";
      })

      /* 关键修复：这里必须用固定数值，不要传函数 */
      .nodeOpacity(0.96)

      .linkColor(link => {
        if (link.type === "core") return "rgba(255, 242, 168, 0.82)";
        return "rgba(115, 215, 255, 0.42)";
      })

      /* 关键修复：linkOpacity 也用固定值，避免兼容问题 */
      .linkOpacity(0.58)

      .linkWidth(link => {
        if (link.type === "core") return 2.2;
        return 1.15;
      })

      .linkDirectionalParticles(link => {
        if (link.type === "core") return 4;
        return 2;
      })

      .linkDirectionalParticleWidth(link => {
        if (link.type === "core") return 2.2;
        return 1.4;
      })

      .linkDirectionalParticleSpeed(link => {
        if (link.type === "core") return 0.006;
        return 0.004;
      })

      .showNavInfo(false)

      .onNodeClick(node => {
        updatePanel(node);

        const distance = node.id === "galaxy" ? 190 : 145;
        const x = node.x || 0;
        const y = node.y || 0;
        const z = node.z || 0;
        const length = Math.hypot(x, y, z) || 1;
        const distRatio = 1 + distance / length;

        graph.cameraPosition(
          {
            x: x * distRatio,
            y: y * distRatio,
            z: z * distRatio
          },
          node,
          1200
        );
      })

      .onNodeHover(node => {
        container.style.cursor = node ? "pointer" : "grab";
      });

    graph.d3Force("charge").strength(node => {
      if (node && node.id === "galaxy") return -70;
      if (node && node.group === "direction") return -210;
      return -150;
    });

    graph.d3Force("link").distance(link => {
      if (link.type === "core") return 125;
      return 88;
    });

    const controls = graph.controls();

    if (controls) {
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;

      if (window.innerWidth < 768) {
        controls.autoRotate = false;
      }
    }

    updatePanel(nodeInfo.galaxy);

    function resizeGraph() {
      const width = container.clientWidth || 900;
      const height = container.clientHeight || 720;
      graph.width(width).height(height);
    }

    window.addEventListener("resize", resizeGraph);
    resizeGraph();

    setTimeout(() => {
      graph.cameraPosition(
        { x: 0, y: 0, z: 420 },
        { x: 0, y: 0, z: 0 },
        1000
      );
    }, 500);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initResearchGalaxy);
  } else {
    initResearchGalaxy();
  }
})();