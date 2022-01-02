import distinctClassName from '../distinctClassName';

describe('distinctClassName', () => {
  test('From string', () => {
    expect(
      distinctClassName(
        'class1 class2 class3 class4 class3 class2 class5 class6 class1'
      )
    ).toBe('class1 class2 class3 class4 class5 class6');
  });
  test('From string[]', () => {
    expect(
      distinctClassName([
        'class1',
        'class2',
        'class3',
        'class4',
        'class3',
        'class2',
        'class5',
        'class6',
        'class1',
      ])
    ).toBe('class1 class2 class3 class4 class5 class6');
  });
});
