# Lighthouse QA Checklist for Portfolio

## Accessibility

- [ ] All images have descriptive alt text
- [ ] Sufficient color contrast (text vs background)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus states are visible
- [ ] ARIA labels for modals, navigation, and buttons

## SEO

- [ ] Unique title and meta description per page
- [ ] Open Graph and Twitter meta tags use a real image (JPG/PNG)
- [ ] Canonical URL set
- [ ] Heading structure is logical (h1, h2, h3)
- [ ] Links use descriptive text

## Performance

- [ ] Images are optimized (JPG/PNG, not SVG for social cards)
- [ ] Font loading is optimized
- [ ] No large JavaScript bundles
- [ ] No unused CSS/JS
- [ ] Fast initial load (check with Lighthouse)

## How to Run Lighthouse

1. Open Chrome DevTools (F12)
2. Go to the 'Lighthouse' tab
3. Run tests for Accessibility, SEO, Performance
4. Fix any flagged issues above

## Useful Tools

- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Google Lighthouse Docs](https://web.dev/lighthouse/)
