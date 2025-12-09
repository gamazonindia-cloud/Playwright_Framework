# Keyword-Driven Testing Framework

## Overview
This framework allows you to write tests using keywords without coding. Test flows are defined in JSON files that the framework executes automatically.

## Available Keywords

### Navigation
- **Navigate**: Navigate to a URL
  - `params.url`: Target URL

### Interactions
- **Click**: Click an element
  - `params.selector`: Element selector
- **Fill Field**: Fill a text input
  - `params.selector`: Input selector
  - `params.value`: Value to enter
- **Select Option**: Select from dropdown
  - `params.selector`: Dropdown selector
  - `params.value`: Option value
- **Check Checkbox**: Check a checkbox
  - `params.selector`: Checkbox selector
- **Uncheck Checkbox**: Uncheck a checkbox
  - `params.selector`: Checkbox selector

### Validations
- **Verify Text**: Verify element contains text
  - `params.selector`: Element selector
  - `params.expectedText`: Expected text
- **Verify Visible**: Verify element is visible
  - `params.selector`: Element selector
- **Verify Title**: Verify page title
  - `params.title`: Expected title text

### Wait Actions
- **Wait**: Wait for specified time
  - `params.milliseconds`: Time to wait
- **Wait For Selector**: Wait for element to appear
  - `params.selector`: Element selector
  - `params.timeout`: Max wait time (optional, default 30000ms)

## Test Definition Format

Create JSON files in `tests/definitions/` with this structure:

```json
{
  "name": "Test Name",
  "description": "Optional description",
  "steps": [
    {
      "keyword": "Navigate",
      "params": {
        "url": "https://example.com"
      },
      "description": "Optional step description"
    }
  ]
}
```

## Running Keyword-Driven Tests

1. Create a test definition JSON file
2. Create a test spec that loads and executes it
3. Run with: `npx playwright test`

## Future: No-Code UI
Your no-code UI will generate these JSON test definitions automatically, making testing accessible to everyone without coding!
