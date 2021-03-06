import test from 'ava';

import { Language, languagesMapper } from '../../mappers/languages';

test('Should return right array of formated object', (t) => {
  const data: any[] = [
    {
      Name: 'French',
      Proficiency: 'Native or bilingual proficiency',
    },
    {
      Name: 'English',
      Proficiency: 'Professional working proficiency',
    },
  ];
  const expectedObject: Language[] = [
    {
      name: 'French',
      proficiency: 'Native or bilingual proficiency',
    },
    {
      name: 'English',
      proficiency: 'Professional working proficiency',
    },
  ];

  t.deepEqual(languagesMapper(data), expectedObject);
});

test('Should return empty array when data array is empty', (t) => {
  const data: any[] = [];
  const expectedObject: Language[] = [];

  t.deepEqual(languagesMapper(data), expectedObject);
});
