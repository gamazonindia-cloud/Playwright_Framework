/**
 * Centralized Locator Registry
 * Maps logical element names to primary selector + ordered fallbacks
 * Used for self-healing and resilience
 */

export interface LocatorDefinition {
  primary: string;
  fallbacks?: string[];
  description?: string;
}

export interface LocatorRegistry {
  [elementName: string]: LocatorDefinition;
}

/**
 * Global locator registry
 * Organize by page or feature
 */
export const locators: LocatorRegistry = {
  // Authentication Page
  'login.username': {
    primary: '[data-testid="username"]',
    fallbacks: ['#username', 'input[name="username"]', 'input[placeholder*="User"]'],
    description: 'Username input field on login page',
  },
  'login.password': {
    primary: '[data-testid="password"]',
    fallbacks: ['#password', 'input[name="password"]', 'input[placeholder*="Pass"]'],
    description: 'Password input field on login page',
  },
  'login.submit': {
    primary: '[data-testid="login-btn"]',
    fallbacks: ['button:has-text("Login")', '#loginBtn', 'button[type="submit"]'],
    description: 'Login submit button',
  },

  // Invoice Page
  'invoice.supplier': {
    primary: '[data-testid="supplier-select"]',
    fallbacks: ['#supplier', 'select[name="supplier"]', 'div.supplier-dropdown'],
    description: 'Supplier dropdown selector',
  },
  'invoice.supplierSite': {
    primary: '[data-testid="supplier-site"]',
    fallbacks: ['#supplierSite', 'input[name="supplierSite"]', 'input[placeholder*="Site"]'],
    description: 'Supplier Site input field',
  },
  'invoice.amount': {
    primary: '[data-testid="invoice-amount"]',
    fallbacks: ['#amount', 'input[name="amount"]', 'input[type="number"]'],
    description: 'Invoice amount input',
  },
  'invoice.submit': {
    primary: '[data-testid="submit-invoice"]',
    fallbacks: ['button:has-text("Submit")', '#submitBtn', 'button.submit-btn'],
    description: 'Invoice submit button',
  },

  // Common elements
  'common.successMessage': {
    primary: '[data-testid="success-msg"]',
    fallbacks: ['.alert-success', '.success', 'div:has-text("Success")'],
    description: 'Success message element',
  },
  'common.errorMessage': {
    primary: '[data-testid="error-msg"]',
    fallbacks: ['.alert-error', '.error', '.alert-danger'],
    description: 'Error message element',
  },
};

/**
 * Get a locator definition by name
 */
export function getLocator(name: string): LocatorDefinition | undefined {
  return locators[name];
}

/**
 * List all available locator names
 */
export function listLocators(): string[] {
  return Object.keys(locators);
}

/**
 * Register a new locator dynamically (e.g., from healed selectors)
 */
export function registerLocator(name: string, definition: LocatorDefinition): void {
  locators[name] = definition;
}
