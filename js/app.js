// =========================================
// funny-site/js/app.js
// All logic + data in one module
// =========================================

const DATA = {
  jokes: {
    dad: [
      "I'm reading a book on anti-gravity. It's impossible to put down.",
      "Did you hear about the claustrophobic astronaut? He just needed a little space.",
      "Why don't skeletons fight each other? They don't have the guts.",
      "I used to hate facial hair, but then it grew on me.",
      "What do you call a fake noodle? An impasta.",
      "Why did the scarecrow win an award? He was outstanding in his field.",
      "I'm on a whiskey diet. I've lost three days already.",
      "What do you call a bear with no teeth? A gummy bear.",
      "Parallel lines have so much in common. It's a shame they'll never meet.",
      "My wife said I should do lunges to stay in shape. That would be a big step forward."
    ],
    programming: [
      "Why do programmers prefer dark mode? Because light attracts bugs.",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
      "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
      "Why did the programmer quit his job? He didn't get arrays.",
      "There are 10 types of people: those who understand binary and those who don't.",
      "A programmer's wife tells him: 'Go to the store and buy a loaf of bread. If they have eggs, buy a dozen.' He returns with 13 loaves.",
      "Why do Java developers wear glasses? Because they don't C#.",
      "My code works, I have no idea why. My code doesn't work, I have no idea why.",
      "Rubber duck debugging: because the duck knows more than your PM.",
      "It works on my machine™ — the universal deployment strategy."
    ],
    dark: [
      "My grandfather has the heart of a lion and a lifetime ban from the zoo.",
      "I have a stepladder. I never knew my real ladder.",
      "Give a man a plane ticket, he flies for a day. Push him out at 30,000 feet, he flies for the rest of his life.",
      "My therapist says I have a preoccupation with vengeance. We'll see about that.",
      "The cemetery is so popular, people are dying to get in.",
      "I visited my friend at the hospital. He's on a liquid diet. The jelly was wobbling.",
      "Why don't cemeteries have WiFi? Because people are dying to get in.",
      "My favorite childhood memory is building sandcastles with my grandfather. Until my mother hid his urn.",
      "I was digging in the garden when I found a chest full of gold coins. I was about to run inside and tell my wife, but then I remembered why I was digging the hole.",
      "The doctor gave me one year to live, so I shot him. The judge gave me 15 years. Problem solved."
    ],
    pun: [
      "I used to be a banker but I lost interest.",
      "I'm reading a book about mazes. I got lost in it.",
      "The guy who invented the door knocker got a no-bell prize.",
      "I'm on a seafood diet. I see food and I eat it.",
      "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "What do you call a factory that makes okay products? A satisfactory.",
      "I'm terrified of elevators. I'm taking steps to avoid them.",
      "The rotation of earth really makes my day.",
      "I bought some shoes from a drug dealer. I don't know what he laced them with but I've been tripping all day."
    ],
    antijoke: [
      "A horse walks into a bar. The bartender asks, 'Why the long face?' The horse, incapable of understanding human language, shits on the floor and leaves.",
      "What did the farmer say when he lost his tractor? 'Where's my tractor?'",
      "Why did the boy drop his ice cream? Because he was hit by a bus.",
      "Knock knock. Who's there? Dave. Dave who? Dave from work, I left my laptop there.",
      "A man walks into a bar. His alcohol dependency is tearing his family apart.",
      "What's red and smells like blue paint? Red paint.",
      "Why did the girl fall off the swing? Because she had no arms.",
      "What do you call a dog with no legs? Doesn't matter, it's not coming.",
      "Roses are red, violets are blue, I have a gun, get in the van.",
      "A duck walks into a pharmacy and says 'Put it on my bill.' The pharmacist says 'We don't do that.' The duck leaves."
    ],
    oneliner: [
      "I threw a boomerang a few years ago. I now live in constant fear.",
      "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
      "I invented a new word: Plagiarism.",
      "Velcro — what a rip-off.",
      "I'm not lazy, I'm on energy-saving mode.",
      "The early bird gets the worm, but the second mouse gets the cheese.",
      "I'm not arguing, I'm just explaining why I'm right.",
      "My bed is a magical place where I suddenly remember everything I forgot to do.",
      "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
      "Common sense is like deodorant. The people who need it most never use it."
    ]
  },
  facts: {
    animal: [
      "Wombats poop cubes. Actual cubes. So they don't roll away.",
      "A group of flamingos is called a 'flamboyance'.",
      "Otters hold hands while sleeping so they don't drift apart.",
      "Cows have best friends and get depressed when separated.",
      "A shrimp's heart is in its head.",
      "Turtles can breathe through their butts.",
      "Penguins propose with a pebble.",
      "Octopuses have three hearts and blue blood.",
      "A snail can sleep for three years.",
      "Elephants are the only mammals that can't jump."
    ],
    history: [
      "Cleopatra lived closer in time to the iPhone than to the building of the Great Pyramid.",
      "The last execution by guillotine in France was in 1977 — same year Star Wars came out.",
      "Oxford University is older than the Aztec Empire.",
      "Ketchup was sold as medicine in the 1830s.",
      "The shortest war lasted 38 minutes (Britain vs Zanzibar, 1896).",
      "Ancient Romans used urine as mouthwash.",
      "The Great Emu War (1932): Australia lost to emus.",
      "Vikings didn't wear horned helmets — that was a 19th century opera costume.",
      "The Eiffel Tower was meant to be temporary.",
      "President Garfield could write Latin with one hand and Greek with the other simultaneously."
    ],
    science: [
      "Bananas are berries. Strawberries are not.",
      "There are more trees on Earth than stars in the Milky Way.",
      "A day on Venus is longer than its year.",
      "Honey never spoils. Edible 3000-year-old honey exists.",
      "Your stomach gets a new lining every few days or it would digest itself.",
      "Octopuses have nine brains and blue blood.",
      "A single cloud can weigh over a million pounds.",
      "Hot water freezes faster than cold water (Mpemba effect).",
      "You're made of stardust. Literally.",
      "The human brain named itself."
    ],
    space: [
      "A day on Venus is longer than a year on Venus.",
      "Neutron stars can spin 600 times per second.",
      "There's a planet where it rains glass sideways at 5400 mph.",
      "The footprints on the Moon will last 100 million years.",
      "One million Earths fit inside the Sun.",
      "Space smells like seared steak and raspberries (astronauts say).",
      "A teaspoon of neutron star weighs 6 billion tons.",
      "There are more stars than grains of sand on Earth.",
      "Saturn's rings are 90% water ice.",
      "You get taller in space (spine expands)."
    ],
    food: [
      "Honey is bee vomit.",
      "Cashews grow on apples.",
      "Pineapples take 2-3 years to grow.",
      "Bananas are curved because they grow toward the sun.",
      "Carrots were originally purple.",
      "Almonds are seeds, not nuts.",
      "Peanuts aren't nuts, they're legumes.",
      "Watermelons are 92% water.",
      "Apples float because 25% air.",
      "Broccoli has more protein per calorie than steak."
    ],
    body: [
      "Your nose is always in your vision. Your brain just ignores it.",
      "You produce ~1L of saliva daily.",
      "Your tongue print is unique like fingerprints.",
      "Babies have 300 bones, adults 206 (they fuse).",
      "You're 1cm taller in the morning.",
      "The human eye can distinguish 10 million colors.",
      "Your liver can regenerate from 25% of its tissue.",
      "You shed 40lbs of skin in a lifetime.",
      "Your blood vessels could circle Earth 2.5x.",
      "You blink ~4.2 million times a year."
    ]
  },
  roasts: {
    self: [
      "You're the reason the gene pool needs a lifeguard.",
      "You have the perfect face for radio. And the perfect voice for silent films.",
      "You're not stupid, you just have bad luck thinking.",
      "I'd explain it to you but I don't have crayons.",
      "You're the human equivalent of a participation trophy.",
      "Your secrets are safe with me. I never listen.",
      "You bring everyone so much joy when you leave the room.",
      "I'm not saying you're dumb, but you'd need a GPS to find your own ass with both hands.",
      "You're proof that evolution can go in reverse.",
      "If ignorance is bliss, you must be the happiest person alive."
    ],
    code: [
      "Your code works? Congrats, you've achieved the bare minimum.",
      "Your variable names: x, y, z, temp, temp2, final_final_v2. Masterpiece.",
      "Comments? We don't do that here. The code IS the documentation.",
      "'It works on my machine' — the universal deployment strategy.",
      "Your commit messages: 'fix', 'fix2', 'fix3', 'please work', 'final', 'final_final'.",
      "Copy-paste from Stack Overflow? More like Copy-paste from Hope Overflow.",
      "Your CSS: !important everywhere. Because specificity is for people who plan.",
      "console.log debugging: the only testing framework you know.",
      "Technical debt? You call it 'features for v2'.",
      "Your regex is write-only. Nobody reads it twice. Not even you."
    ],
    life: [
      "Your life choices called. They want a refund.",
      "You're the main character in a show nobody watches.",
      "Your procrastination has procrastination.",
      "You treat deadlines like suggestions.",
      "Your '5 more minutes' is a unit of currency.",
      "You have the attention span of a goldfish on espresso.",
      "Your diet is 80% anxiety, 20% caffeine.",
      "You're not 'busy', you're just disorganized.",
      "Your sleep schedule is a cry for help.",
      "You've started 47 hobbies. Finished 0."
    ],
    browser: [
      "47 tabs open. You read 0 of them.",
      "Your bookmarks bar is a graveyard of 'read later'.",
      "Incognito mode doesn't hide your shame from your ISP.",
      "You have 12 extensions. You use 2.",
      "Your download folder: 3,847 files. 3,840 are 'Screenshot (1).png'.",
      "You search 'how to center a div' weekly.",
      "Your autocomplete knows you better than your therapist.",
      "You have a tab from 2019 'just in case'.",
      "Dark mode at 3AM. Your retinas called, they quit.",
      "You customize your terminal more than you code."
    ],
    productivity: [
      "You're reading this instead of working.",
      "'Quick break' — 3 hours ago.",
      "Your to-do list has a to-do list.",
      "You organize your Notion workspace instead of doing work.",
      "Pomodoro: 25 min work, 3 hours 'research'.",
      "You've optimized your workflow to do less work faster.",
      "'I'll start Monday' — every Monday since 2019.",
      "You have 47 productivity apps. Productivity: 0.",
      "You color-code your calendar. The colors are the only work done.",
      "You're 'waiting for inspiration'. It's not coming."
    ],
    social: [
      "Your last text: 'k'. Conversation ender supreme.",
      "You rehearse conversations in the shower. You still mess them up.",
      "You wave back at someone waving behind you.",
      "'You too' — waiter: 'Enjoy your meal'.",
      "You laugh at jokes you don't understand.",
      "Your phone screen time: 8hrs. 'I don't have time'.",
      "You type 'haha' with a straight face.",
      "You stalk your ex's dog's Instagram.",
      "You have 1,247 unread emails. 'I'll get to them'.",
      "You mute people instead of unfollowing. Coward."
    ]
  },
  quotes: {
    philosophy: [
      "The only constant is change, except for vending machine prices.",
      "Life is like a box of chocolates — mostly disappointing, occasionally nuts.",
      "We're all just walking each other home, but some of us have terrible GPS.",
      "The universe doesn't care about you. But it has great aesthetics.",
      "Wisdom is knowing a tomato is a fruit. Wisdom++ is not putting it in fruit salad.",
      "Everything happens for a reason. Sometimes the reason is you make bad decisions.",
      "You miss 100% of the shots you don't take. You also miss 90% of the ones you do.",
      "The journey of a thousand miles begins with a single step. Then blisters.",
      "We're all just atoms pretending to be people. Some atoms try harder.",
      "Time is a flat circle. Your mistakes are a spiral."
    ],
    startup: [
      "We're disrupting the paradigm of synergistic blockchain-enabled AI-driven Web3 solutions.",
      "Move fast and break things. Preferably not production.",
      "Our MVP: Minimum Viable Pivot.",
      "We're the Uber for X. X = something nobody asked for.",
      "Series A: $10M for a todo app with blockchain.",
      "Growth hacking: spam but make it sound strategic.",
      "Our moat: we have no competitors because nobody wants this.",
      "Pivot #7: We're now a SaaS for left-handed hamsters.",
      "Hockey stick growth: flat for 3 years, then bankruptcy.",
      "We don't have users, we have 'early adopters who haven't churned yet'.",
      "Culture: free kombucha, mandatory fun, 80hr weeks."
    ],
    gym: [
      "No pain no gain. Also no brain no pain.",
      "Squat until you see Jesus. Or your knees explode.",
      "Real men lift. Real smart men stretch.",
      "Your warmup is my max. Your form is my nightmare.",
      "Creatine: because water weight is still weight.",
      "Leg day? Never heard of her.",
      "Pre-workout: meth but legal and flavored.",
      "Mirror selfies > actual workout. Science.",
      "Your protein fumes are a biohazard.",
      "Rest days are for the weak. Injuries are for the strong."
    ],
    relationship: [
      "Treat her like a queen. Chess queen: moves in all directions, kills everything.",
      "Communication is key. Also listening. Also not being weird. Good luck.",
      "Love is blind. Marriage is the glasses.",
      "Your type: emotionally unavailable. My type: you.",
      "Red flags are just red fabric in the wind.",
      "Netflix and chill ≠ marriage material.",
      "The ick: when they say 'pacifically' instead of 'specifically'.",
      "Soulmates exist. They're just dating someone else.",
      "Compromise: you do what she wants.",
      "If they wanted to, they would. Period."
    ],
    lifehack: [
      "Put a dry towel in the dryer. Faster drying. You're welcome.",
      "Freeze grapes. Eat them frozen. Nature's popsicles.",
      "Dental floss cuts cake perfectly. Also cuts your finger.",
      "Microwave your lemon 10s. More juice. Science.",
      "Wooden spoon on pot stops boil-over. Witchcraft.",
      "Rubber band on paint can = brush wiper. Genius.",
      "Chill onion = no tears. Or wear goggles. Look cool.",
      "Bread clip fixes flip-flop blowout. MacGyver.",
      "Pizza box = plates. No dishes. Smart.",
      "Sleep with socks on. Fall asleep faster. Fight me."
    ],
    corporate: [
      "Let's circle back and touch base offline to synergize our deliverables.",
      "We need to leverage our core competencies to maximize stakeholder value.",
      "Per my last email... (passive aggression activated)",
      "Let's take this offline. Translation: you're wrong publicly.",
      "Quick sync? That's a 2hr meeting with no agenda.",
      "ASAP = yesterday. EOD = midnight. 'Urgent' = someone forgot.",
      "We're building the plane while flying it. Into a mountain.",
      "Low-hanging fruit. The only fruit we ever reach.",
      "Let's not boil the ocean. But we will anyway.",
      "This is a no-brainer. Famous last words."
    ]
  },
  wyr: {
    classic: [
      "Fight 1 horse-sized duck OR 100 duck-sized horses?",
      "Never use the internet again OR never use AC/heating?",
      "Always say everything on your mind OR never speak again?",
      "Fingers for toes OR toes for fingers?",
      "Eat only pizza forever OR never eat pizza again?",
      "Be 4ft tall OR 8ft tall?",
      "No music ever OR no movies ever?",
      "Always 10min late OR always 20min early?",
      "Teleport anywhere OR read minds?",
      "Live without phone OR live without toilet paper?"
    ],
    gross: [
      "Drink a gallon of mayo OR eat a stick of butter?",
      "Lick a public toilet seat OR chew used gum from under a table?",
      "Never shower again OR never brush teeth?",
      "Eat a raw onion like an apple OR drink a cup of hot sauce?",
      "Wear wet socks forever OR have permanent sand in underwear?",
      "Sweat mayo OR cry ketchup?",
      "Poop in the only toilet at a party OR hold it 6hrs?",
      "Eat hair from a drain OR drink sweat from a gym sock?",
      "Vomit on your crush OR have them vomit on you?",
      "Never wipe OR never wash hands?"
    ],
    superpower: [
      "Fly at walking speed OR run at 100mph but only backwards?",
      "Invisible but only when nobody looks OR super strength but only for opening jars?",
      "Read minds but hear everyone's thoughts 24/7 OR teleport but arrive naked?",
      "Talk to animals but they're all jerks OR speak all languages but only in rhymes?",
      "Time travel but only to your most embarrassing moments OR see future but only 10s ahead?",
      "Super hearing but only for people talking about you OR super smell but everything smells like farts?",
      "Shapeshift but only into inanimate objects OR breathe underwater but only in puddles?",
      "Stop time but age normally OR never age but sleep 20hrs/day?",
      "Telekinesis but only for spoons OR x-ray vision but only through lead?",
      "Immortality but alone forever OR normal life with 100 great friends?"
    ],
    tech: [
      "Tabs OR spaces? (Wrong answer = exile)",
      "Vim OR Emacs? (War crimes either way)",
      "Dark mode everything OR light mode everything?",
      "Mac OR Windows? (Linux users: 'I use Arch btw')",
      "React OR Vue? (Svelte: 'am I a joke to you?')",
      "TypeScript OR 'I'll add types later' (never)",
      "Monorepo OR polyrepo? (Yes)",
      "CI/CD that works OR 'it works on my machine'?",
      "Tests OR 'we'll add them later'? (Never)",
      "Refactor OR rewrite? (Rewrite. Always rewrite.)"
    ],
    social: [
      "Accidentally send risky text to mom OR post it on LinkedIn?",
      "Walk in on parents OR have them walk in on you?",
      "Forget name of person you're talking to OR call them by ex's name?",
      "Laugh at funeral OR cry at comedy show?",
      "Trip in front of crush OR spill drink on them?",
      "Reply-all to company email OR send 'per my last email' to CEO?",
      "Voice crack during presentation OR pants split?",
      "Wave at stranger waving at someone behind you OR ignore friend waving?",
      "Food in teeth all day OR toilet paper on shoe?",
      "Say 'you too' to 'happy birthday' OR 'enjoy your meal'?"
    ],
    existential: [
      "Know when you'll die OR how you'll die?",
      "Be forgotten immediately after death OR remembered for something terrible?",
      "Live 1000 years alone OR 40 years with true love?",
      "Reset life with current knowledge OR continue not knowing?",
      "Everyone reads your thoughts OR everyone sees your search history?",
      "Be the smartest person in every room OR the happiest?",
      "Experience every emotion intensely OR feel nothing ever?",
      "Know absolute truth of universe OR live in blissful ignorance?",
      "Relive your best day forever OR skip to a random new life?",
      "Be a background character in everyone's story OR the villain in yours?"
    ]
  }
};

