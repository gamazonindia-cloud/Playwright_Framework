import { Page } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

export const keywords = {
  'Open Home Page': async (page: Page) => {
    const home = new HomePage(page);
    await home.goto();
  },
  'Click Get Started': async (page: Page) => {
    const home = new HomePage(page);
    await home.getStarted();
  },
  'Verify Installation Heading': async (page: Page) => {
    const home = new HomePage(page);
    return await home.isInstallationHeadingVisible();
  },
};
