// import { test } from "@playwright/test";
// import { HealEngine } from "../utils/HealEngine";

// test("Healwright Validation", async ({ page }) => {

//   const heal = new HealEngine(page);

//   await page.setContent(`
//     <html>
//       <body>
//         <button>Login</button>
//       </body>
//     </html>
//   `);

//   await heal.click(
//     "#WrongLocator123",
//     "Login"
//   );

// });
import { test } from "@playwright/test";
import { HealEngine } from "../utils/HealEngine";

test("Real Healwright Validation", async ({ page }) => {

  const heal = new HealEngine(page);

  await page.setContent(`
      <button id="btnLogin">
        Navigator
      </button>
  `);

  await heal.click(
      "#WrongNavigatorLocator",
      "Navigator"
  );

});