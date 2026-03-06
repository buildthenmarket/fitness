## Plan: Navbar + Docs Naming Standardization

Update the equipment/space navbar links in `docusaurus.config.ts` to match current docs grouping while preserving all other navbar sections. In parallel, normalize `docs/` folder and filename conventions to `Capitalize With Spaces` using Docusaurus built-in filesystem routing behavior (including `index.md` for section landing pages), with explicit naming exceptions/decisions captured below.

**Steps**
1. Lock scope and invariants before edits:
- Keep all non-equipment navbar groups intact
- Update only the 3 equipment/space entries in the strength section
- Keep Gym default destination at `Gym/Chest` (no Gym index doc)
*Blocking step for implementation.*
2. Apply docs folder name normalization in `docs/` to `Capitalize With Spaces` where needed:
- `docs/Bodyweight (Calisthenics)/` -> `docs/Bodyweight/`
- `docs/cardio/` -> `docs/Cardio/`
- `docs/sports/` -> `docs/Sports/`
- Keep existing correctly-cased folders (`Dumbbells`, `Gym`, `Stretching`)
*Can execute in parallel with step 3 planning.*
3. Apply markdown filename normalization in `docs/` to `Capitalize With Spaces` using semantic titles (not one-word enforcement):
- `push-ups.md` -> `Push-ups.md` (approved technical spelling)
- `compound-moves.md` -> `Compound Moves.md` (explicitly remains two words)
- `medicine-ball.md` -> `Medicine Ball.md`
- `chest-pecs.md` -> `Chest.md` (muscle-group one-word exception; plain-language term)
- `shoulders-neck-upper-back.md` -> `Shoulders.md` (muscle-group one-word exception; plain-language term)
- `lower-back-hips-glutes.md` -> `Back.md` (muscle-group one-word exception)
- `gait.md` -> `Gait.md`
- `speed.md` -> `Speed.md`
- `boxing.md` -> `Boxing.md`
- `yoga.md` -> `Yoga.md`
*Depends on step 2 for files in renamed folders.*
4. Convert Dumbbells landing doc to Docusaurus section-index convention:
- Rename `docs/Dumbbells/minimal-equipment-workout.md` -> `docs/Dumbbells/index.md`
- Ensure content/title reflects the Dumbbells section landing intent
*Depends on step 3 ordering for same folder.*
5. Update navbar mapping in `docusaurus.config.ts`:
- Strength dropdown labels/targets should represent Bodyweight (Calisthenics), Dumbbells, Gym
- Bodyweight navbar entry should route to `docs/Bodyweight/index.md` and display label text `Bodyweight (Calisthenics)`
- Dumbbells navbar entry should point to `docs/Dumbbells/index.md` route
- Gym navbar entry should point to `docs/Gym/Chest.md` route equivalent
- Keep all other dropdowns unchanged
*Depends on steps 2-4 because routes change with renames.*
6. Standardize top-level title behavior:
- Keep valid H1/title behavior for all docs
- Ensure `docs/Bodyweight/index.md` presents `Bodyweight (Calisthenics)` in frontend display (H1 or frontmatter title)
- `Push-ups` remains an approved edge case where filename-derived title can be used and document body can begin at H2
*Depends on step 3.*
7. Repair internal links and run verification passes for renamed routes.
*Depends on steps 2-6.*

