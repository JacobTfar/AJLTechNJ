# � AJL Tech NJ

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AJL Tech NJ Lighthouse Score" width="100" height="358">

⚡ **Professional Tech Support for North Jersey Homes & Businesses** ⚡

**AJL Tech NJ** is a professional technology support business serving North Jersey communities. Built using **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**, our website showcases our comprehensive tech services with a focus on reliability and customer satisfaction.

- ✅ **Complete Tech Support** - Remote and on-site troubleshooting for all your technology needs
- ✅ **Device Repairs** - Professional repair services for phones, tablets, and laptops
- ✅ **Network Engineering** - Wi-Fi optimization, router setup, and custom LAN builds
- ✅ **Security Systems** - Basic camera setup and configuration for home and office security
- ✅ **Subscription Plans** - Ongoing tech support with priority service and maintenance
- ✅ **Enterprise Experience** - Team with mission-critical systems experience from Newark Airport

<br>

## 🌟 About AJL Tech NJ

Founded by Jorge Lamas, AJL Tech NJ brings enterprise-level technical expertise to North Jersey homes and businesses. Our team of three ambitious tech professionals combines years of experience working with mission-critical systems to provide reliable, honest, and affordable technology solutions.

**Our Coverage Area:** Essex, Hudson, Bergen, Passaic, Union, and Morris counties

**Contact:** (862) 312-5081

[![AJL Tech NJ](https://custom-icon-badges.demolab.com/badge/AJL%20Tech-NJ-556bf2?style=flat-square&logo=tools&logoColor=white&labelColor=101827)](https://ajltechnj.com)
[![License](https://img.shields.io/github/license/JacobTfar/AJLTechNJ?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/JacobTfar/AJLTechNJ/blob/main/LICENSE.md)
[![North Jersey](https://img.shields.io/badge/serving-North%20Jersey-brightgreen.svg?style=flat-square)](https://ajltechnj.com/about)
[![Contact](https://img.shields.io/badge/call-862--312--5081-brightgreen.svg?style=flat-square)](tel:+18623125081)

<br>

<details open>
<summary>Table of Contents</summary>

- [About AJL Tech NJ](#-about-ajl-tech-nj)
- [Our Services](#-our-services)
- [Getting started with development](#getting-started)
  - [Project structure](#project-structure)
  - [Commands](#commands)
  - [Configuration](#configuration)
  - [Deploy](#deploy)
- [Contact Information](#contact-information)
- [License](#license)

</details>

<br>

## 🛠️ Our Services

**AJL Tech NJ** provides comprehensive technology support for North Jersey homes and businesses:

### Core Services
- **Tech Support** - Remote and on-site troubleshooting for all technology needs
- **Device Repairs** - Professional repair services for phones, tablets, and laptops
- **Network Engineering** - Wi-Fi optimization, router setup, and custom LAN builds
- **Security Systems** - Basic camera setup and configuration
- **PC Imaging & Setup** - Profile cloning, multi-system setup, and clean OS deployment
- **Custom Solutions** - Tailored technology solutions for unique business needs

### Subscription Plans
- **Home Support** - $49/month for families and home offices
- **Small Business** - $149/month for businesses with 1-10 employees
- **Enterprise** - $299/month for larger businesses with comprehensive support

**Service Area:** Essex, Hudson, Bergen, Passaic, Union, and Morris counties

<br>

## Demo

📌 [Visit AJL Tech NJ Website](https://ajltechnj.com/)

<br>

## 📞 Contact Information

- **Phone:** (862) 312-5081
- **Website:** [ajltechnj.com](https://ajltechnj.com)
- **Email:** Contact us through our website
- **Service Area:** North Jersey (Essex, Hudson, Bergen, Passaic, Union, Morris counties)

<br>


## Getting Started (For Developers)

This website is built with **AJL Tech NJ**'s branding and content using [Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). If you need to work on the website, here's how to get started:

```shell
git clone https://github.com/JacobTfar/AJLTechNJ.git
cd AJLTechNJ
npm install
npm run dev
```

The website focuses on showcasing our professional tech support services with enterprise-level experience applied to residential and small business needs.

### Project structure

The **AJL Tech NJ** website follows standard Astro project structure:

```text
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   └── ...
│   │   └── ...
│   ├── data/
│   │   └── post/           # Blog posts about tech support
│   ├── layouts/
│   ├── pages/
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── pricing.astro
│   │   ├── subscription.astro
│   │   ├── contact.astro
│   │   └── ...
│   ├── utils/
│   ├── config.yaml         # Site configuration
│   └── navigation.ts       # Site navigation structure
├── package.json
├── astro.config.ts
└── ...
```

All service pages, pricing information, and business content is customized for AJL Tech NJ's specific offerings and North Jersey market.

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:4321`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

## Technical Details

This website is built using:
- **Astro 5.0** - Static site generator for fast performance
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach for all devices

## License

**AJL Tech NJ** website is built on the AstroWind template, which is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.

## About This Repository

This repository contains the source code for the AJL Tech NJ business website. It showcases our professional tech support services, subscription plans, and contact information for North Jersey clients.

**Built by:** Jacob Tapfar
**For:** AJL Tech NJ - Professional Tech Support  
**Serving:** North Jersey communities since 2015
