import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['**/*test.ts', '**/*.spec.ts'],
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 
   reporter: [['list'], ['html', { open: 'never' }], ['allure-playwright']],
  timeout: 150 * 1000,
   use: {
     video: 'retain-on-failure',
     headless: !true,
     trace: 'on',
    launchOptions: {
   // args: ['--start-maximized'],
  },
     
   },
   

   
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        //...devices['Desktop Chrome'],//old code
          viewport: null,//new added
      launchOptions: {//new added
         args: ['--start-maximized'],//new added
        },
      },
    

    },
  ],
  
  
});
