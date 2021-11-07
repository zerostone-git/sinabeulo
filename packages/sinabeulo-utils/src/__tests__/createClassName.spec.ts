import { createClassName } from '..';

describe('createClassName', () => {
  test('From string, string[], object', () => {
    expect(
      createClassName(
        'class1',
        'class2',
        {
          class3: true,
          class4: false,
          class5: true,
          class6: false,
        },
        ['class7', 'class8']
      )
    ).toBe('class1 class2 class3 class5 class7 class8');
  });
});
