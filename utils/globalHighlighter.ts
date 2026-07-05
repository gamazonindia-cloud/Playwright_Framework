import { Page } from "@playwright/test";

export async function enableClickHighlight(page: Page) {
  await page.addInitScript(() => {

    function highlight(element: HTMLElement) {

      const originalBorder = element.style.border;
      const originalBoxShadow = element.style.boxShadow;
      const originalBackground = element.style.backgroundColor;

      // LTI Mindtree Orange
      //element.style.border = "4px solid #F58220";
      //element.style.boxShadow = "0 0 20px #F58220";
      //element.style.backgroundColor = "rgba(245,130,32,0.15)";

      
// LTM Orange Highlight
element.style.border = "5px solid #F58220";
element.style.boxShadow = "0 0 30px #F58220";
element.style.backgroundColor = "rgba(245,130,32,0.15)";


      setTimeout(() => {
        element.style.border = originalBorder;
        element.style.boxShadow = originalBoxShadow;
        element.style.backgroundColor = originalBackground;
      }, 2500);
    }

    // Highlight Clicks
    document.addEventListener(
      "click",
      (event) => {
        const target = event.target as HTMLElement;
        if (target) {
          highlight(target);
        }
      },
      true
    );

    // Highlight Text Entry
    document.addEventListener(
      "input",
      (event) => {
        const target = event.target as HTMLElement;

        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement
        ) {
          highlight(target);
        }
      },
      true
    );

    // Highlight when field gets focus
    document.addEventListener(
      "focus",
      (event) => {
        const target = event.target as HTMLElement;

        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLTextAreaElement ||
          target.getAttribute("role") === "textbox"
        ) {
          highlight(target);
        }
      },
      true
    );
  });
}