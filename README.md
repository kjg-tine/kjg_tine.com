# Kristine Joy Torres — Cloud Video Portfolio

This is the complete static portfolio source, with the uploaded `images/cloud-bg.mp4` video as the animated site backdrop, light/dark mode, existing project galleries, hackathon participation certificate, and résumé placeholder.

## Publish
Copy **all contents of this folder** into the **root** of your cloned `kjg-tine.github.io` Git repository (not inside an extra folder). Preserve `.git`. Test with `python -m http.server 8000`, then run `git add -A`, `git commit -m "Add cloud video background"`, `git push origin main` to trigger Vercel.

## Résumé
Put your own PDF at `resume/Kristine-Joy-Torres-Resume.pdf`. Then remove `data-resume-pending="true"` from the résumé download link in `index.html`.

## Privacy
Review personal phone numbers and other contact details before publishing. Live GitHub, Figma and Google Drive links should be tested separately.

## Accessibility
Video is decorative, muted and looped. A static fallback is shown for `prefers-reduced-motion`, and playback pauses when the page is hidden.
