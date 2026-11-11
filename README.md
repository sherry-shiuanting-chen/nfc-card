# Jade Snow Medical Ltd. × Sherry Chen — NFC Digital Introduction

A static, mobile-first, two-path digital business card intended for NFC souvenirs at MEDICA 2026. No build tools, accounts, forms, cookies, or backend are required to run the website.

## Included files
- `index.html`: text, structure and **all external links**.
- `styles.css`: visual design and responsive layout.
- `script.js`: switches between `#home`, `#jade-snow`, and `#sherry`.
- `sherry-chen.vcf`: optional downloadable contact card (name, email and personal site only).
- `CLAUDE_CODE_PROMPT.md`: specification for future Claude Code edits.

## Confirmed links (provided by the user)
- Jade Snow Medical: https://jadesnow-medical.com/
- Company LinkedIn: https://www.linkedin.com/company/jade-snow-medical/home/?viewAsMember=true
- Company Instagram: https://www.instagram.com/neuro__surg?mdxt=MTg2dWVrajA1NTFmdQ==
- Sherry portfolio: https://sherry-shiuanting-chen.github.io/sherry-chen-portfolio/sherry.html
- Sherry LinkedIn: https://www.linkedin.com/in/sherry-chen-334250164
- Contact email: shiuantingchen@gmail.com

Sherry's LinkedIn was supplied without a URL scheme; `https://` has been prepended for browser usability. The company links retain the exact supplied query parameters. No unknown phone, address, social profile, or CV URL is added.

## Preview locally
Unzip, then open `index.html` in a browser. This works locally; the decorative web fonts require internet, but system/Georgia fonts are provided as fallback. All content and styling otherwise work offline.

## Deploy with GitHub Pages (no coding)
1. Create a **public** repository on GitHub, such as `jade-snow-sherry-nfc` (choose any available name).
2. Upload the five site files (`index.html`, `styles.css`, `script.js`, `sherry-chen.vcf`, and optionally documentation) to the repository root.
3. Go to **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then select branch `main` and directory `/ (root)`, and save.
4. After GitHub publishes, copy the actual HTTPS URL that GitHub displays. Do not guess the repository URL or use the local file path in an NFC tag.
5. Visit the public URL on another phone and check both paths and all links. The site has no analytics/tracking.

## NFC tag writing
1. On an iPhone with NFC support install **NFC Tools** (Wakdev), and select **Write → Add a record → URL / URI**.
2. Paste the **deployed HTTPS homepage URL**, not an HTML file path or social profile URL.
3. Select **Write**, bring the top of the phone close to the NTAG213 tag, and confirm success.
4. Test NFC before encapsulating it, and again after printing. Do **not** lock/make the tag read-only.
5. If the printed object shields NFC or thermal printing damages the antenna/chip, the site URL cannot be read from the tag. Use a tested pocket/cover design.
6. The tag can be read without mobile data, but visiting the online site requires connectivity (unless previously cached by the phone).

## Update content later
Edit `index.html` or `styles.css`, upload changed files to the same GitHub repository, and retain the published address. **As long as the URL stays the same**, NFC tags do not require rewriting.

## Privacy / representation
The Sherry contact card includes only the confirmed email and portfolio URL. The company section does not imply that the user's personal email is the company's official support address. Social channels and role labels are display copy only; verify content against company-approved messaging before circulating broadly.
