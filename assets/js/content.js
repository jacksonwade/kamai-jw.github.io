const SITE = {

  name:   'Kamai Jackson-Wade',
  role:   'Researcher',
  github: 'https://github.com/jacksonwade',
  email:  'kamaijacksonwade [at] gmail.com',   // plain text on Contact; [at] defeats scrapers. '' to hide

  // Home page: name plus one short line.
  // Words (or a phrase) wrapped in {curly braces} are underlined and link to Research.
  hero: 'I work on {mean-field games}.',

  // Landing page (About-as-home): a short blurb, then News, then Latest publications.
  blurb: [
    'I work on mean-field games and statistical mechanics.',
    'I lead the team at Tausen Research.',
  ],
  news: [
    { date: 'August 2026', text: 'Incoming Quantitative Researcher at a US hedge fund, starting 2027.' },
    { date: 'July 2026',   text: 'Research Scientist Intern at Dubsof, Dublin.' },
    { date: 'April 2026',  text: 'Quantitative Strategist Spring Intern at Goldman Sachs, London.' },
  ],

  // About page paragraphs. First person, to match the rest of the site.
  about: [
    'My study is on mean-field game theory, especially what happens when the agents are physically constrained.',
    'This site collects my research and writing.',
  ],
  aboutImage:   '/assets/img/art-dai-inklandscape.jpg',   // full-bleed image on About (high-res ink landscape)
  contactImage: '/assets/img/pick-inness.jpg',        // Contact: Inness Moonrise, curtain-down reveal
  // Research page intro: the research-direction statement (shown above the list).
  // Field-level only, no unpublished specifics. Add/remove paragraphs freely.
  researchIntro: [
    'For any enquiries, you can get in contact via email.'
  ],

  // Research entries, ordered by importance (most important first).
  // Empty for now, by design: nothing goes here until it is on arXiv (or the
  // library is public). Until then the page shows the intro above plus an
  // empty-shelf note. To add one, drop a block in the shape below.
  //   {
  //     title:    'Paper or project title',
  //     slug:     'short-url',            // URL: /research/short-url
  //     category: 'ML',                   // short label, e.g. ML / Q-Fin
  //     year:     '2027',                 // optional date/year
  //     desc:     'One or two sentences.',
  //     image:    '/assets/img/foo.jpg',  // optional; shows on the left
  //     links: [ { label: 'View on arXiv', url: 'https://...' } ],
  //     body:  `... write-up in a backtick block, same markers as blog ...`,
  //   }
  research: [],

  // ---------------------------------------------------------------------------
  // PARKED / SALVAGED (Aug 2026). Kept for reference, not shown on the site.
  // Titan: parked, not abandoned. Going Critical: salvaged into a metrics tool
  // plus a data anchor for the market-making work; the paper as framed below is
  // not being written. Tails You Lose: parked to last (the Robust-Jump paper).
  // Restore any of these into `research: [ ... ]` if and when they ship.
  //
  //   {
  //     title: 'Titan', slug: 'titan', category: 'ML', year: '2026',
  //     desc: 'Continual learning couples two problems that are usually solved together but are in fact distinct: growing capacity efficiently over an unbounded stream, and not overwriting old knowledge when new gradients arrive. This work argues they should be treated separately, and proposes an architecture built on that split. Capacity should be earned, not allocated.',
  //     image: '/assets/img/pick-munch.jpg', links: [], body: [],
  //   },
  //   {
  //     title: 'Going Critical: Transfer Learning for Market Volatility via Neural Hawkes Pre-training on Synthetic Event Data',
  //     slug: 'going-critical', category: 'ML', year: '2026',
  //     desc: 'Market crisis data is scarce, which makes near-critical dynamics hard to calibrate. This work pre-trains a neural Hawkes process on abundant synthetic event data, then fine-tunes on real order book data, and studies the shared branching structure behind both.',
  //     image: '/assets/img/pick-inness.jpg', links: [], body: [],
  //   },
  //   {
  //     title: 'Tails You Lose: Adversarial Minimax Robust Control via Learned State-Dependent Lévy Exponent Fields',
  //     slug: 'tails-you-lose', category: 'Q-Fin', year: '2026',
  //     desc: 'Standard option pricing assumes you know the jump structure, which is exactly what breaks in a crisis. Rather than calibrate one fixed jump model, this treats the Lévy exponent as an unknown worst-case field and prices against it.',
  //     image: '/assets/img/pick-vesuvius.jpg', links: [], body: [],
  //   },
  // ---------------------------------------------------------------------------

  // Blog posts. Newest first. Each post:
  //   {
  //     title, date, tag, summary,
  //     slug:  'short-url',              // URL: /blog/short-url
  //     image: '/assets/img/x.jpg',      // optional
  //     links: [ { label, url } ],       // optional buttons on the post page
  //     body:  `...`,                    // write in the backtick block (see below)
  //   }
  //
  // Writing the body: just write. Put it between backticks ` ` and use:
  //   blank line      -> new paragraph
  //   ## Heading      -> a section heading
  //   > quote         -> a pull quote
  //   - item          -> a bullet list item
  //   ![caption](/assets/img/x.jpg)  -> an image with caption
  // Apostrophes and quotes work as-is, no escaping. (An array of block
  // objects still works too, if you ever want that instead.)
  posts: [],

};