**Atomic Tasks**
1. Rename folder `docs/Bodyweight (Calisthenics)` to `docs/Bodyweight`.
2. Rename folder `docs/cardio` to `docs/Cardio`.
3. Rename folder `docs/sports` to `docs/Sports`.
4. Rename file `docs/Bodyweight/push-ups.md` to `docs/Bodyweight/Push-ups.md`.
5. Rename file `docs/Dumbbells/compound-moves.md` to `docs/Dumbbells/Compound Moves.md`.
6. Rename file `docs/Dumbbells/medicine-ball.md` to `docs/Dumbbells/Medicine Ball.md`.
7. Rename file `docs/Dumbbells/minimal-equipment-workout.md` to `docs/Dumbbells/index.md`.
8. Rename file `docs/Gym/chest-pecs.md` to `docs/Gym/Chest.md`.
9. Rename file `docs/Gym/shoulders-neck-upper-back.md` to `docs/Gym/Shoulders.md`.
10. Rename file `docs/Gym/lower-back-hips-glutes.md` to `docs/Gym/Back.md`.
11. Rename file `docs/Cardio/gait.md` to `docs/Cardio/Gait.md`.
12. Rename file `docs/Cardio/speed.md` to `docs/Cardio/Speed.md`.
13. Rename file `docs/Stretching/yoga.md` to `docs/Stretching/Yoga.md`.
14. Rename file `docs/Sports/boxing.md` to `docs/Sports/Boxing.md`.
15. Set `docs/Bodyweight/index.md` page title display to `Bodyweight (Calisthenics)` (H1 or frontmatter title).
16. Update `docusaurus.config.ts` strength dropdown target for Bodyweight to `docs/Bodyweight/index.md` route.
17. Update `docusaurus.config.ts` strength dropdown label text for Bodyweight to `Bodyweight (Calisthenics)`.
18. Update `docusaurus.config.ts` strength dropdown target for Dumbbells to `docs/Dumbbells/index.md` route.
19. Update `docusaurus.config.ts` strength dropdown target for Gym to `docs/Gym/Chest.md` route.
20. Confirm Cardio, Flexibility, Muscle Groups, Sports, and GitHub navbar groups remain unchanged.
21. Audit markdown links for old lowercase/hyphenated and old-folder paths and replace with new route paths.
22. Verify `Push-ups` doc keeps acceptable title behavior with body content starting at H2.
23. Run dev/build validation and resolve any broken-link warnings introduced by renames.
24. Perform manual navbar click-through: Bodyweight, Dumbbells, Gym, plus one unchanged non-equipment group.

**Relevant files**
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/docusaurus.config.ts` — update only strength/equipment navbar item targets and labels.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/docs/Bodyweight (Calisthenics)/` — rename folder to `Bodyweight/` for internal path normalization.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/docs/` — rename folders/files to `Capitalize With Spaces` convention.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/docs/Dumbbells/minimal-equipment-workout.md` — rename to section landing `index.md`.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/docs/Gym/chest-pecs.md` — rename to `Chest.md` while retaining Gym default navbar destination.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/src/pages/index.js` — update homepage category cards and CTA links to normalized docs routes.
- `/Users/savageceo/Desktop/Personal/workout-docusaurus/sidebars.ts` — reference only; autogenerated sidebar should absorb structure changes.

**Verification**
1. Naming audit: every folder and markdown file under `docs/` follows `Capitalize With Spaces` (except `index.md` where intentionally used as section landing).
2. Title audit: docs retain valid page title behavior; `Push-ups` edge-case behavior remains accepted.
3. Navbar audit: only equipment/space group links changed; other nav groups unchanged.
4. Route audit: Bodyweight, Dumbbells (`index.md` landing), and Gym (`Chest`) open correctly from navbar.
5. Build audit: run local build/dev checks and confirm no new broken links due to renames.

**Decisions**
- Naming convention is now `Capitalize With Spaces` for folders/files in `docs/`.
- Normalize folder name `Bodyweight (Calisthenics)` to `Bodyweight` for internal consistency.
- Frontend display should still read `Bodyweight (Calisthenics)` on the section landing page.
- `shoulders-neck-upper-back.md` should be normalized to `Shoulders.md`.
- `Compound Moves` must remain two words.
- Replace prior one-word naming rule; it is no longer in scope.
- `minimal-equipment-workout.md` should become `index.md` inside `docs/Dumbbells/`.
- `Push-ups` keeps academically technical spelling and remains an allowed filename-derived-title edge case.
- Do not add `docs/Gym/index.md`; Gym defaults to Chest.

**Further Considerations**
1. If preserving old URLs is required, add route redirects for renamed folder/file paths.
2. Keep future additions aligned by documenting this naming convention in `README.md` or a docs contribution guide.