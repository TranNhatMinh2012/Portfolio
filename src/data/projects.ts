import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "vqa-vehicles",
    number: "01",
    title: "Visual Question Answering on Vehicles",
    category: "AI / Multimodal Deep Learning",
    role: "AI Engineer",
    shortDescription: "A multimodal deep learning system designed to answer natural-language questions about vehicle images.",
    technologies: [
      "PyTorch",
      "YOLOv8",
      "Gemini API",
      "ResNet",
      "BERT",
      "LSTM",
      "Seq2Seq",
      "Attention",
      "Python"
    ],
    highlights: [
      "Built a dataset-generation pipeline using YOLOv8 bounding proposals and Gemini API question-answer synthesis",
      "Connected computer vision outputs with natural-language question-answer data",
      "Worked with visual feature extraction using ResNet convolutional backbones",
      "Explored language modeling using BERT and LSTM-based architectures",
      "Implemented Seq2Seq architectures with cross-modal attention mechanisms",
      "Used multithreading to improve batch preprocessing efficiency"
    ],
    githubUrl: "https://github.com/TranNhatMinh2012/deeplearning-midterm/tree/main",
    caseStudy: {
      overview: "Visual Question Answering (VQA) requires connecting computer vision representations with natural language modeling to interpret vehicle images and produce coherent answers to specific questions.",
      problem: "Standard unimodal models cannot synthesize spatial vehicle attributes with natural-language queries. Acquiring labeled domain-specific image-QA pairs is also a manual bottleneck.",
      approach: "Formulated a multimodal workflow: automated question-answer pair synthesis combining YOLOv8 proposals with Gemini API, visual feature extraction via ResNet, sequence modeling via LSTM/BERT, and cross-modal attention to align visual regions with target words.",
      architectureDiagram: [
        { label: "Vehicle Image Input", detail: "Vehicle photography" },
        { label: "YOLOv8 Proposals", detail: "Object bounding detection" },
        { label: "ResNet Backbone", detail: "Visual feature tensor extraction" },
        { label: "Gemini API Pipeline", detail: "Question-answer synthesis" },
        { label: "Language Modeling (LSTM / BERT)", detail: "Text tokenization & sequence encoding" },
        { label: "Multimodal Attention Fusion", detail: "Alignment between visual & textual tokens", isAccent: true },
        { label: "Seq2Seq Decoder", detail: "Answer token generation" }
      ],
      implementationPoints: [
        "Built automated dataset generation scripts interfacing YOLOv8 object detections with Gemini API prompts",
        "Used ResNet feature extractors to isolate vehicle attributes into dense visual feature tensors",
        "Explored comparative linguistic representations utilizing recurrent LSTM encoders and BERT embeddings",
        "Implemented custom PyTorch Seq2Seq decoder modules with attention weighting to align visual regions with target tokens",
        "Applied multithreaded preprocessing routines to streamline batch multimodal feature extraction"
      ],
      keyTakeaways: [
        "Attention mechanisms provide interpretability by showing which image regions influence specific output tokens",
        "Coupling localized object detection with LLM prompting is an effective strategy for domain-specific QA synthesis",
        "Multimodal alignment requires balanced scaling between visual tensors and textual representations"
      ]
    }
  },
  {
    id: "smart-retail-recommendation",
    number: "02",
    title: "Smart Retail Recommendation System with LLM Integration",
    category: "Recommendation Systems / AI",
    role: "Data Scientist",
    shortDescription: "A retail recommendation system designed around transaction patterns, product relationships, and LLM-based re-ranking.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "TF-IDF",
      "Gemini API"
    ],
    highlights: [
      "Analyzed transaction patterns to identify Driver and Follower product relationships",
      "Used product co-occurrence to model product affinities",
      "Applied TF-IDF and similarity-based methods for recommendation retrieval",
      "Developed a hybrid recommendation pipeline combining statistical rules with Gemini API re-ranking",
      "Evaluated recommendation quality using Diversity and Novelty concepts"
    ],
    githubUrl: "https://github.com/TranNhatMinh2012/DACNTT",
    caseStudy: {
      overview: "Retail recommendation systems benefit from modeling complementary companion items across customer baskets rather than relying solely on popularity rankings.",
      problem: "Standard collaborative filters often favor top-selling items and struggle to explain recommendation rationale or balance catalogue diversity with complementary pairings.",
      approach: "Engineered a three-stage pipeline: (1) Data processing and transaction co-occurrence modeling to identify Driver and Follower items; (2) Traditional TF-IDF similarity filtering for candidate retrieval; (3) Gemini API integration for contextual candidate re-ranking and explanation.",
      architectureDiagram: [
        { label: "Transaction Data Input", detail: "Customer checkout baskets" },
        { label: "Data Processing & Stats", detail: "Cleaning and frequency analysis" },
        { label: "Co-occurrence Modeling", detail: "Driver and Follower product mapping" },
        { label: "TF-IDF Similarity Engine", detail: "Catalogue attribute vectorization" },
        { label: "Hybrid Candidate Fusion", detail: "Candidate pool retrieval", isAccent: true },
        { label: "Gemini API Re-Ranking", detail: "Context-aware re-ordering & purchase justification" },
        { label: "Evaluation", detail: "Diversity and Novelty assessment" }
      ],
      implementationPoints: [
        "Processed retail transaction records with Pandas to normalize IDs and construct basket matrices",
        "Calculated item co-occurrence frequencies to identify leader products that trigger companion purchases",
        "Applied TF-IDF vectorization on product metadata to compute content-based similarity scores",
        "Integrated Gemini API to evaluate candidate sets and generate conversational purchase rationale",
        "Evaluated recommendation candidate sets using conceptual Diversity and Novelty metrics"
      ],
      keyTakeaways: [
        "Separating statistical candidate generation from LLM re-ranking creates a practical, modular workflow",
        "Driver-Follower modeling reflects realistic shopping basket paths more accurately than symmetric correlation",
        "LLMs add valuable semantic reasoning when re-ranking a focused candidate pool"
      ]
    }
  },
  {
    id: "distributed-pyspark-mining",
    number: "03",
    title: "Distributed Data Mining with PySpark",
    category: "Big Data / Data Engineering",
    role: "Data Engineer",
    shortDescription: "A distributed data mining project focused on large-scale text processing, document similarity, and clustering.",
    technologies: [
      "PySpark",
      "Python",
      "Agglomerative Clustering",
      "K-Shingling",
      "Jaccard Distance",
      "Priority Queue",
      "Min-Heap"
    ],
    highlights: [
      "Implemented Agglomerative Hierarchical Clustering for high-dimensional text analysis",
      "Applied K-Shingling to represent documents as token sets",
      "Used Jaccard Distance for document similarity calculation",
      "Used Priority Queue / Min-Heap for efficient candidate pair handling",
      "Designed the workflow around distributed processing with PySpark",
      "Focused on scalable document grouping and text clustering"
    ],
    githubUrl: "https://github.com/pino2704/mining-massive-datasets-endterm.git",
    caseStudy: {
      overview: "Hierarchical clustering on large document collections involves heavy pairwise distance calculations, making distributed algorithms and memory-efficient data structures essential.",
      problem: "All-pairs similarity comparisons create computational bottlenecks when scaling to larger text datasets, requiring efficient set representations and priority queues.",
      approach: "Implemented a distributed pipeline using K-Shingling for set representation, pairwise Jaccard distance calculation via PySpark transformations, and Min-Heap priority queues to track the closest merge pairs iteratively.",
      architectureDiagram: [
        { label: "Raw Document Corpus", detail: "Unstructured text collection" },
        { label: "K-Shingling", detail: "Conversion of text to k-length token sets" },
        { label: "Pairwise Jaccard Distance", detail: "Distributed set similarity via PySpark RDD" },
        { label: "Min-Heap / Priority Queue", detail: "Tracking closest candidate merge pairs", isAccent: true },
        { label: "Agglomerative Loop", detail: "Iterative cluster grouping and linkage recalculation" },
        { label: "Dendrogram Hierarchy", detail: "Clustered document partitions" }
      ],
      implementationPoints: [
        "Constructed PySpark transformations to extract character k-shingles from text records",
        "Implemented pairwise Jaccard distance calculations across distributed Spark partitions",
        "Utilized Python heapq priority queues to maintain top-similarity candidate pairs in memory",
        "Handled cluster merge updates iteratively while tracking cluster linkages",
        "Accounted for sparse overlap cases and varying document lengths"
      ],
      keyTakeaways: [
        "K-Shingling length directly influences the granularity of document similarity matching",
        "Combining distributed transformations with localized min-heap queues manages memory usage during iterative merges",
        "Partitioning strategy is key when computing pairwise text similarities with Spark"
      ]
    }
  },
  {
    id: "vietnamese-english-nmt",
    number: "04",
    title: "Vietnamese–English Neural Machine Translation",
    category: "Natural Language Processing / Deep Learning",
    role: "ML Engineer",
    shortDescription: "A neural machine translation project exploring sequence-to-sequence architectures for Vietnamese–English translation.",
    technologies: [
      "PyTorch",
      "Seq2Seq",
      "LSTM",
      "Attention",
      "Global Attention",
      "Tokenization",
      "Python"
    ],
    highlights: [
      "Built a Seq2Seq neural machine translation architecture using LSTM in PyTorch",
      "Applied Luong-style Global Attention mechanisms to dynamically align source and target words",
      "Worked with tokenization and preprocessing for bilingual Vietnamese–English text",
      "Explored attention scoring functions (dot, general) to improve sequence modeling",
      "Formulated teacher forcing training routines with masked loss computation"
    ],
    githubUrl: "https://github.com/TranNhatMinh2012/natural-language-processing",
    caseStudy: {
      overview: "Translating between Vietnamese and English involves structural differences, diacritics, and variable sequence lengths that challenge basic recurrent neural networks.",
      problem: "Standard encoder-decoder networks compress the full source sentence into a single fixed vector, which causes information loss on longer sentences.",
      approach: "Implemented a sequence-to-sequence architecture with Global Attention, allowing the LSTM decoder to query all encoder hidden states and dynamically weight relevant source words during translation.",
      architectureDiagram: [
        { label: "Vietnamese Source Sentence", detail: "Bilingual input text" },
        { label: "Tokenization & Vocabulary", detail: "Preserving diacritics and special tokens" },
        { label: "Embedding Layer", detail: "Dense vector mappings" },
        { label: "Bidirectional LSTM Encoder", detail: "Context hidden state generation" },
        { label: "Global Attention Mechanism", detail: "Dynamic alignment between encoder & decoder states", isAccent: true },
        { label: "LSTM Decoder", detail: "Sequential target word generation" },
        { label: "English Output", detail: "Decoded translation sequence" }
      ],
      implementationPoints: [
        "Preprocessed bilingual text corpora with Unicode normalization to preserve Vietnamese tone marks",
        "Built custom PyTorch modules for LSTM encoder, attention scoring functions, and decoder steps",
        "Applied teacher forcing probability scheduling to stabilize model convergence during training",
        "Used padding masks to ensure loss and attention weights ignore synthetic padding tokens",
        "Implemented greedy decoding scripts to inspect translation outputs step-by-step"
      ],
      keyTakeaways: [
        "Global attention significantly mitigates information bottlenecks in fixed-vector Seq2Seq models",
        "Proper Unicode normalization is essential when tokenizing Vietnamese text with diacritics",
        "Masked loss computation prevents padding tokens from distorting optimization gradients"
      ]
    }
  },
  {
    id: "graduate-vi-interactive",
    number: "05",
    title: "Interactive Commemorative Web Application (Graduate_Vi)",
    category: "Frontend Engineering / Creative Web",
    role: "Frontend Developer",
    shortDescription: "A custom interactive celebratory web application built with responsive HTML5, CSS3, and JavaScript, featuring structured modular views.",
    technologies: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Layouts",
      "DOM Manipulation"
    ],
    highlights: [
      "Built a multi-page interactive web application featuring custom layouts and clean typography",
      "Implemented modular pages including letter delivery, memory timeline cards, and formal decision sheets",
      "Crafted responsive CSS stylesheets ensuring seamless presentation across desktop, tablet, and mobile",
      "Used vanilla JavaScript for dynamic UI state transitions and interactive modal triggers",
      "Deployed and verified live on GitHub Pages infrastructure"
    ],
    githubUrl: "https://github.com/TranNhatMinh2012/Graduate_Vi",
    caseStudy: {
      overview: "A personal creative frontend project built to deliver a customized digital graduation congratulatory website with tailored typography, interactive elements, and responsive styling.",
      problem: "Static templates lack personalized interactive storytelling and flexible layout control across different screen sizes.",
      approach: "Engineered a lightweight, dependency-free web project utilizing clean semantic HTML5 markup, pure CSS styling, and vanilla JavaScript DOM interactions.",
      architectureDiagram: [
        { label: "Semantic HTML5", detail: "Modular view files (can-cu, ki-niem, loi-chuc, quyet-dinh)" },
        { label: "Custom CSS", detail: "Responsive grids, fluid typography, clean spacing" },
        { label: "Vanilla JavaScript", detail: "Event listeners and interactive state changes", isAccent: true },
        { label: "GitHub Pages Hosting", detail: "Static zero-latency content delivery" }
      ],
      implementationPoints: [
        "Constructed modular HTML pages tailored for different content formats (letters, memories, formal decrees)",
        "Styled custom UI elements with pure CSS without third-party framework overhead",
        "Engineered smooth interaction triggers using vanilla JavaScript DOM manipulation",
        "Tested responsive viewports across mobile and desktop displays",
        "Deployed to GitHub Pages for static delivery"
      ],
      keyTakeaways: [
        "Pure HTML/CSS/JS offers zero-dependency simplicity, fast loading, and direct styling control",
        "Semantic markup provides a solid foundation for accessible, responsive digital layouts"
      ]
    }
  }
];
