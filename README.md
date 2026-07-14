# KYARNG Youth Camp — TOC Status Board

A single-file operations/status board for running a youth camp. It keeps the
familiar military TOC (Tactical Operations Center) look — DTG/Zulu clock,
PERSTAT, SITREP export — but adds plain-English helper text so any
volunteer, military or not, can pick it up quickly.

Everything lives in one file, **`index.html`**. There is nothing to install and
no server to run — double-click the file (or open it in any modern browser) and
it works, online or offline. It's **phone-friendly** too: on a small screen the
panels stack, the glance tiles go two-across, dense tables scroll sideways within
their panel, and the controls are touch-sized — so the full TOC board is usable
from a phone, not just a laptop or wall display.

## What's on the board

- **Header & DTG clock** — camp name, Zulu + local time, Camp Day, Battle
  Captain/OIC, TOC NCO, Weather/FPCON.
- **Live weather** from the National Weather Service (set your camp coordinates,
  or press *Locate*), with a **48-hour forecast chart** *(new)* — an hourly
  temperature curve with day/night shading, a "now" marker, high/low labels, and
  precipitation chance along the bottom (hover for the exact hour). Needs
  internet; everything else works offline.
- **Glance tiles** — On Ground (present), Incident Reports, GSAs (with a
  *signed out* count), and **Accountability %**.
- **GSAs** *(new)* — track government vehicles/equipment. List each GSA and
  **who has it**; if it isn't signed out to anyone, note **where it is** instead.
  The GSA tile shows the total and how many are signed out, and the roster
  flows into the SITREP.
- **Roster · Sign-In** *(new)* — list campers and staff by name and sign them
  **In / Out / Absent**. Type a name and press Enter to add-and-sign-in, or use
  *Sign all in* / *Sign all out*. When anyone is on the roster it drives the
  Accountability tile (present ÷ accountable, with absentees excluded).
- **Accountability · Formation** *(new)* — a big, glanceable view built from the
  roster for use at a formation. A green/red banner reads **ALL ACCOUNTED FOR**
  or **N NOT SIGNED IN**; the not-signed-in people are listed and grouped
  (Campers / Staff·Support / Volunteers) with their group and last-seen time, and
  absent/excused people are shown separately. A **head-count check** lets you
  enter the number of heads counted on the ground and reconciles it against who's
  signed In (flagging "+2 more on ground" or "2 short").
- **PERSTAT** — personnel counts by group (assigned vs. present). Works two ways:
  **type the counts in** directly, or let it fill from the roster. Any group that
  has people on the sign-in roster is counted from it automatically; groups with
  no one on the roster stay editable so the numbers-only workflow still works.
- **Heat Condition · WBGT** *(new)* — a Category 1–5 heat flag driven by a Wet
  Bulb Globe Temperature reading, with activity and hydration guidance for each
  level. **Auto** builds a real full-sun **outdoor** WBGT from the live weather —
  temperature and humidity (National Weather Service) plus **solar radiation and
  wind** (Open-Meteo) — using the standard `0.7·wet-bulb + 0.2·black-globe +
  0.1·dry-bulb` formula. At night or under overcast it reads as a shade value;
  if solar data can't be reached it falls back to a clearly-labeled shade
  estimate. Turn Auto off to key in a heat-stress meter reading (still the gold
  standard). Guidance is a guideline — always follow your camp medical SOP.
- **Work/Rest + Hydration timer** *(new)* — a countdown that loops active-play
  and rest periods sized to the **current heat category** (e.g. 30 min active /
  30 min rest at Category 3), with the hourly water guideline shown. It chimes
  and flashes at each switch, survives a page refresh (for a wall display), and
  stops itself if the category rises to a suspend-activity level.
- **Heat Casualties** *(new)* — a quick log for heat cases as they happen (time,
  name, type — cramps / exhaustion / **heat stroke** / precaution — and action
  taken), with a prominent heat-stroke emergency reminder. Heat-stroke entries
  are highlighted, counted on the panel, and included in the SITREP. Sits with
  the Incident Report Log near the bottom of the board.
- **Prior Heat Casualty · Watch List** *(new)* — an editable list of campers/staff
  with a **known prior history of heat illness** (name, group, notes), so staff
  can watch them proactively and pull them early in high-heat categories. Syncs
  and appears in the SITREP.
- **Daily Schedule** *(new)* — a full **week × platoon** schedule. Pick a **day**
  (Saturday–Friday), then a **platoon** (Alpha–Hotel), to see that platoon's
  activities for that day. The 2026 camp week is pre-loaded from the schedule
  workbook, with **locations** filled in from the workbook's Locations &
  Trainers sheet where they could be matched. **Status advances automatically
  with the clock** — each event reads Upcoming, then Now, then Done as its time
  passes (the current day of the week runs live; past days read Done, future
  days Upcoming). Rename, add, and remove platoons; edit any activity. On a fresh
  board it opens to today's day of the week. **Fill from shared events** (on a
  platoon's controls) populates that platoon's whole week with the events the
  other platoons all do at the same time — flag formations, meals, wake-up,
  lights out — handy for an **HQ / staff platoon** that mirrors the camp-wide
  schedule.
