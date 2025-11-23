import { test, expect } from '@playwright/test';
import { add } from '../../utils/helpers';

test('should add numbers correctly', () => {
  const sum = add(1, 2);
  expect(sum).toBe(3);
});
