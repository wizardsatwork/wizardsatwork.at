export const View = ({ logoAnimated }) =>
  svg(
    {
      id: 'hat',
      class: `anim${logoAnimated ? ' animated' : ''}`,
      x: '0px',
      y: '0px',
      viewBox: '0 0 720 800',
    },
    [
      linearGradient(
        {
          id: 'g2',
          gradientUnits: 'userSpaceOnUse',
          x1: '161',
          y1: '883',
          x2: '500',
          y2: '780',
        },
        [stop({ offset: '0' }), stop({ offset: '1' })],
      ),
      linearGradient(
        {
          id: 'g3',
          gradientUnits: 'userSpaceOnUse',
          x1: '808',
          y1: '470',
          x2: '448',
          y2: '368',
        },
        [stop({ offset: '0' }), stop({ offset: '1' })],
      ),
      linearGradient(
        {
          id: 'g4',
          gradientUnits: 'userSpaceOnUse',
          x1: '240',
          y1: '780',
          x2: '718',
          y2: '780',
        },
        [stop({ offset: '0' }), stop({ offset: '1' })],
      ),
      linearGradient(
        {
          id: 'g5',
          gradientUnits: 'userSpaceOnUse',
          x1: '376',
          y1: '772',
          x2: '570',
          y2: '605',
        },
        [stop({ offset: '0' }), stop({ offset: '1' })],
      ),
      polygon({
        class: 'p1',
        points: '586,1 586,89 720,89',
      }),
      polygon({
        class: 'p4',
        points: '480,800 240,560 0,800',
      }),
      polygon({
        class: 'p5',
        points: '240,561 480,800 718,560',
      }),
      polygon({
        class: 'p3',
        points: '240,347 240,693 586,693',
      }),
      polygon({
        class: 'p2',
        points: '586,1 240,347 586,693',
      }),
      g({ class: 'wand' }, [
        polygon({
          class: 'star',
          points:
            '501,537 453,502 455,442 407,477 351,457 369,514 333,561 392,561 426,610 453,551 443,559',
        }),
        polygon({
          class: 'stick',
          points: '594,692 585,701 443,559 453,551',
        }),
      ]),
    ],
  )
