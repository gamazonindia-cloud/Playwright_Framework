import { Page } from '@playwright/test';

import Keyword_Library from '../../keywords/FusionKeywords';
const config = require('./config.dev.global.js');

class LoginToOracleApplication {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async login(username: string, password: string) {
    Keyword_Library.SetPage(this.page);
    await Keyword_Library.OpenBrowser({ url: config.baseURL });
    await Keyword_Library.Web_TypeByText({ label: 'User ID', value: username, partial: false, index: 0 });
    await Keyword_Library.Web_TypeByText({ label: 'Password', value: password, partial: false, index: 0 });
    await Keyword_Library.Web_ClickByText({ label: 'Sign In', partial: true, index: 1 });
  }
}

export { LoginToOracleApplication };