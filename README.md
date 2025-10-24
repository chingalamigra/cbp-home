# CBP Home App - Critical Privacy & Surveillance Analysis

A GitHub Pages/Jekyll website analyzing the extensive surveillance and data collection capabilities of the CBP Home mobile application.

## Overview

This website presents a comprehensive security analysis of the CBP Home application (gov.dhs.cbp.cbphome) developed by the U.S. Department of Homeland Security. The analysis documents:

- **Continuous GPS location tracking**
- **Facial biometric data collection**
- **Government identification document scanning**
- **Contact list and call history access**
- **Remote behavior modification capabilities**
- **Integration with government surveillance infrastructure**

## Risk Level: CRITICAL

---

## Features

- **Multiple detailed analysis pages** covering different aspects of the application
- **Responsive design** for mobile, tablet, and desktop viewing
- **Accessible content** with ARIA labels and keyboard navigation
- **Professional styling** with clear risk level indicators
- **Dark mode support** for comfortable reading
- **Print-friendly** formatting for offline reading
- **JavaScript utilities** for enhanced interactivity

## Site Structure

```
cbp-warning-site/
├── _config.yml              # Jekyll configuration
├── _layouts/
│   └── default.html         # Main layout template
├── _includes/               # Reusable layout components
├── assets/
│   ├── css/
│   │   ├── style.css        # Main stylesheet
│   │   └── responsive.css   # Mobile/responsive styles
│   └── js/
│       └── main.js          # JavaScript utilities
├── index.md                 # Home page
├── findings.md              # Key findings
├── data-collection.md       # Data collection details
├── permissions.md           # Permissions analysis
├── risks.md                 # Security & privacy risks
├── recommendations.md       # What users can do
└── README.md               # This file
```

## Pages

### Home (index.md)
Introduction to the analysis, executive summary, and overview of key findings.

### Key Findings (findings.md)
Detailed discussion of eight critical findings including:
- GPS location tracking
- Biometric data collection
- Government document scanning
- Contact/call history access
- Remote control capabilities
- Firebase analytics integration
- Multiple data aggregation points

### Data Collection (data-collection.md)
Complete inventory of what data is collected, how it's collected, and where it's transmitted:
- Location data
- Biometric information
- Government documents
- Contacts and communications
- Device identifiers
- User activity tracking
- Crash reporting data
- Data retention policies

### Permissions (permissions.md)
Analysis of Android permissions requested by the app:
- 13 critical permissions reviewed
- Risk level assessment for each
- Comparison with other apps
- Recommended permission settings
- How to manage permissions

### Security Risks (risks.md)
Detailed threat analysis covering:
- Real-time tracking implications
- Biometric data permanence and abuse potential
- Social network mapping
- Remote control vulnerabilities
- Government integration risks
- Data breach potential
- Government misuse scenarios
- Chilling effect on behavior

### Recommendations (recommendations.md)
Actionable advice for users:
- Why not to install the app
- How to uninstall safely
- Harm reduction strategies if already installed
- Privacy protection techniques
- Advocacy and action steps
- Legal options
- Resources and organizations

---

## Getting Started

### Prerequisites

- Git
- Ruby 2.7 or higher
- Jekyll 4.0 or higher
- Bundler

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/cbp-warning-site.git
cd cbp-warning-site
```

2. **Install dependencies:**
```bash
bundle install
```

3. **Run locally:**
```bash
bundle exec jekyll serve
```

4. **View in browser:**
Navigate to `http://localhost:4000/cbp-warning-site/` (or `http://localhost:4000` if hosting on main domain)

### Deployment to GitHub Pages

1. **Create a GitHub repository** named `cbp-warning-site` in your account

2. **Push to GitHub:**
```bash
git add .
git commit -m "Initial commit: CBP Home analysis website"
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to GitHub Pages section
   - Select `main` branch as source
   - GitHub will build and deploy automatically

4. **Access your site at:**
```
https://yourusername.github.io/cbp-warning-site/
```

---

## Customization

### Update Site Title & Description

Edit `_config.yml`:
```yaml
title: Your Custom Title
description: Your custom description
url: "https://your-domain.com"
baseurl: "/cbp-warning-site"
```

### Change Colors

Edit `assets/css/style.css` and update CSS variables:
```css
:root {
    --primary-color: #c41e3a;      /* Main red */
    --secondary-color: #1a1a1a;    /* Dark gray */
    --accent-color: #ffa500;       /* Orange */
    --warning-color: #ff6b6b;      /* Light red */
    --safe-color: #4caf50;         /* Green */
}
```

### Add New Pages

1. Create new `.md` file in root directory
2. Add YAML front matter:
```yaml
---
layout: default
title: Your Page Title
---
```

3. Add link to navigation in `_layouts/default.html`

### Customize Navigation

Edit the navigation menu in `_layouts/default.html`:
```html
<ul class="nav-menu">
    <li><a href="{{ '/' | relative_url }}">Home</a></li>
    <li><a href="{{ '/findings.html' | relative_url }}">Your Page</a></li>