const ICONS = {
  jokes: { dad: '👨', programming: '💻', dark: '💀', pun: '📝', antijoke: '😐', oneliner: '⚡' },
  facts: { animal: '🦙', history: '🏛️', science: '🔬', space: '🪐', food: '🍕', body: '🧠' },
  roasts: { self: '🪞', code: '💻', life: '🎭', browser: '🌐', productivity: '📋', social: '💬' },
  quotes: { philosophy: '🧘', startup: '🚀', gym: '💪', relationship: '💘', lifehack: '💡', corporate: '💼' },
  wyr: { classic: '⚖️', gross: '🤢', superpower: '🦸', tech: '⌨️', social: '😳', existential: '🕳️' }
};

const CARD_LABELS = {
  jokes: { dad: 'Dad Jokes', programming: 'Programming', dark: 'Dark Humor', pun: 'Puns', antijoke: 'Anti-Jokes', oneliner: 'One-Liners' },
  facts: { animal: 'Animals', history: 'History', science: 'Science', space: 'Space', food: 'Food', body: 'Body' },
  roasts: { self: 'Self Roast', code: 'Code Roast', life: 'Life Roast', browser: 'Browser Roast', productivity: 'Productivity', social: 'Social Roast' },
  quotes: { philosophy: 'Philosophy', startup: 'Startup Wisdom', gym: 'Gym Motivation', relationship: 'Relationships', lifehack: 'Life Hacks', corporate: 'Corporate Speak' },
  wyr: { classic: 'Classic', gross: 'Gross', superpower: 'Superpowers', tech: 'Tech', social: 'Social', existential: 'Existential' }
};

