# Kristine Joy Torres — Cloud Video Portfolio

This is the complete static portfolio source, with the uploaded `images/cloud-bg.mp4` video as the animated site backdrop, light/dark mode, existing project galleries, hackathon participation certificate, and a completed résumé download.

## Publish
Copy **all contents of this folder** into the **root** of your cloned `kjg-tine/kjg_tine.com` Git repository (not inside an extra folder). Preserve `.git`. Test with `python -m http.server 8000`, then run `git add -A`, `git commit -m "Add downloadable Network Administration labs"`, `git push origin main` to trigger Vercel.

## Résumé
The live **Download Résumé** button works and points to `resume/Kristine-Joy-Torres-Resume.pdf`. An editable Word version is also supplied at `resume/Kristine-Joy-Torres-Resume.docx`.

The résumé is tailored to academic projects and training; it does not invent employment, awards, certifications or graduation dates. Review phone/email and the résumé before publicly publishing.

## Privacy
Review personal phone numbers and other contact details before publishing. Live GitHub, Figma and Google Drive links should be tested separately.

## Accessibility
Video is decorative, muted and looped. A static fallback is shown for `prefers-reduced-motion`, and playback pauses when the page is hidden.


## STRIX APK and glass background update

- `STRIX-Android.apk` is provided by the portfolio author; no claim of independent APK security, compatibility, or working local AI inference testing is made.
- The STRIX project now has a direct Android APK download instead of a Drive link.
- Users need to download the local AI model **inside the application** before trying its offline AI features.
- Panels and navigation are more translucent, with backdrop blur for text readability.
- Test the site on localhost before deploying. Github and Vercel may impose file-size or upload limits on the ~85 MB APK; use Git LFS or a dedicated release asset if required.


## Network Administration portfolio update

Added **EduCore University — Campus Network Infrastructure** as a collaborative Cisco Packet Tracer capstone (9 screenshots and selected final .pkt), with an additional compact Networking Labs & Technical Activities section. The capstone .pkt may contain lab credentials; review before sharing publicly.

Final Packet Tracer simulation: `networking/EduCoreUniversity-Capstone.pkt`. This file opens with Cisco Packet Tracer; functionality has not been independently simulated in this package.


## Portfolio résumé update (October 2026)
- Added formal one-page PDF résumé and editable DOCX.
- Activated hero Download Résumé link.
- Replaced the leftover LinkedIn placeholder with the previously supplied LinkedIn profile.
- Keep `resume/` alongside `index.html` in the root of the repository so the download link works.


## Network Administration labs — October 2026 (complete files)
**Now included:** 23 downloadable original Cisco Packet Tracer `.pkt` exercises, indexed in the Networking Labs & Technical Activities section.
Click the three category cards to open the corresponding file collection. Each exercise has an individual download link, and `networking/Network-Administration-Labs.zip` bundles all 23 lab exercises.

- Practical Activities — 10 files (Activities 1–8, 10–11).
- Assignments & Participation — 5 files (2 assignments, 3 participation exercises).
- Midterm & Finals Labs — 8 files (3 midterm activities, 3 finals activities, 2 finals participation exercises).

Repeated/alternate versions are not displayed as separate projects: `act4.pkt` was excluded in favor of the named `Activity4_Torres.pkt`; earlier capstone variants are excluded in favor of `networking/EduCoreUniversity-Capstone.pkt`. Two EduCore files were byte-identical, so only the selected final is used.

**Important:** `.pkt` coursework may retain device passwords or lab credentials; inspect files with Cisco Packet Tracer before publishing a public repository. These are academic simulations, not independently verified live deployments. Only files actually provided by the author are included; Activity 9 was not supplied.

### Push changes (existing Git repository)
Copy the *contents* of this ZIP into the root of your existing clone, retaining its hidden `.git` directory. Then run:

```
git add -A
git commit -m "Add Network Administration lab downloads"
git push origin main
```

If GitHub warns about the ~84 MB STRIX APK, the push may still succeed; for long-term maintainability move the APK to a GitHub Release and update its URL in `index.html`.

## October 2026 résumé update
The downloadable résumé now includes PUPulot (collaborative Figma prototype), CCIS badminton team captain and BSIT class representative leadership, plus CapCut, Canva, Figma, and basic Adobe creative software familiarity. The PDF and editable Word version are in `resume/`. The website résumé button continues to point to the updated PDF.
