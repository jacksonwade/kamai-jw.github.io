const SITE = {

  name:   'Kamai Jackson-Wade',
  role:   'Researcher',
  github: 'https://github.com/jacksonwade',
  email:  'kamaijacksonwade [at] gmail.com',   // plain text on Contact; [at] defeats scrapers. '' to hide

  // Home page: name plus one short line.
  // Words (or a phrase) wrapped in {curly braces} are underlined and link to Research.
  hero: 'I work on {mean-field games}.',

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
    'I work on mean-field games where the agents are physically constrained, like robotic swarms, interacting particles, or even financial markets.',
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
  posts: [
    {
      title:   'On solving problems nobody asked me to solve',
      slug:    'on-solving-problems',
      date:    'Jul 2026',
      tag:     'Essay',
      summary: 'Why am I doing any of this?',
      image:   '/assets/img/pick-06-morris.jpg',
      body: `
Most of the work I do in Machine Learning starts as a question nobody was paying me to answer. That is a good signal. Funds and frontier labs don't have time to research an idea no one else has had, and in those ideas lies their indispensable value to me, my edge. If a fund beats me to the work, the interesting part has already been decided for me. Not a fan.

I jump on an idea as soon as possible, although they usually come to me when I am doing something completely unrelated to machine learning and/or quantitative finance. Most of my research aims to solve things about the State of The Art (SOTA) that annoy me, i.e. gaps between what a model should do and what it actually does, and ideas that feel and are obvious but I cannot find written down anywhere.

## Why I bother

I like to win on my own terms. The problems chosen for you tend to be the ones already close to solved. The frontier of my fields are fast-paced. 

So this blog is where I think out loud. It will be snippets of research, written plainly. I would rather be wrong in public than tidy in private. Better yet, not wrong at all.
`,
    },
    {
      title:   'A note on noisy information',
      slug:    'noisy-information',
      date:    'Jun 2026',
      tag:     'Research',
      summary: "It's noisy, what did you expect me to say?",
      image:   '/assets/img/pick-02-constellation.jpg',
      body: `

A lot of real-time decisions get made with information that is incomplete, late, and partly wrong. 

## The point

You do not have to remove the noise to use it. The shape of the uncertainty is itself information. A decision that stays correct across the plausible versions of the world tends to beat one tuned perfectly to a single guess.

That is essentially at the forefront of what I work on, namely Mean-Field Games.
`,
    },
  ],

};
