# KYARNG Youth Camp — TOC Status Board

A single-file operations/status board for running a youth camp. It keeps the
familiar military TOC (Tactical Operations Center) look — DTG/Zulu clock,
PERSTAT, SITREP export — but adds plain-English helper text so any
volunteer, military or not, can pick it up quickly.

Everything lives in one file, **`index.html`**. There is nothing to install and
no server to run — double-click the file (or open it in any modern browser) and
it works, online or offline.

## What's on the board

- **Header & DTG clock** — camp name, Zulu + local time, Camp Day, Battle
  Captain/OIC, TOC NCO, Weather/FPCON.
- **Live weather** from the National Weather Service (set your camp coordinates,
  or press *Locate*). Needs internet; everything else works offline.
- **Glance tiles** — Volunteers, Incident Reports, GSAs, and **Accountability %**.
- **Roster · Sign-In** *(new)* — list campers and staff by name and sign them
  **In / Out / Absent**. Type a name and press Enter to add-and-sign-in, or use
  *Sign all in* / *Sign all out*. When anyone is on the roster it drives the
  Accountability tile (present ÷ accountable, with absentees excluded).
- **PERSTAT** — personnel counts by element (assigned vs. present). Used for
  Accountability only when the roster is empty, so the old workflow still works.
- **Daily Schedule** *(new)* — the day's activities and timing. Mark one item
  **Now** to highlight the current event.
- **Incident Report Log** — one row per report; log incidents by hand.
- **Copy SITREP** — one-tap plain-text situation report (accountability, who's
  not signed in, PERSTAT, schedule, incidents) ready to paste into an email or chat.
- **Kiosk mode** — full-screen with screen wake-lock for a wall display.

## Saving & moving the board between computers

- **Automatic save:** the board saves itself in *this* browser as you type. Close
  and reopen and it's still there.
- **The catch:** that saved data lives in the browser on one computer. Open the
  file on a different computer and you start with a blank board. That's normal
  for a browser-only app — and it's why the original "only worked on one computer."
- **Carry it with you — `Save file` / `Load file`:** click **Save file** to
  download the whole board as a small `.json` file. On another computer, open
  `index.html` and click **Load file** to restore it exactly. This is the
  reliable way to hand the board off between shifts or laptops.

### Want a single live board that everyone sees at once?

True real-time sync across several computers needs an online backend (for
example a Google Apps Script tied to a Google Sheet, or Firebase). That's a
larger add-on and needs a bit of account setup. It isn't wired up yet — the
`Save file` / `Load file` flow above covers moving the board today. Ask and it
can be added as a follow-up.

## First-time setup

1. Open `index.html`.
2. Edit the **camp name** in the header.
3. In the **Weather** panel, type your camp's `lat, lon` and press *Set* (or
   press *Locate* to use the device's location).
4. Add your campers/staff in **Roster · Sign-In**, and adjust the **Daily
   Schedule** to your camp's timeline.
5. Log any incidents by hand in the **Incident Report Log**.
6. Click **Save file** whenever you want a portable backup.

## Notes

- All data stays on your device (browser storage) plus any files you save. The
  only network call is to the National Weather Service, for the weather panel.
- **Reset board** clears everything on the current computer — export a `Save file`
  first if you might want it back.