const BTN_TEXTS = {
  jokes: { dad: 'Hit Me', programming: 'Compile', dark: 'Risk It', pun: 'Slice', antijoke: 'Whatever', oneliner: 'Zing' },
  facts: { animal: 'Teach Me', history: 'Time Travel', science: 'Expand Brain', space: 'Launch', food: 'Digest', body: 'Inspect' },
  roasts: { self: 'Destroy Me', code: 'Lint My Soul', life: 'Judge Me', browser: 'Expose Me', productivity: 'Call Me Out', social: 'Cringe Check' },
  quotes: { philosophy: 'Enlighten Me', startup: 'Disrupt', gym: 'Pump Iron', relationship: 'Swipe Right', lifehack: 'Optimize', corporate: 'Circle Back' },
  wyr: { classic: 'Choose', gross: 'Suffer', superpower: 'Decide', tech: 'Debug Life', social: 'Cringe', existential: 'Spiral' }
};

const PRANKS = [
  () => { document.body.style.filter = 'hue-rotate(180deg)'; setTimeout(() => document.body.style.filter = '', 3000); return '🌈 Your eyes... they bleed rainbow now.'; },
  () => { document.body.style.transform = 'rotate(180deg)'; setTimeout(() => document.body.style.transform = '', 2000); return '🔄 World flipped. You\'re welcome.'; },
  () => { const fonts = ['"Comic Sans MS"', 'Papyrus', 'Impact', 'Wingdings']; document.body.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)]; setTimeout(() => document.body.style.fontFamily = '', 3000); return '📝 Font crime committed.'; },
  () => { document.querySelectorAll('.card, .panel, .hero, .nav-btn, .prank-btn, .egg, .toast').forEach(el => { el.style.transition = 'all .1s'; el.style.transform = `rotate(${Math.random() * 10 - 5}deg)`; }); setTimeout(() => document.querySelectorAll('*').forEach(el => el.style.transform = ''), 2000); return '🌊 Everything is wobbly now.'; },
  () => '🎉 CONGRATULATIONS! You won NOTHING! Absolutely nothing! Enjoy your prize of disappointment!',
  () => { document.body.style.cursor = 'url("data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2232%22 height=%2232%22><text y=%2224%22>🤡</text></svg>"), auto'; setTimeout(() => document.body.style.cursor = '', 5000); return '🤡 You are now a certified clown. Cursor included.'; },
  () => { const ctx = new (window.AudioContext || window.webkitAudioContext)(); const o = ctx.createOscillator(); o.frequency.value = 440; o.connect(ctx.destination); o.start(); setTimeout(() => { o.stop(); ctx.close(); }, 200); return '🔊 *BEEP* System check complete. You\'re still here.'; },
  () => '🎭 The real prank was the friends we made along the way. Just kidding, there is no prank. Or is there?'
];

