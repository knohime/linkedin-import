import test from 'ava';

import { Skill, skillsFormater } from '../../formaters/skills';

test('Should return right array of formated object', t => {
  const data: any[] = [
    {
      Name: 'Javascript'
    },
    {
      Name: 'Typescript'
    }
  ];
  const expectedObject: Skill[] = [
    {
      name: 'Javascript'
    },
    {
      name: 'Typescript'
    }
  ];

  t.deepEqual(skillsFormater(data), expectedObject);
});

test('Should return empty array when data array is empty', t => {
  const data: any[] = [];
  const expectedObject: Skill[] = [];

  t.deepEqual(skillsFormater(data), expectedObject);
});
