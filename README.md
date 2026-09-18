# Tran Nhat Minh — Personal Portfolio

> Minimalist personal portfolio for **Tran Nhat Minh (Trần Nhật Minh)** — AI / Machine Learning / Data.

Built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🛠 Features

- **Minimalist Aesthetic**: "Quiet technical confidence" design inspired by editorial research journals, Apple simplicity, and Linear precision.
- **Color System**: Monochromatic warm off-white (`#FAFAF9`) default with deep charcoal typography (`#18181B`) and instant dark mode toggle (`#0A0A0B`).
- **Typography**: Editorial modern sans-serif (`Inter`) paired with technical monospace (`JetBrains Mono`) for labels, tags, and architecture flows.
- **Projects Showcase**: 5 verified projects with expandable in-depth case studies and minimalist procedural pipeline diagrams:
  1. `Visual Question Answering on Vehicles` (PyTorch, YOLOv8, ResNet, BERT/LSTM, Seq2Seq Attention)
  2. `Smart Retail Recommendation System with LLM Integration` (Pandas, Scikit-learn, TF-IDF, Gemini API)
  3. `Distributed Data Mining with PySpark` (PySpark, Agglomerative Clustering, K-Shingling, Min-Heap)
  4. `Vietnamese–English Neural Machine Translation` (PyTorch, Seq2Seq, LSTM, Global Attention)
  5. `Interactive Commemorative Web Application — Graduate_Vi` (HTML5, CSS3, JavaScript)
- **Technical Matrix**: Categorical skill breakdown across Programming, Data, ML, Deep Learning, AI, Big Data, and Tools (no fake percentage bars).
- **Academic & Professional Profile**: Ton Duc Thang University (GPA 3.33/4.00), MindX Part-time Lecturer.
- **Curriculum Vitae (CV)**: Interactive printable modal with 1-click **Print / Save as PDF** support.
- **Zero Fabrication**: 100% verified facts, no artificial metrics, no placeholder text.

---

## 🚀 Quick Start

### 1. Development Server
```bash
npm run dev
```

### 2. Build for Production
```bash
npm run build
```
Production output will be generated inside the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

### GitHub Pages
This project uses relative asset paths (`./`), making it directly compatible with GitHub Pages:
1. Push this folder to a GitHub repository (e.g. `https://github.com/TranNhatMinh2012/portfolio`).
2. You can either deploy the `dist/` folder via the `gh-pages` branch or configure GitHub Actions under **Settings > Pages > GitHub Actions**.

### Vercel / Netlify
Connect your repository and use:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
