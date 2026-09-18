import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import { Sparkles } from 'lucide-react';

interface ProjectVisualProps {
  project: Project;
}

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  // =========================================================================
  // Project 01: VQA on Vehicles (Visual Flow: Image -> Features -> Attention -> Language -> Answer)
  // =========================================================================
  if (project.id === 'vqa-vehicles') {
    const stages = [
      { id: 'image', title: '01. Input Image', desc: 'Vehicle photography with YOLOv8 bounding proposals' },
      { id: 'features', title: '02. Visual Features', desc: '2048-dim spatial feature maps via ResNet convolutional backbone' },
      { id: 'language', title: '03. Language Encoder', desc: 'Token sequence embeddings modeled via Bi-LSTM & BERT' },
      { id: 'attention', title: '04. Cross-Modal Attention', desc: 'Dynamic alignment between spatial vision regions and question tokens' },
      { id: 'answer', title: '05. Seq2Seq Decoder', desc: 'Coherent natural-language answer sequence prediction' }
    ];
    const [activeStage, setActiveStage] = useState(3); // Default on attention

    return (
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6 sm:p-8 font-mono">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/70 dark:border-zinc-800/70 text-xs text-zinc-400">
          <span className="uppercase tracking-widest font-semibold text-zinc-800 dark:text-zinc-200">
            ENGINEERING PIPELINE VISUALIZATION
          </span>
          <span>IMAGE → ATTENTION → ANSWER</span>
        </div>

        {/* Process Flow Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-6">
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-3 rounded-lg border text-left transition-all ${
                activeStage === idx
                  ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
              }`}
            >
              <div className="text-[10px] opacity-70">STAGE 0{idx + 1}</div>
              <div className="text-xs font-semibold mt-1 truncate">{stage.title.split('. ')[1]}</div>
            </button>
          ))}
        </div>

        {/* Detailed Stage Inspector */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            <span>{stages[activeStage].title}</span>
            <span className="text-zinc-400 text-[11px] font-normal">Active Stage Inspection</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            {stages[activeStage].desc}
          </p>
          <div className="pt-2 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Multimodal alignment resolves spatial context degradation.</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 02: Retail Recommendation (BASKET → DRIVER → AFFINITY → FOLLOWER → RE-RANK)
  // =========================================================================
  if (project.id === 'smart-retail-recommendation') {
    const flowSteps = [
      { step: 'BASKET', label: 'Multi-Item Transaction', detail: 'Historical customer purchasing logs & checkout baskets' },
      { step: 'DRIVER', label: 'Driver Product Identification', detail: 'Isolate primary trigger products initiating the shopping mission' },
      { step: 'AFFINITY', label: 'Co-occurrence & TF-IDF', detail: 'Statistical purchase correlation matrix + catalogue attribute similarity' },
      { step: 'FOLLOWER', label: 'Candidate Followers', detail: 'Retrieve high-affinity companion products for recommendation' },
      { step: 'RE-RANK', label: 'Gemini Contextual AI', detail: 'LLM reasoning balances catalog Novelty, Diversity, and basket synergy' }
    ];

    const [selectedStep, setSelectedStep] = useState(2);

    return (
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6 sm:p-8 font-mono">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/70 dark:border-zinc-800/70 text-xs text-zinc-400">
          <span className="uppercase tracking-widest font-semibold text-zinc-800 dark:text-zinc-200">
            HYBRID RECOMMENDATION ARCHITECTURE
          </span>
          <span>BASKET → AFFINITY → RE-RANK</span>
        </div>

        {/* Process Linear Flow */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6">
          {flowSteps.map((item, idx) => (
            <React.Fragment key={item.step}>
              <button
                type="button"
                onClick={() => setSelectedStep(idx)}
                className={`flex-1 p-3 rounded-lg border text-left transition-all ${
                  selectedStep === idx
                    ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                    : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
                }`}
              >
                <div className="text-[10px] opacity-70">0{idx + 1}</div>
                <div className="text-xs font-semibold mt-0.5">{item.step}</div>
              </button>
              {idx < flowSteps.length - 1 && (
                <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700 text-xs select-none">→</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Process Step Detail */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            <span>{flowSteps[selectedStep].label}</span>
            <span className="text-zinc-400 text-[11px] font-normal">Stage 0{selectedStep + 1}</span>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            {flowSteps[selectedStep].detail}
          </p>
          <div className="pt-2 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span>Structured workflow: Data Processing → Statistical Rules → LLM Contextual Re-Ranking.</span>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 03: PySpark (Clustering Evolving Dendrogram Process)
  // =========================================================================
  if (project.id === 'distributed-pyspark-mining') {
    const pipelineSteps = [
      { title: 'K-Shingling', desc: 'Decomposes documents into k-character token sets, preserving local context and order in high dimensions.' },
      { title: 'Pairwise Jaccard Distance', desc: 'Computes set intersection over union across Spark RDD partitions using broadcast variables.' },
      { title: 'Priority Queue (Min-Heap)', desc: 'Maintains top candidate merge pairs in O(1) time complexity without exploding executor memory.' },
      { title: 'Agglomerative Clustering', desc: 'Iteratively merges nearest clusters and recalculates distributed linkage until threshold convergence.' }
    ];
    const [activeIdx, setActiveIdx] = useState(2);

    return (
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6 sm:p-8 font-mono">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/70 dark:border-zinc-800/70 text-xs text-zinc-400">
          <span className="uppercase tracking-widest font-semibold text-zinc-800 dark:text-zinc-200">
            DISTRIBUTED CLUSTERING ALGORITHM
          </span>
          <span>SHINGLES → MIN-HEAP → DENDROGRAM</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {pipelineSteps.map((step, idx) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-lg border text-left transition-all ${
                activeIdx === idx
                  ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
              }`}
            >
              <div className="text-[10px] opacity-70">PHASE 0{idx + 1}</div>
              <div className="text-sm font-semibold mt-1">{step.title}</div>
            </button>
          ))}
        </div>

        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-2">
          <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {pipelineSteps[activeIdx].title}
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            {pipelineSteps[activeIdx].desc}
          </p>
          <div className="pt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
            Engineered for scalable text mining across distributed Spark cluster nodes.
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 04: Vietnamese-English NMT (Research Attention Matrix)
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
    const [selectedVi, setSelectedVi] = useState<number>(0);

    return (
      <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6 sm:p-8 font-mono">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/70 dark:border-zinc-800/70 text-xs text-zinc-400">
          <span className="uppercase tracking-widest font-semibold text-zinc-800 dark:text-zinc-200">
            SEQUENCE ATTENTION ALIGNMENT
          </span>
          <span>BILINGUAL RESEARCH HEATMAP</span>
        </div>

        {/* Source Tokens Selector */}
        <div className="mb-4">
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-2">
            Vietnamese Source Sequence (Encoder):
          </div>
          <div className="grid grid-cols-4 gap-2">
            {viTokens.map((tok, i) => (
              <button
                key={tok}
                type="button"
                onClick={() => setSelectedVi(i)}
                className={`py-2 px-3 rounded-lg border text-center text-xs font-semibold transition-all ${
                  selectedVi === i
                    ? 'border-zinc-900 dark:border-zinc-100 bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                    : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                }`}
              >
                {tok}
              </button>
            ))}
          </div>
        </div>

        {/* Alignment Weights Breakdown */}
        <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-2">
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mb-2">
            Target English Alignment Scores (Decoder):
          </div>
          <div className="space-y-2 text-xs">
            {enTokens.map((enTok, j) => {
              const weight = matrix[selectedVi][j];
              return (
                <div key={enTok} className="flex items-center justify-between">
                  <span className={`font-medium ${weight > 0.5 ? 'text-zinc-950 dark:text-zinc-50 font-bold' : 'text-zinc-500'}`}>
                    {enTok}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-28 bg-zinc-200 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-zinc-900 dark:bg-zinc-100 h-full transition-all duration-300"
                        style={{ width: `${weight * 100}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs w-10 text-right font-semibold">
                      {weight.toFixed(2)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // Project 05: Graduate_Vi (Clean Editorial Visual Artifact)
  // =========================================================================
  return (
    <div className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-950/40 p-6 sm:p-8 font-mono">
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-200/70 dark:border-zinc-800/70 text-xs text-zinc-400">
        <span className="uppercase tracking-widest font-semibold text-zinc-800 dark:text-zinc-200">
          WEB ARCHITECTURE ARTIFACT
        </span>
        <span>HTML5 · CSS3 · JAVASCRIPT</span>
      </div>

      <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 text-xs">
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">
            Interactive Commemorative Portal
          </span>
          <span className="text-zinc-400 text-[11px]">Live GitHub Pages</span>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
          A modular personal celebratory web application built with pure semantic HTML5, custom responsive layouts, and vanilla JavaScript DOM state transitions.
        </p>

        <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
          {['can-cu.html', 'ki-niem.html', 'loi-chuc.html', 'quyet-dinh.html'].map((page) => (
            <span
              key={page}
              className="px-2.5 py-1 rounded bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              {page}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
