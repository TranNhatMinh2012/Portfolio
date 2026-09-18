import React from 'react';
import { Project } from '../types/portfolio';

interface ProjectVisualProps {
  project: Project;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  // =========================================================================
  // Project 01: Visual Question Answering on Vehicles
  // Exhibition Pipeline: IMAGE → YOLOv8 → VISUAL FEATURES → BERT/LSTM → ATTENTION → SEQ2SEQ → ANSWER
  // =========================================================================
  if (project.id === 'vqa-vehicles') {
    return (
      <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#FDFDFD] dark:bg-[#111113] p-6 sm:p-8 font-mono text-xs overflow-hidden">
        {/* Exhibition Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
              MULTIMODAL AI PIPELINE
            </span>
          </div>
          <span className="hidden sm:inline">PROPOSALS → TENSORS → ATTENTION</span>
        </div>

        {/* Visual Architecture Composition */}
        <div className="space-y-6">
          {/* Top: Dual-stream input representation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Visual Stream */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                <span>01 // VISION STREAM</span>
                <span>YOLOv8 + RESNET</span>
              </div>
              <div className="h-28 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-2 flex flex-col justify-between relative">
                {/* Simulated bounding box */}
                <div className="absolute top-3 left-4 w-28 h-16 rounded border border-blue-500 bg-blue-500/10 p-1">
                  <span className="text-[9px] text-blue-600 dark:text-blue-400 font-bold block">VEHICLE [0.94]</span>
                  <span className="text-[8px] text-zinc-400 block font-mono">x:124 y:88 w:340 h:210</span>
                </div>
                <div className="self-end text-[10px] text-zinc-400 font-sans mt-auto">
                  Spatial feature map: <span className="font-mono text-zinc-700 dark:text-zinc-300">2048-dim</span>
                </div>
              </div>
            </div>

            {/* Language Stream */}
            <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-2.5">
              <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
                <span>02 // LANGUAGE STREAM</span>
                <span>BERT + BI-LSTM</span>
              </div>
              <div className="h-28 rounded border border-dashed border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 p-2.5 flex flex-col justify-center space-y-2">
                <span className="text-[10px] text-zinc-400">Natural-Language Query:</span>
                <div className="text-xs font-sans text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/60 px-2.5 py-1.5 rounded">
                  "What is the color and model type of the vehicle?"
                </div>
                <div className="text-[9px] text-zinc-400 flex items-center gap-1">
                  <span>Tokens:</span>
                  <span className="text-zinc-600 dark:text-zinc-300">['what', 'color', 'model', 'vehicle']</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Multimodal Cross-Attention Alignment */}
          <div className="p-4 rounded-lg border border-blue-500/30 bg-blue-500/[0.03] dark:bg-blue-500/[0.05] space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                CROSS-MODAL ATTENTION FUSION
              </span>
              <span className="text-zinc-400 text-[10px]">PyTorch Custom Module</span>
            </div>
            <div className="font-sans text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
              Aligns extracted visual region coordinates with question token vectors, projecting localized spatial context directly into the Seq2Seq decoder.
            </div>
          </div>

          {/* Bottom: Sequence Output */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-[11px]">
            <span className="text-zinc-400">PREDICTED ANSWER:</span>
            <span className="font-bold text-zinc-900 dark:text-zinc-100 font-sans">
              "Black sedan vehicle located in primary bounding lane"
            </span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 02: Smart Retail Recommendation System
  // Data Relationship Artwork / Network Map:
  // TRANSACTION BASKET → CO-OCCURRENCE → DRIVER / FOLLOWER → TF-IDF → LLM RE-RANKING
  // =========================================================================
  if (project.id === 'smart-retail-recommendation') {
    return (
      <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#FDFDFD] dark:bg-[#111113] p-6 sm:p-8 font-mono text-xs overflow-hidden">
        {/* Exhibition Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
              DATA RELATIONSHIP MAP
            </span>
          </div>
          <span className="hidden sm:inline">CO-OCCURRENCE & RE-RANKING</span>
        </div>

        {/* Data Map Visual */}
        <div className="space-y-6">
          {/* Affinity Flow */}
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-4">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
              <span>BASKET CO-OCCURRENCE GRAPH</span>
              <span>AFFINITY SCORE MATRIX</span>
            </div>

            {/* Relationship Nodes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Driver Node */}
              <div className="p-3 rounded border border-blue-500/50 bg-blue-50/50 dark:bg-blue-950/20">
                <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase">DRIVER PRODUCT</div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs mt-1">Ground Coffee (Arabica)</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Primary Shopping Intent</div>
              </div>

              {/* Follower Candidate 1 */}
              <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-zinc-400 uppercase">FOLLOWER #1</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">0.89</span>
                </div>
                <div className="font-medium text-zinc-800 dark:text-zinc-200 text-xs mt-1">Paper Filter Pack</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">High Statistical Co-occurrence</div>
              </div>

              {/* Follower Candidate 2 */}
              <div className="p-3 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-zinc-400 uppercase">FOLLOWER #2</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">0.74</span>
                </div>
                <div className="font-medium text-zinc-800 dark:text-zinc-200 text-xs mt-1">Oat Milk 1L</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Complementary Affinity</div>
              </div>
            </div>
          </div>

          {/* LLM Re-Ranking Layer */}
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
                CONTEXTUAL RE-RANKING (GEMINI API)
              </span>
              <span className="text-zinc-400 text-[10px]">Catalogue Diversity & Novelty</span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed text-justify">
              Balances cold numerical co-occurrence rules with natural-language context, generating concise recommendation explanations for end shoppers.
            </p>
          </div>

          {/* Mathematical Anchor */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Formula: Jaccard / Co-occurrence Affinity</span>
            <span className="font-mono text-zinc-800 dark:text-zinc-200">S_ij = |T_i ∩ T_j| / |T_i ∪ T_j|</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 03: Distributed Data Mining with PySpark
  // Algorithmic / Data-Art Composition:
  // UNSTRUCTURED TEXT → K-SHINGLING → JACCARD DISTANCE → PRIORITY QUEUE → AGGLOMERATIVE CLUSTERING
  // =========================================================================
  if (project.id === 'distributed-pyspark-mining') {
    return (
      <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#FDFDFD] dark:bg-[#111113] p-6 sm:p-8 font-mono text-xs overflow-hidden">
        {/* Exhibition Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
              DISTRIBUTED DENDROGRAM FLOW
            </span>
          </div>
          <span className="hidden sm:inline">SPARK RDD PARTITIONS</span>
        </div>

        {/* Dendrogram Tree Diagram */}
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-4">
            <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-wider">
              <span>HIERARCHICAL AGGLOMERATIVE MERGES</span>
              <span>MIN-HEAP PRIORITY QUEUE</span>
            </div>

            {/* Tree Branch Diagram */}
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-3">
                <span className="w-20 text-zinc-400">Cluster 01:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">[Doc_04, Doc_19]</span>
                <span className="text-zinc-400 text-[10px]">Δd = 0.082 (Jaccard similarity 0.918)</span>
              </div>
              <div className="w-full h-px bg-zinc-200 dark:border-zinc-800 ml-4" />
              <div className="flex items-center gap-3">
                <span className="w-20 text-zinc-400">Cluster 02:</span>
                <span className="text-zinc-800 dark:text-zinc-200 font-semibold">[Doc_02, Doc_11]</span>
                <span className="text-zinc-400 text-[10px]">Δd = 0.124 (Jaccard similarity 0.876)</span>
              </div>
              <div className="w-full h-px bg-zinc-200 dark:border-zinc-800 ml-4" />
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                <span className="w-20 font-bold">Merge [1, 2]:</span>
                <span className="font-bold">Merged Meta-Cluster [[04,19], [02,11]]</span>
                <span className="text-[10px] opacity-80">Threshold Convergence</span>
              </div>
            </div>
          </div>

          {/* Spark Execution Architecture */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
            <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="text-zinc-400">STEP 01</div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">K-Shingling</div>
            </div>
            <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="text-zinc-400">STEP 02</div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Jaccard Matrix</div>
            </div>
            <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="text-zinc-400">STEP 03</div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Min-Heap</div>
            </div>
            <div className="p-2.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="text-zinc-400">STEP 04</div>
              <div className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">Clustering</div>
            </div>
          </div>

          {/* Bottom Metric */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Scale: Distributed Memory Partitions</span>
            <span className="font-mono text-zinc-800 dark:text-zinc-200">Broadcast Variables & RDD Trans</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 04: Vietnamese–English Neural Machine Translation
  // Research Attention Alignment Heatmap Matrix:
  // VIETNAMESE → LSTM ENCODER → GLOBAL ATTENTION → LSTM DECODER → ENGLISH
  // =========================================================================
  if (project.id === 'vietnamese-english-nmt') {
    const viTokens = ['Trí', 'tuệ', 'nhân', 'tạo'];
    const enTokens = ['Artificial', 'intelligence', 'system', 'model'];
    const matrix = [
      [0.92, 0.05, 0.02, 0.01],
      [0.06, 0.94, 0.01, 0.01],
      [0.78, 0.12, 0.08, 0.02],
      [0.15, 0.81, 0.02, 0.02]
    ];

    return (
      <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#FDFDFD] dark:bg-[#111113] p-6 sm:p-8 font-mono text-xs overflow-hidden">
        {/* Exhibition Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
              ATTENTION ALIGNMENT MATRIX
            </span>
          </div>
          <span className="hidden sm:inline">CROSS-LINGUAL TOKEN HEATMAP</span>
        </div>

        {/* Heatmap Grid Composition */}
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40">
            {/* Column Headers (English Target Tokens) */}
            <div className="grid grid-cols-5 gap-2 mb-2 text-center text-[10px] text-zinc-400 uppercase">
              <div>SRC \ TGT</div>
              {enTokens.map((en) => (
                <div key={en} className="truncate font-semibold text-zinc-700 dark:text-zinc-300">
                  {en}
                </div>
              ))}
            </div>

            {/* Rows (Vietnamese Source Tokens) */}
            <div className="space-y-2">
              {viTokens.map((vi, rowIdx) => (
                <div key={vi} className="grid grid-cols-5 gap-2 items-center text-center">
                  <span className="text-left font-semibold text-zinc-900 dark:text-zinc-100 text-xs">
                    {vi}
                  </span>
                  {matrix[rowIdx].map((weight, colIdx) => {
                    const isHigh = weight > 0.5;
                    return (
                      <div
                        key={colIdx}
                        className={`py-2 px-1 rounded border text-[11px] transition-colors ${
                          isHigh
                            ? 'border-blue-500 bg-blue-600 text-white font-bold shadow-sm'
                            : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-400'
                        }`}
                      >
                        {weight.toFixed(2)}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Research Equation Anchor */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-500 dark:text-zinc-400">
            <span>Global Attention Alignment:</span>
            <span className="font-mono text-zinc-800 dark:text-zinc-200">α_ij = exp(score(h_i, h_j)) / Σ_k exp(score)</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 05: Graduate_Vi (Digital Web Artifact / Browser Composition)
  // =========================================================================
  return (
    <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-[#FDFDFD] dark:bg-[#111113] p-6 sm:p-8 font-mono text-xs overflow-hidden">
      {/* Exhibition Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] text-zinc-400 dark:text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
          <span className="font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">
            WEB ARCHITECTURE ARTIFACT
          </span>
        </div>
        <span className="hidden sm:inline">HTML5 · CSS3 · JAVASCRIPT</span>
      </div>

      {/* Browser Window Frame */}
      <div className="rounded-lg border border-zinc-300/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-950 shadow-sm overflow-hidden">
        {/* Browser Top Bar */}
        <div className="px-3.5 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="font-mono text-[10px] text-zinc-400 bg-white dark:bg-zinc-950 px-3 py-0.5 rounded border border-zinc-200 dark:border-zinc-800">
            https://trannhatminh2012.github.io/Graduate_Vi/
          </div>
          <span className="text-[10px] text-zinc-400">PORTAL</span>
        </div>

        {/* Content Body Preview */}
        <div className="p-5 space-y-4 font-sans">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2.5 font-mono text-xs">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">
              Interactive Commemorative Web Application
            </span>
            <span className="text-zinc-400 text-[10px]">Client-side Single Page System</span>
          </div>

          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed text-justify">
            A bespoke personal celebratory web experience engineered with semantic HTML5, responsive CSS3 grid systems, and custom vanilla JavaScript DOM interactions.
          </p>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
            {['can-cu.html', 'ki-niem.html', 'loi-chuc.html', 'quyet-dinh.html'].map((page) => (
              <span
                key={page}
                className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {page}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
