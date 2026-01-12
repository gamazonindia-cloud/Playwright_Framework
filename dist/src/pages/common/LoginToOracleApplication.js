"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginToOracleApplication = void 0;
const FusionKeywords_1 = __importDefault(require("../../keywords/FusionKeywords"));
const config = require('./config.dev.global.js');
class LoginToOracleApplication {
    constructor(page) {
        this.page = page;
    }
    async login(username, password) {
        await FusionKeywords_1.default.OpenBrowser(this.page, { url: config.baseURL });
        await FusionKeywords_1.default.Web_TypeByText(this.page, { label: 'User ID', value: username, partial: false, index: 0 });
        await FusionKeywords_1.default.Web_TypeByText(this.page, { label: 'Password', value: password, partial: false, index: 0 });
        await FusionKeywords_1.default.Web_ClickByText(this.page, { label: 'Sign In', partial: true, index: 1 });
    }
}
exports.LoginToOracleApplication = LoginToOracleApplication;
