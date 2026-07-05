import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

dotenv.config();

const bddTestDir = defineBddConfig({
  paths: ['features/**/*.feature'],
  require: ['steps/**/*.ts', 'baseTest.ts'],
  //require: ['steps/**/*.ts'],
  //importTestFrom: './bddTest.ts',
});

export default defineConfig({

  testDir: './tests',
  testMatch: ['**/*test.ts', '**/*.spec.ts'],

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['line'],
    ['allure-playwright']
  ],

  //timeout: 90 * 1000,
timeout: 1200000,
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on',
    headless: false,
  },

  projects: [

    // Existing Playwright Tests
    {
      name: 'chromium',

      testDir: './tests',

      use: {
        viewport: null,

        launchOptions: {
          args: ['--start-maximized'],
          slowMo: 1000,
        },
      },
    },

    // BDD Tests
    {
      name: 'bdd-tests',

      testDir: '.features-gen',

      testMatch: '**/*.spec.js',
    },

  ],

});