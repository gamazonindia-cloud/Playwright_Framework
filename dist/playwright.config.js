"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
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
    use: {
        actionTimeout: 15000,
        navigationTimeout: 20000,
        video: 'retain-on-failure',
        trace: 'on',
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: { ...test_1.devices['Desktop Chrome'] },
        },
    ],
});
