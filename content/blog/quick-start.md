---
title: "Quick Start"
date: 2024-05-03T14:22:24-05:00
draft: false
image: ''
description:
---

To get started with Quint, you need to have Hugo installed on your machine. For more information on installing Hugo, check out the [official Hugo documentation](https://gohugo.io/getting-started/installing/).

For a step-by-step guide to creating a new site with Hugo, read the [Quick start](https://gohugo.io/getting-started/quick-start/).

### Step 1: Install the Theme

With Hugo installed, add Quint to your site's themes directory. From your site root, run:

```bash
git submodule add https://github.com/victoriadrake/hugo-theme-quint.git themes/quint
```

### Step 2: Add the Theme to Your Configuration

Open your Hugo site's configuration file (either `hugo.toml`, `hugo.yaml`, or `hugo.json`) and update the `theme` parameter to use `quint`:

#### For `hugo.toml`:

```toml
theme = "quint"
```

#### For `hugo.yaml`:

```yaml
theme: "quint"
```

### Step 3: Configure

Quint looks great out-of-the-box. Optionally, copy configuration values from `yoursite/themes/quint/hugo.toml` to your site's configuration (`yoursite/hugo.toml`) to personalize Quint further.

### Step 4: Run the Server

Run Hugo to generate your site and start up the server. From your site root, run:

```bash
hugo server
```

Navigate to `http://localhost:1313` in your web browser to see your site in action with the Quint theme.

### Get Updates

To download the latest version of Quint, run:

```bash
git submodule update --remote themes/quint
```