const FOOTER_QUOTES = [
  'Refresh for a surprise',
  'Your mom visited this site',
  '404: Seriousness not found',
  'Powered by chaos and caffeine',
  'May your code compile first try',
  'The cake is a lie',
  'This site uses 100% organic pixels',
  'Built with 🤡 and zero dependencies',
  'Works offline. Because the internet is overrated.',
  'No AI was harmed in the making of this website'
];

// =========================================
// State
// =========================================
const state = {
  activePanel: 'jokes',
  stats: { jokes: 0, facts: 0, roasts: 0, quotes: 0, wyr: 0 },
  eggClicks: 0,
  konamiBuffer: [],
  toastTimer: null
};

// =========================================
// DOM Elements
// =========================================
const els = {
  nav: document.getElementById('nav'),
  navBtns: document.querySelectorAll('.nav-btn'),
  panels: document.querySelectorAll('.panel'),
  grids: {
    jokes: document.getElementById('jokesGrid'),
    facts: document.getElementById('factsGrid'),
    roasts: document.getElementById('roastsGrid'),
    quotes: document.getElementById('quotesGrid'),
    wyr: document.getElementById('wyrGrid')
  },
  statEls: {
    jokes: document.getElementById('totalJokes').querySelector('.stat-num'),
    facts: document.getElementById('totalFacts').querySelector('.stat-num'),
    roasts: document.getElementById('totalRoasts').querySelector('.stat-num'),
    quotes: document.getElementById('totalQuotes').querySelector('.stat-num')
  },
  toast: document.getElementById('toast'),
  prankBtn: document.getElementById('prankBtn'),
  egg: document.getElementById('egg'),
  footerQuote: document.getElementById('footerQuote')
};

