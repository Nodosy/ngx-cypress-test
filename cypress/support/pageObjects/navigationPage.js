function selectGroupMenuItem(groupName) {
  cy.contains("a", "Form").then((menu) => {
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((attr) => {
        if (attr.includes("left")) {
          cy.wrap(menu).click();
        }
      });
  });
}
export class NavigationPage {
  formLayoutPage() {
    // ამას ვანაცვლებთ
    // cy.contains("Forms").click();
    // cy.contains("Form Layouts").click();
    // აი ამით:
    selectGroupMenuItem("Form");
    cy.contains("Form Layouts").click();
  }
  datePickerPage() {
    selectGroupMenuItem("Form");
    cy.contains("Datepicker").click();
  }
  toasterPage() {
    selectGroupMenuItem("Modal & Overlays");
    cy.contains("Toastr").click({ force: true });
    // Timed out retrying after 4050ms: cy.click() failed because this element:
    // is being covered by another element
    // Fix this problem, or use {force: true} to disable error checking.Learn more
    // https://docs.cypress.io/guides/references/error-messages#cy-failed-because-the-element-cannot-be-interacted-with
  }
  smartTablePage() {
    selectGroupMenuItem("Tables and Data");
    cy.contains("Smart Table").click({ force: true });
  }
  tooltipPage() {
    selectGroupMenuItem("Modal & Overlaya");
    cy.contains("Tooltip").click({ force: true });
  }
}

export const navigateTo = new NavigationPage();