</ul>
```

---

## Features & Functionality

### Responsive Design

The site automatically adapts to different screen sizes:
- **Desktop:** Full layout with sidebar
- **Tablet:** Adjusted spacing and font sizes
- **Mobile:** Single column layout, optimized for small screens
- **Print:** Optimized for paper output

### Accessibility

- **ARIA labels** for alerts and important content
- **Keyboard navigation** support
- **Skip to main content** link
- **High contrast** mode support
- **Dark mode** with auto-detection

### JavaScript Utilities

The site includes several JavaScript utilities:
- **Analytics tracking** (local only)
- **Search functionality** (client-side)
- **Export options** (text, JSON)
- **Share functionality** (social media)
- **Dark mode toggle**
- **Print enhancement**

### Markdown Features

All pages use GitHub-flavored markdown:
- **Headers** (H1, H2, H3)
- **Lists** (unordered and ordered)
- **Code blocks** with syntax highlighting
- **Tables**
- **Emphasis** (bold, italic)
- **Links** and images
- **Blockquotes**

---

## Content Organization

### Alert Boxes

Use alert boxes to highlight important information:

```markdown
<div class="alert alert-critical">
<h4>CRITICAL: Title</h4>
<p>Alert content here</p>
</div>
```

Classes: `alert-critical`, `alert-warning`, `alert-info`

### Data Items

Highlight specific data being collected:

```markdown
<div class="data-item">
<span class="data-item-type">Location Data</span>
<span class="risk-critical">CRITICAL</span>
Description of data collection
</div>
```

### Risk Levels

Display risk levels with color coding:

```markdown
<span class="risk-critical">CRITICAL</span>
<span class="risk-high">HIGH</span>
<span class="risk-medium">MEDIUM</span>
```

### Code References

Format code references for clarity:

```
File location: src/file.ext:123
```

---

## SEO Optimization

The site includes SEO features:
- Meta descriptions in `_config.yml`
- OpenGraph tags (via jekyll-seo-tag plugin)
- Sitemap generation
- Canonical URLs
- Social media meta tags

### Social Media Preview

Update social media preview in `_config.yml`:
```yaml
social:
  name: CBP Home App Analysis
  links:
    - https://example.com
```

---

## Performance Optimization

### CSS/JS Loading

- CSS is inlined in header for faster rendering
- JavaScript is loaded at end of page
- Responsive images for mobile optimization
- Minimal external dependencies

### Build Optimization

Jekyll automatically:
- Minifies output (optional)
- Compresses images
- Optimizes CSS
- Generates sitemaps

---

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Graceful Degradation

The site works without JavaScript, with enhanced features when available.

---

## Privacy & Analytics

This site includes **NO external analytics or tracking**.

- All analytics are local (browser localStorage)
- No data is sent to external services
- No cookies are set
- No third-party trackers
- Fully GDPR compliant

---

## Troubleshooting

### Site Not Building

```bash
# Clear cache
rm -rf .jekyll-cache

# Rebuild
bundle exec jekyll build
```

### Port Already in Use

```bash
bundle exec jekyll serve --port 5000
```

### GitHub Pages Not Updating

1. Check GitHub Actions tab
2. Ensure repository is set to `public` (for GitHub Pages)
3. Wait 1-2 minutes for deployment
4. Try hard refresh in browser (Ctrl+Shift+R)

### Mobile Styling Issues

1. Check `assets/css/responsive.css`
2. Verify viewport meta tag in `_layouts/default.html`
3. Test with browser DevTools mobile emulation

---

## Contributing

### Adding Content

1. Fork the repository
2. Create feature branch
3. Add/edit markdown files
4. Update navigation if adding new pages
5. Test locally with `bundle exec jekyll serve`
6. Submit pull request

### Reporting Issues

Use GitHub Issues to report:
- Broken links
- Styling problems
- Content inaccuracies
- Feature requests

---

## License

This analysis is provided for educational and public awareness purposes.

### Content License

Educational security research - Educational use permitted

### Disclaimer

This analysis is based on static code review of publicly available APK files. All findings are educational in nature. Users should make informed decisions about software they install.

---

## Resources & Links

### Privacy Organizations
- [Electronic Frontier Foundation](https://www.eff.org)
- [Privacy International](https://privacyinternational.org)
- [ACLU](https://www.aclu.org)

### Technical Resources
- [Android Developer Documentation](https://developer.android.com)
- [GitHub Pages Documentation](https://pages.github.com)
- [Jekyll Documentation](https://jekyllrb.com)

### Government Privacy
- [CBP Privacy Office](https://www.cbp.gov/about)
- [DHS Privacy](https://www.dhs.gov/privacy)
- [FOIA.gov](https://www.foia.gov)

---

## Citation

If citing this analysis:

```
CBP Home Application - Critical Privacy & Surveillance Analysis
Analysis Date: October 24, 2025
Classification: Educational Security Analysis
Source: [Your Name/Organization]
Website: https://yourusername.github.io/cbp-warning-site/
```

---

## Support

For questions or assistance:

1. Check existing GitHub Issues
2. Review Jekyll documentation
3. Check GitHub Pages documentation
4. Contact site maintainer

---

## Version History

### Version 1.0 (October 24, 2025)
- Initial release
- 6 main analysis pages
- Responsive design
- Dark mode support
- Full accessibility support

---

## About This Analysis

**Report Date:** October 24, 2025
**Application:** CBP Home (gov.dhs.cbp.cbphome)
**Developer:** U.S. DHS - Customs and Border Protection
**Analysis Type:** Educational Security Analysis (Static Code Review)
**Risk Level:** CRITICAL

This analysis was conducted for educational purposes to inform the public about data collection and surveillance practices in government applications.

---

**Last Updated:** October 24, 2025
**Status:** Active & Maintained