// =========================================
// Utilities
// =========================================
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function showToast(text) {
  clearTimeout(state.toastTimer);
  els.toast.textContent = text;
  els.toast.classList.add('show');
  state.toastTimer = setTimeout(() => els.toast.classList.remove('show'), 7000);
}

function emojiBurst(count = 25) {
  const emojis = ['😂','🤣','😭','💀','🤡','😎','🥴','🤯','😵','💩','👻','🎃','🤖','👽','🎪','🌈','✨','💫','🔥','💯'];
  const layer = document.getElementById('emojiLayer');
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const e = document.createElement('div');
      e.className = 'emoji';
      e.textContent = rand(emojis);
      e.style.left = Math.random() * 100 + 'vw';
      e.style.animationDuration = (Math.random() * 2 + 2) + 's';
      e.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
      layer.appendChild(e);
      setTimeout(() => e.remove(), 4500);
    }, i * 25);
  }
}

function updateStat(key) {
  state.stats[key]++;
  if (els.statEls[key]) {
    els.statEls[key].textContent = state.stats[key];
  }
}

function saveStats() {
  try { localStorage.setItem('funnyStats', JSON.stringify(state.stats)); } catch {}
}

function loadStats() {
  try {
    const saved = JSON.parse(localStorage.getItem('funnyStats') || '{}');
    Object.assign(state.stats, saved);
    Object.keys(state.stats).forEach(k => {
      if (els.statEls[k]) els.statEls[k].textContent = state.stats[k];
    });
  } catch {}
}