- **Incident Report Log** — one row per report. Log incidents by hand, or
  **auto-import** them from a Google Form: paste the responses sheet's
  *published CSV* link and new submissions drop in automatically (deduped;
  deleting an imported entry keeps it from returning). Columns are auto-detected,
  so it adapts to your form. A "Load CSV file" button is a manual fallback.
- **Supply Requests** *(new)* — an inbox of requests from the platoons (sent from
  the PSG phone page) plus anything you add by hand: platoon, priority
  (Routine/Priority/Urgent), item, quantity, notes. Urgent open requests are
  highlighted; mark each **Filled** when handled. Open requests appear in the SITREP.
- **Copy SITREP** — one-tap plain-text situation report (accountability, who's
  not signed in, PERSTAT, schedule, incidents) ready to paste into an email or chat.
- **Live Sync** *(new, optional)* — share one live board across multiple
  computers through a small Google Apps Script you deploy once. See
  [SYNC-SETUP.md](SYNC-SETUP.md).
- **Kiosk mode** — full-screen with screen wake-lock for a wall display.
- **PSG Field View (`psg.html`)** *(new)* — a separate **phone-first, read-only** page
  for Platoon Sergeants out with the campers. It connects to the same live board
  (via the sync link) and shows just what they need: their platoon's **Now / Next**
  activity and location, the **heat flag + water/work-rest guidance** (with an
  optional work/rest timer), a one-tap **Report to TOC** (your incident form),
  **Call TOC**, and **Supply Request** (a quick form — item, quantity, priority —
  that lands in the TOC's Supply Requests panel), plus any **announcement** the TOC
  broadcasts. The phones are read-only apart from sending supply requests — a phone
  can only *add* a request, never change anything else on the board. Set the
  announcement, incident form
  link, and TOC phone number in the **Field / PSG Broadcast** panel on the main
  board, which also shows a **QR code and "Copy PSG link"** — a PSG scans the code
  or taps the link and the page opens with the sync link already filled in; they
  just pick their platoon. (This broadcast channel is synced, so it needs the
  updated `sync/Code.gs` deployed — see [SYNC-SETUP.md](SYNC-SETUP.md).)

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

Use **Live Sync** (the panel near the bottom of the board). Several computers
share one board that updates on all of them within a few seconds — roster
sign-in, incidents, heat flag, schedule edits, and header fields all sync. Each
device keeps its own day/platoon *view*.

Edits from different computers **merge** rather than overwrite each other: the
server combines them under a lock, so a roster sign-in on one laptop and a
schedule edit on another both survive, and two people signing different campers
in at once both stick. Lists merge record-by-record (including deletions); only
two edits to the *same* record at the same instant fall back to last-write-wins.

It runs through a tiny **Google Apps Script** you deploy once (free, uses your
existing Google account, no Google Sheet needed). Paste the resulting link into
the Live Sync box on each computer and press **Connect**. Full step-by-step
setup is in **[SYNC-SETUP.md](SYNC-SETUP.md)**; the script is in
**[`sync/Code.gs`](sync/Code.gs)**.

> The sync link lets anyone who has it read and edit the board (including camper
> names), so share it only with your camp staff.

If you'd rather not set that up, the `Save file` / `Load file` buttons still let
you move a board between computers by hand.

## First-time setup

1. Open `index.html`.
2. Edit the **camp name** in the header.
3. In the **Weather** panel, type your camp's `lat, lon` and press *Set* (or
   press *Locate* to use the device's location).
4. Add your campers/staff in **Roster · Sign-In**. In **Daily Schedule**, pick a
   day and platoon; the 2026 camp week is already loaded. Rename platoons once
   the campers choose names, and tweak any activities as needed.
5. In **Heat Condition · WBGT**, enter a meter reading or press *Use weather
   estimate* to set the heat flag for the day.
6. In the **Incident Report Log**, log incidents by hand or connect your Google
   Form: publish the responses sheet to the web as CSV (File → Share → Publish to
   web → the responses tab → CSV), paste that link, and tick *Auto-import*. New
   form submissions then appear on the board automatically.
7. Click **Save file** whenever you want a portable backup.

## Notes

- All data stays on your device (browser storage) plus any files you save. The
  only network call is to the National Weather Service, for the weather panel.
- **Reset board** clears everything on the current computer — export a `Save file`
  first if you might want it back.
