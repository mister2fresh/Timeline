# Timeline Framework

A reusable, accessible, and animation-friendly **timeline framework for React & Next.js**, built for storytelling — not just lists.

This project provides a **data-driven timeline engine** with optional UI components and themes, allowing you to document anything that unfolds over time:
- Architecture & construction projects
- Career timelines
- Product development histories
- Research logs
- Personal stories

> Designed as a framework first.  
> Your story is just one implementation.

---

## ✨ Features

- ⚙️ **Data-first API** (no JSX-heavy configs)
- 🧱 **Composable architecture** (headless core + UI layer)
- 🎞 **Animation-ready** (Framer Motion by default, optional)
- 🎨 **Themeable** (CSS variables, Tailwind, or presets)
- ♿ **Accessible by default**
- ⚡ **Next.js friendly** (App Router compatible)
- 🧩 **Extensible** (custom renderers, media, plugins)

---

## 📦 Packages

This repo is structured as a small monorepo:
packages/
├─ core/ # Timeline engine, types, hooks
├─ ui/ # Opinionated UI components
├─ themes/ # Theme presets
examples/ # Real-world implementations

You can use:
- **Core only** (headless logic)
- **Core + UI** (plug-and-play timeline)
- **Everything** (themes + examples)

---

## 🚀 Quick Start

### Install (local or npm)

```bash
npm install @timeline/core @timeline/ui

