// =========================================================================
// HAMIEN LIVE NETWORK EVENTS REPOSITORY
// =========================================================================

const HAMIEN_EVENTS = [
  /* =========================================================================
     🔒 EVENT BLOCK SYNTAX
     =========================================================================
 {
    title: "",
    startDate: "",
    endDate: "",
    locationType: "",
    venue: "",
    description: ""
  },
  */
  /* =========================================================================
     🔒 EVENT BLOCK SYNTAX EXPLAINED
     =========================================================================
    {
    // MANDATORY: The main headline text of your session
    title: "Event Title Template",

    // MANDATORY: Write Year-Month-Day ("YYYY-MM-DD")
    // To include time, add "THH:MM:SSZ" using 24-hour time notation.
    startDate: "2026-11-20T14:30:00Z",

    // OMITTABLE: Remove this entire line if you don't have a specific finish time.
    // If included, the page will automatically render a clean clock range.
    endDate: "2026-11-20T16:00:00Z",

    // OMITTABLE: Remove this entire line if the location is completely unconfirmed.
    // Acceptable parameters (must be lowercase text inside quotes):
    // "online"    -> displays 🖥️ Online
    // "in-person" -> displays 📍 In-Person
    // "both"      -> displays both 🖥️ Online and 📍 In-Person badges side-by-side
    locationType: "both",

    // OMITTABLE: Remove this entire line if session is purely online or venue is unknown.
    // If included, this text automatically appends to the In-Person badge.
    venue: "Science Museum, London",

    // OMITTABLE: Remove this entire line if you have no text body notes.
    // Any web addresses typed here are turned into clickable links automatically.
    description: "Type event notes, sign-up forms, or Jiscmail links here: https://jiscmail.ac.uk"
  },

  */
  /* =========================================================================
     🔒 HIDDEN REFERENCE EXAMPLES (Commented out - copy these to add new events)
     =========================================================================
  {
    title: "Example A: Just a Date & Online Location",
    startDate: "2026-11-04", 
    locationType: "online", // Options: "online", "in-person", or "both"
    description: "Use this layout when a date is fixed but the time schedule is unconfirmed."
  },
  {
    title: "Example B: In-Person twilight session with specific venue",
    startDate: "2026-11-18T16:30:00Z",
    endDate: "2026-11-18T18:00:00Z", 
    locationType: "in-person",
    venue: "Science Museum, London", // Displays nicely as -> 📍 In-Person: Science Museum, London
    description: "Perfect for physical gatherings, museum workshops, or seminar rooms."
  },
  {
    title: "Example C: Hybrid Multi-Day track showing both individual badges",
    startDate: "2027-01-15T09:30:00Z",
    endDate: "2027-01-16T16:00:00Z", 
    locationType: "both", // Displays BOTH individual Online & In-person labels side-by-side
    venue: "Middlesex University", 
    description: "Use this when a session runs in a room and streams to a digital portal simultaneously."
  }
     ========================================================================= */


  // =========================================================================
  // 🚀 ACTIVE DISPLAYED EVENTS (Visible on your website right now)
  // =========================================================================
 {
    title: "Research in Progress 2025",
    startDate: "2025-02-22T09:43:00Z",
    endDate: "2025-02-22T18:00:00Z",
    locationType: "in-person",
    venue: "The Queen's College, Oxford",
    description: "The 2025 installment of the BSHM's annual Research in Progress event. Jason and Tom presented on Using History as a Pedagogical Tool for Enhancing Affective Development and Academic Performance in Year 7 and 8 Mathematics Classrooms. \n The programme for this event (including a link to the Book of Abstracts) is available here: https://web.archive.org/web/20251016185807/https://www.bshm.ac.uk/events/research-progress-5"
  },
 {
    title: "Talking Maths in Public 2025",
    startDate: "2025-08-27",
    endDate: "2025-08-30",
    locationType: "both",
    venue: "Warwick University, Coventry",
    description: "Tom ran a networking activity called Finding Maths in Museums on the final morning of 2025's TMiP conference. \n Tom wrote an article for the Aperiodical here: https://aperiodical.com/2026/05/talking-maths-in-coventry-transport-museum/."
  },
 {
    title: "MathsConf39: History of Mathematics themes in Maths Lessons: Why and How?",
    startDate: "2025-10-11",
    endDate: "",
    locationType: "in-person",
    venue: "Harris Academy, St John's Wood, London",
    description: "Jason and Tom provided a workshop at this one-day conference aimed at practising mathematics teachers."
  },
 {
    title: "Oxford History of Mathematics Forum talk: The Mathematicians' Library",
    startDate: "2026-01-21",
    endDate: "",
    locationType: "in-person",
    venue: "The Queen's College, Oxford",
    description: "Tom presented about his book, The Mathematicians' Library, to the Oxford History of Mathematics Forum. \n Find out about The Mathematicians' Library at https://tkbriggs.co.uk/other-projects/publications/the-mathematicians-library/"
  },
  {
    title: "Oxford History of Mathematics Forum talk: History in Mathematics Lessons (a research project)",
    startDate: "2026-02-25",
    endDate: "",
    locationType: "in-person",
    venue: "The Queen's College, Oxford",
    description: "Jason presented to the Oxford History of Mathematics Forum about his research project with Tom in which they taught a Year 7 and Year 8 class for a half-term, including history of maths themes in every lesson. The project took place at the end of 2024. \n A research paper on this project, published subsequently, is available at https://doi.org/10.1080/26375451.2026.2676448"
  }, 
  {
    title: "Research in Progress 2026",
    startDate: "2026-03-26",
    endDate: "",
    locationType: "in-person",
    venue: "The Queen's College, Oxford",
    description: "The BSHM's annual meeting at which researchers in a variety of themes within the history of mathematics present their ongoing work. \n An event report by Luke Wilkes is available at https://bshm.ac.uk/report-bshm-research-in-progress-2026/"
  },
  {
    title: "TEST",
    startDate: "2026-07-24",
    endDate: "",
    locationType: "both",
    venue: "Up a chimney",
    description: "Eventually I'll get this to work."
  },

];
