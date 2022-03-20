import { onDatePickerPage } from "../support/pageObjects/datePickerPage";
import { onFormLayoutsPage } from "../support/pageObjects/formLayoutsPage";
import { navigateTo } from "../support/pageObjects/navigationPage";
import { onSmartTablePage } from "../support/pageObjects/smartTablePage";

describe("Test with Page Objects,", () => {
  beforeEach("open applicastion", () => {
    // cy.visit("/");
    cy.openHomePage();
  });
  it("verify navigation across the pages", () => {
    navigateTo.formLayoutPage();
    navigateTo.datePickerPage();
    navigateTo.toasterPage();
    navigateTo.smartTablePage();
    navigateTo.tooltipPage();
  });
  it.only("should submit inline and basic form and select tomorrow date in the calendar", () => {
    navigateTo.formLayoutPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail(
      "Artem",
      "test@test.gmail.com"
    );
    onFormLayoutsPage.submitFormWithEmailAndPassword(
      "test@test.com",
      "password"
    );
    navigateTo.datePickerPage();
    onDatePickerPage.selectCommonDatePickerDateFromToday(1);
    onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14);
    navigateTo.smartTablePage();
    onSmartTablePage.addNewRecordWithFirstAndLastName("Artem", "Bondar");
    onSmartTablePage.updateAgeByFirstName("Artem", "35");
    onSmartTablePage.deleteRowByIndex(1);
  });
});
