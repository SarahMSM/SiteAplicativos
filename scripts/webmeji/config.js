// ✰ webmeji ✰
// little creatures that walk around your website =w=b
// inspired by shimeji, originally by Lars de Rooij
// not affiliated with any other shimeji projects
// last updated: 27 january 2026
// homepage: webmeji.neocities.org
//
// this file defines:
// - which webmeji spawn
// - which actions are allowed
// - what animations they have
// - how often actions occur

// spawning setup --------------------------------------------------
// define which creatures spawn on the page. remove any unwanted ones.
// each id must be unique
// if two of them overlap and pet and dragging interactions happen, only the one stated here last will get interacted with
window.SPAWNING = [
  { id: 'webmeji-0', config: 'SHIMEJI_CONFIG' },
  /*{ id: 'webmeji-1', config: 'MIKU_CONFIG' } (comentado caso não dê tempo de adicionar a Makima)*/
];

// base shimeji config ----------------------------------------------
// all configs should have same actions, but allowances can differ
window.SHIMEJI_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 200,
  jumpspeed: 150,

  // time in ms before standing back up after falling
  gettingupspeed: 2000,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["./scripts/webmeji/shimeji/shime1.png", "./scripts/webmeji/shimeji/shime2.png", "./scripts/webmeji/shimeji/shime3.png", "./scripts/webmeji/shimeji/shime2.png"],
    interval: 175, loops: 6},

  stand: {
    frames: ["./scripts/webmeji/shimeji/shime1.png"],
    interval: 200, loops: 1},

  spin: {
    frames: ["./scripts/webmeji/shimeji/shime1.png"],
    interval: 150, loops: 3},
  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames, by default happens after tripping and spinning
    loops: 6},

  forcethink: { // by default happens after dancing
    frames: ["./scripts/webmeji/shimeji/shime27.png", "./scripts/webmeji/shimeji/shime28.png"],
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["./scripts/webmeji/shimeji/shime15.png", "./scripts/webmeji/shimeji/shime16.png", "./scripts/webmeji/shimeji/shime17.png", "./scripts/webmeji/shimeji/shime16.png"],
    interval: 200},

  drag: {
    frames: ["./scripts/webmeji/shimeji/shime5.png", "./scripts/webmeji/shimeji/shime7.png", "./scripts/webmeji/shimeji/shime5.png", "./scripts/webmeji/shimeji/shime6.png", "./scripts/webmeji/shimeji/shime8.png", "./scripts/webmeji/shimeji/shime6.png"],
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["./scripts/webmeji/shimeji/shime4.png"],
    interval: 200, loops: 2},

  fallen: {
    frames: ["./scripts/webmeji/shimeji/shime19.png", "./scripts/webmeji/shimeji/shime18.png"],
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb',
    'fall','fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: -1, // below 0 = never jump; above 1 = jump almost always
 
};


// second config ----------------------------------------------------

window.MIKU_CONFIG = {
  // pet   = hover animation (hard to see on mobile)
  // drag  = click or touch to pick up
  // top / left / right allow edge interactions
  // remove whichever you don't want, the only exceptions is that bottom must always be enabled
  ALLOWANCES: ['pet', 'drag', 'bottom', 'top', 'left', 'right'],

  // movement and physics -------------------------------------------
  // values are pixels movements per frame
  walkspeed: 50,
  fallspeed: 150,
  jumpspeed: 200,

  // time in ms before standing back up after falling
  gettingupspeed: 3500,

  // common idle and movement animations on the bottom edge ---------
  // these are the most frequently used actions
  // interval = time between frames (ms)
  // loops = how many times the frame sequence repeats
  // randomizeDuration sets random timeframe for actions, tune min and max to desired length
  walk: {
    frames: ["./scripts/webmeji/miku/shime1.png", "./scripts/webmeji/miku/shime2.png", "./scripts/webmeji/miku/shime3.png", "./scripts/webmeji/miku/shime2.png"], 
    interval: 175, loops: 6},

  stand: {
    frames: ["./scripts/webmeji/miku/shime1.png"], 
    interval: 1000, loops: 1},

  sit: {
    frames: ["./scripts/webmeji/miku/shime11.png"], 
    interval: 1000, loops: 1,
    randomizeDuration: true, min: 3000, max: 11000},

  spin: {
    frames: ["./scripts/webmeji/miku/shime1.png"], 
    interval: 150, loops: 3},

  // behavior flow control ------------------------------------------
  // prevents awkward transitions like dancing immediately after sitting
  forcewalk: { // uses the walking frames
    loops: 6},

  forcethink: {
    frames: ["./scripts/webmeji/miku/shime27.png", "./scripts/webmeji/miku/shime28.png"], 
    interval: 500, loops: 2},

  // user interaction animations ------------------------------------
  pet: {
    frames: ["./scripts/webmeji/miku/shime15.png", "./scripts/webmeji/miku/shime16.png", "./scripts/webmeji/miku/shime17.png"], 
    interval: 400},

  drag: {
    frames: ["./scripts/webmeji/miku/shime7.png", "./scripts/webmeji/miku/shime5.png", "./scripts/webmeji/miku/shime8.png", "./scripts/webmeji/miku/shime6.png"], 
    interval: 210},

  // falling and recovery animations --------------------------------
  falling: {
    frames: ["./scripts/webmeji/miku/shime10.png", "./scripts/webmeji/miku/shime18.png"], 
    interval: 200, loops: 2},

  fallen: {
    frames: ["./scripts/webmeji/miku/shime9.png", "./scripts/webmeji/miku/shime4.png", "./scripts/webmeji/miku/shime19.png"], 
    interval: 250, loops: 1},

  // action frequency and decision logic ----------------------------
  // anytime an action needs to be chosen, it randomly picks one of these
  // thus, having an action in here more than others, makes it happen more
  ORIGINAL_ACTIONS: [
    'walk','walk','walk','walk','walk','walk',
    'spin','spin','spin',
    'sit','sit',
    'dance','dance','dance','dance','dance',
    'trip'
  ],

  EDGE_ACTIONS: [
    'hang','hang',
    'climb','climb','climb','climb','climb',
    'fall'
  ],

  // when chosing an action on the bottom, it has this change to jump to an edge (if allowed)
  // this is standalone from the other action select
  JUMP_CHANCE: 0, // below 0 = never jump; above 1 = jump almost always
};
