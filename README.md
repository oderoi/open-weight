# ⚖️ Open Weights & American AI Leadership

> A creative, interactive web tribute to the [Open Weights and American AI Leadership letter](https://images.nvidia.com/pdf/Open-Weights-and-American-AI-Leadership.pdf) published on July 24, 2026.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-00d4ff?style=flat-square&logo=github)](https://yourusername.github.io/open-weights-letter)
[![License](https://img.shields.io/badge/License-MIT-ffb800?style=flat-square)](LICENSE)

## 🚀 Live Demo

**[View the site →](https://yourusername.github.io/open-weights-letter)**

*(Replace `yourusername` with your actual GitHub username after deployment)*

---

## 📖 What's This About?

On July 24, 2026, **25 major tech companies and organizations** signed a letter advocating for **open-weight AI models** as a cornerstone of American technological leadership. This project transforms that important policy document into an engaging, scrollable web experience.

### The 25 Signatories

| | | | |
|---|---|---|---|
| American Innovators Network | Andreessen Horowitz | Arcee AI | Arena |
| Black Forest Labs | Box | CrowdStrike | Dell Technologies |
| Emergence Capital | Hugging Face | IBM | The Linux Foundation |
| Mariana Minerals | Meta | Microsoft | Mistral AI |
| Mozilla | NVIDIA | Palantir | Perplexity |
| Reflection | Replit | ServiceNow | Telnyx |
| Y Combinator | | | |

---

## 🎨 Features

- **⚡ Smooth Scroll Experience** — Progress bar, parallax effects, and reveal animations
- **📱 Fully Responsive** — Looks great on desktop, tablet, and mobile
- **🎯 Interactive Company Cards** — Hover to see fun facts about each signatory
- **📜 Full Letter Text** — Complete, unedited letter content with beautiful typography
- **🎮 Easter Egg** — Try the Konami code (↑↑↓↓←→←→BA) for a surprise!
- **🌙 Dark Theme** — Easy on the eyes with a sleek navy/cyan color palette
- **⚖️ Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript

---

## 📁 File Structure

```
open-weights-letter/
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Actions: auto-deploy to Pages
├── css/
│   └── style.css               # All styles, animations, and responsive rules
├── js/
│   └── main.js                 # Interactivity, scroll effects, easter eggs
├── index.html                  # Main page — the whole experience
└── README.md                   # You are here!
```

---

## 🚀 Deploy to GitHub Pages

### Step 1: Create a New Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `open-weights-letter`
3. Make it **Public**
4. Click **Create repository**

### Step 2: Upload These Files

**Option A: Git CLI**
```bash
git clone https://github.com/yourusername/open-weights-letter.git
cd open-weights-letter
# Copy all files from this project
git add .
git commit -m "Initial commit: Open Weights Letter site"
git push origin main
```

**Option B: GitHub Web UI**
1. Click **"Add file" → "Upload files"**
2. Drag and drop all files/folders
3. Click **"Commit changes"**

### Step 3: Enable GitHub Pages

1. Go to **Settings** → **Pages** (in your repo)
2. Under **Source**, select **GitHub Actions**
3. The `.github/workflows/static.yml` file will automatically handle deployment
4. Wait 1-2 minutes, then visit `https://yourusername.github.io/open-weights-letter`

---

## 🛠️ Local Development

No build step required! Just open `index.html` in your browser:

```bash
# Using Python's built-in server (optional)
cd open-weights-letter
python3 -m http.server 8000
# Open http://localhost:8000
```

Or use any static file server:
```bash
# Node.js
npx serve .

# VS Code
# Install "Live Server" extension → Right-click index.html → "Open with Live Server"
```

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --accent-cyan: #00d4ff;    /* Primary accent */
    --accent-purple: #8b5cf6;  /* Secondary accent */
    --accent-amber: #ffb800;   /* Highlight color */
    --bg-primary: #0a0e27;     /* Background */
}
```

### Add More Companies
In `index.html`, duplicate a `.sig-card` block:
```html
<div class="sig-card" data-company="newco">
    <div class="sig-logo" style="--brand-color: #ff0000;">NC</div>
    <div class="sig-info">
        <h4>New Company</h4>
        <p class="sig-motto">"Their catchy tagline here."</p>
        <div class="sig-fun">What they actually do.</div>
    </div>
</div>
```

### Update the Letter Text
The full letter is in the `.letter-body` section of `index.html`. Just edit the `<p>` tags.

---

## 📜 License

[MIT](LICENSE) — Share freely, modify boldly, attribute kindly.

> *"Open source did more than lower the cost of software; it created a shared foundation of knowledge on which generations of American engineers and entrepreneurs built their institutions."*

---

## 🙏 Credits

- **Original Letter**: [NVIDIA — Open Weights and American AI Leadership](https://images.nvidia.com/pdf/Open-Weights-and-American-AI-Leadership.pdf)
- **Fonts**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) & [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Built with**: HTML5, CSS3, Vanilla JavaScript, and ☕

---

<p align="center">
  <strong>⚖️ The future is open. Let's build it together.</strong>
</p>
