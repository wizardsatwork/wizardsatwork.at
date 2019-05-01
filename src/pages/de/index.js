const state = {
  lang: 'de',
}

const View = (state, actions) => [
  Social,
  LanguageSwitch,
  KickStarter,

  div({ class: 'hex__container' }, [
    div({ class: 'hex hero' }, [Hex, WNWLogo]),

    div({ class: 'hex evocell' }, [
      Hex,
      div({ class: 'hex__content' }, [
        img({ src: '/img/evocell.png', alt: 'EvoCell' }),
        p([
          span(['EvoCell ist ein Abenteuer in einem', ' auf zellulären Automaten basierenden']),
          span({ class: 'add' }, [' und mit einem graphischen Spieleeditor erschaffenen']),
          span(' lebenden Universum'),
        ]),
        Link(
          {
            class: 'button',
            to: 'https://www.facebook.com/EvoCellEngine/',
          },
          'Jetzt mitspielen',
        ),
      ]),
    ]),

    div({ class: 'hex magicshifter' }, [
      Hex,
      div({ class: 'hex__content' }, [
        Link({ to: 'https://magicshifter.net' }, [
          img({ src: '/img/magicshifter.png', alt: 'MagicShifter' }),
          p('Der MagicShifter 3000 ist ein open source Zauberstab für Lichtmagie.'),
        ]),

        Link(
          {
            class: 'button',
            to: 'https://hackerspaceshop.com/products/magicshifter3000',
          },
          'Hol deinen MagicShifter',
        ),
      ]),
    ]),

    div({ class: 'hex about' }, [
      Hex,
      div({ class: 'hex__content annotated' }, [
        p('wir sind ein stamm von '),
        p('erfindern, programmierern,'),
        p('ingeneuren, philosophen,'),
        p('aktivisten, hackern, künstlern,'),
        p('clowns und wissenschaftlern.'),

        h2([p('wir sind hexen und'), p('zauberer bei der arbeit.')]),

        Link({ to: '/de/impressum/' }, 'impressum'),
      ]),
    ]),

    div({ class: 'hex small hexpaper' }, [
      div({ class: 'container' }, [
        Link({ class: 'hex__link', to: 'https://www.facebook.com/HexPapier/' }, [
          Hex,
          span('Hexpapier'),
        ]),
      ]),
    ]),
  ]),
]

module.exports = {
  state,
  View,
}
