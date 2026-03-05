import { expect, test } from 'vitest';
import { heyThere } from '../src/index';

const greet = `***************************************************************
************** Hey there! You're up and running! **************
***************************************************************`;

test('prints greeting', () => {
  expect(heyThere()).toBe(greet);
});