// =========================================
// Render Cards
// =========================================
function renderCards(panel) {
  const data = DATA[panel];
  const grid = els.grids[panel];
  if (!data || !grid) return;

  grid.innerHTML = '';
  Object.keys(data).forEach(key => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${CARD_LABELS[panel][key]}: ${BTN_TEXTS[panel][key]}`);

    const icon = ICONS[panel][key] || '✨';
    const label = CARD_LABELS[panel][key] || key;
    const btnText = BTN_TEXTS[panel][key] || 'Go';
    const desc = getDesc(panel, key);

    card.innerHTML = `
      <h3>${icon} ${label}</h3>
      <p>${desc}</p>
      <button class="card-btn" type="button" aria-label="${btnText} ${label}">${btnText}</button>
    `;

    const btn = card.querySelector('.card-btn');
    const trigger = () => {
      const item = rand(data[key]);
      const prefix = getPrefix(panel);
      showToast(`${prefix} ${item}`);
      emojiBurst();
      updateStat(panel === 'wyr' ? 'quotes' : panel);
      saveStats();
    };

    btn.addEventListener('click', (e) => { e.stopPropagation(); trigger(); });
    card.addEventListener('click', trigger);
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });

    grid.appendChild(card);
  });
}

function getDesc(panel, key) {
  const descs = {
    jokes: { dad: 'So bad they\'re good. Eye-roll guaranteed.', programming: 'Only devs will get these. Sorry not sorry.', dark: 'For the morally flexible. Don\'t @ me.', pun: 'Wordplay so sharp it cuts.', antijoke: 'The punchline is there is no punchline.', oneliner: 'Quick. Painful. Effective.' },
    facts: { animal: 'Nature is weird. Let me prove it.', history: 'Humans have always been chaotic.', science: 'Reality is stranger than fiction.', space: 'The void has jokes too.', food: 'You eat weird stuff daily.', body: 'Your meat suit is wild.' },
    roasts: { self: 'Roast me harder, daddy.', code: 'Your git history called. It\'s disappointed.', life: 'Your choices. All of them.', browser: 'I see your 47 tabs. We need to talk.', productivity: 'You\'re reading this instead of working.', social: 'Your last text was cringe. I know.' },
    quotes: { philosophy: 'Sounds profound. Means nothing.', startup: 'Disrupt the paradigm. Synergy. Blockchain.', gym: 'No pain no gain. Bro science approved.', relationship: 'From someone who\'s never dated.', lifehack: 'Questionably useful tips.', corporate: 'Circle back. Touch base. Let\'s sync.' },
    wyr: { classic: 'Timeless impossible choices.', gross: 'Equally disgusting options.', superpower: 'Cool powers with terrible catches.', tech: 'Developer dilemmas.', social: 'Awkward situations only.', existential: 'Question your reality.' }
  };
  return descs[panel]?.[key] || '';
}

function getPrefix(panel) {
  const prefixes = { jokes: '🎭', facts: '🧠', roasts: '🔥', quotes: '💭', wyr: '🤔' };
  return prefixes[panel] || '';
}

// =========================================
// Navigation
// =========================================
function switchPanel(target) {
  state.activePanel = target;
  els.navBtns.forEach(btn => {
    const isActive = btn.dataset.target === target;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', isActive);
  });
  els.panels.forEach(panel => {
    const isActive = panel.id === target;
    panel.hidden = !isActive;
    if (isActive) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// =========================================
// Prank Button
// =========================================
function triggerPrank() {
  const prank = rand(PRANKS);
  const msg = prank();
  showToast(msg);
  emojiBurst(40);
}

// =========================================
// Easter Eggs
// =========================================
function handleEgg() {
  state.eggClicks++;
  if (state.eggClicks >= 7) {
    showToast('🥚 You found the golden egg! You win... absolutely nothing. But you have honor.');
    emojiBurst(50);
    state.eggClicks = 0;
  }
}

const KONAMI = [38,38,40,40,37,39,37,39,66,65];
function handleKonami(e) {
  state.konamiBuffer.push(e.keyCode);
  if (state.konamiBuffer.length > 10) state.konamiBuffer.shift();
  if (state.konamiBuffer.join(',') === KONAMI.join(',')) {
    showToast('🎮 KONAMI CODE ACTIVATED! You are now a 10x developer. God mode: ON.');
    document.body.style.animation = 'rainbow 2s linear infinite';
    emojiBurst(60);
    setTimeout(() => document.body.style.animation = '', 10000);
    state.konamiBuffer = [];
  }
}

// =========================================
// Background Canvas
// =========================================
function initCanvas() {
  const canvas = document.getElementById('bg');
  const ctx = canvas.getContext('2d');
  let w, h, particles = [], mouse = { x: -9999, y: -9999 };

  function resize() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      const hue = Math.random() * 60 + 330;
      this.color = `hsl(${hue}, 80%, 60%)`;
      this.opacity = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      const dx = mouse.x - this.x, dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 150) {
        const force = (150 - dist) / 150 * 0.05;
        this.x -= dx / dist * force;
        this.y -= dy / dist * force;
      }
      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function init() {
    particles = [];
    const count = Math.min(120, Math.floor((w * h) / 15000));
    for (let i = 0; i < count; i++) particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = (1 - dist / 100) * 0.08;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); init(); }, { passive: true });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  window.addEventListener('touchmove', e => { if (e.touches[0]) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; } }, { passive: true });

  resize(); init(); animate();
}

// =========================================
// Rainbow animation for Konami
// =========================================
const style = document.createElement('style');
style.textContent = '@keyframes rainbow { 0% { filter: hue-rotate(0deg); } 100% { filter: hue-rotate(360deg); } }';
document.head.appendChild(style);

// =========================================
// Init
// =========================================
function init() {
  loadStats();
  Object.keys(DATA).forEach(renderCards);
  switchPanel('jokes');

  // Nav
  els.navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.target));
  });

  // Prank
  els.prankBtn.addEventListener('click', triggerPrank);

  // Egg
  els.egg.addEventListener('click', handleEgg);

  // Konami
  document.addEventListener('keydown', handleKonami);

  // Canvas
  initCanvas();

  // Footer quote
  els.footerQuote.textContent = rand(FOOTER_QUOTES);

  // Share button fallback (if needed)
  if (navigator.share) {
    console.log('Web Share API available');
  }

  console.log('%c🤡 Funny People Only loaded', 'font-size: 20px; color: #ff006e;');
  console.log('%cKonami code: ↑↑↓↓←→←→BA', 'color: #8338ec;');
  console.log('%cClick the egg 7 times...', 'color: #ffbe0b;');
}

// =========================================
// Service Worker Registration (offline)
// =========================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

// =========================================
// Start
// =========================================
document.readyState === 'loading'
  ? document.addEventListener('DOMContentLoaded', init)
  : init();