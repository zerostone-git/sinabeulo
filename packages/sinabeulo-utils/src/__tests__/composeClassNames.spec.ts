import { composeClassNames } from '..';

let source = {
  class1: '',
  class2: '',
  class3: '',
};
beforeEach(() => {
  source = {
    class1: 'class1',
    class2: 'class2',
    class3: 'class3',
  };
});

describe('composeClassNames', () => {
  test('No compose.', () => {
    expect(composeClassNames(source)).toMatchObject({
      class1: 'class1',
      class2: 'class2',
      class3: 'class3',
    });
  });

  test('Compose.', () => {
    expect(
      composeClassNames(
        source,
        {
          class1: 'class2 class3',
          class3: 'class2 class3',
        },
        {
          class1: 'class2-1 class3-1',
          class3: 'class2-1 class3-1',
        },
        {
          class1: 'class2-2 class3-2',
          class2: 'class2-2 class3-2',
        }
      )
    ).toMatchObject({
      class1: 'class1 class2 class3 class2-1 class3-1 class2-2 class3-2',
      class2: 'class2 class2-2 class3-2',
      class3: 'class3 class2 class2-1 class3-1',
    });
  });
});
