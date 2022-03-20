// git clone https://github.com/Postavshik/ngx-cypress-test.git
// git clone https://github.com/Nodosy/ngx-cypress-test.git
// npm install
// npm start

// https://docs.cypress.io/guides/getting-started/installing-cypress
// npm install cypress --save-dev
// npx cypress open

// git init (if you need to create project)
// git config --global user.name "Your Name"
// git config --global user.email "yourname@example.com"
// git config --global init.defaultBranch main
// git config --global color.ui auto
// git config --get user.name
// git config --get user.email
// git config --list
// git config --list --global
// cat ~/.gitconfig
// ls ~/.ssh/id_rsa.pub
// ssh-keygen -C <youremail>
// cat ~/.ssh/id_rsa.pub
// https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection

// git status
// git add .
// git status
// git commit -m "test: add cypress e2e testing framework"
// -m means message

// redefine the origin remote to be associated with your fork, by running:
// git remote set-url origin https://github.com/Nodosy/ngx-cypress-test

// Verify that the remote URL has changed.
// git remote -v

// git push origin master
// git push origin main

// git branch
// git branch -C new_branch
// git checkout new_branch
// git push origin HEAD to push the branch with same name

// https://docs.cypress.io/guides/getting-started/installing-cypress
// https://docs.cypress.io/guides/references/configuration
// https://globster.xyz/
// cypress.json
// {
//     "baseUrl": "https://localhost:4200",
//     "ignoreTestFiles": "**/{1-getting-started,2-advanced-examples}/*",
//     "viewportHeight": 768,
//     "viewportWidth": 1024
// }
// 720 x 1200

// support/index.js თავიდან ჯერ ეს ფაილი ეშვება.
// support/commands.js ხშირად გამოყენებადი ფუნქციები სხვადასხვა ტესტში.
// cypress.json საწყისი პარამეტრების შესაცვლელად გამოიყენება.

// context();
// vs code დაგვეხმარება მეთოდების cypress intelicence ამოცნობაში
/// <reference types="cypress" />
// describe("Our first suite", () => {
//     describe("Our suite section", () => {
//         beforeEach("code for every test", () => {
// repetetive code
//         })
//         it("some test name", () => {

//         })
//         t("some test name", () => {

//         })
//         it("some test name", () => {

//         })
//     })
//     it("first test", () => {

//     })
//     it("second test", () => {

//     })
//     it("third test", () => {

//     })
// });

// https://mochajs.org/

describe("Our first suite", () => {
  // first argument is the name of the test
  it("first test", () => {
    // Visit a page
    cy.visit("/");
    // Query for an element, To find this element by its contents
    // https://docs.cypress.io/api/commands/contains
    // https://filiphric.com/contains-an-overlooked-gem-in-cypress
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // cypress uses jqury selection engine under the hood

    // by tag name
    cy.get("input");

    // by id
    cy.get("#inputEmail");

    // by class name
    cy.get(".input-full-width");

    // by attribute name
    cy.get("[placeholder]");

    // by attribute name and value
    cy.get('[placeholder="Email"]');

    // by class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]');

    // by tag name and attribute value
    cy.get('input[placeholder="Email"]');

    // by two different attributes
    cy.get('[placeholder="Email"][fullwidth]');

    // by tag name, attribute with value, id and class name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width');

    // the most recommended way by cypress is to create your own
    cy.get('[data-cy="inputEmail1"]');
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // თუ ბევრი ელემენტია, მოძებნის სპეციფიკურს, თუ უნიკალური იდენტიფიაკტორი გააჩნია.
    // .contains(selector, content)
    cy.contains('[status="warning"]', "Sign in");

    // https://docs.cypress.io/guides/references/error-messages#cy-failed-because-the-element-cannot-be-interacted-with
    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find("nb-checkbox")
      .click();
    // parent ეძებს ერთი საფეხურით მაღლა, ხოლო parents ადის ბოლომდე სანამ არ იპოვის
    // .find() ელემენტის შთამომავალს პოულობს

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');

    // selector-attribute:
    // p[lang] {
    // 	background-color: orange;
    // }
    // p[lang="fr"] { /* exact value */
    // 	background-color: blue;
    // }
    // p[lang^="ge"] { /* value begins with prefix */
    // 	background-color: red;
    // }
    // p[lang$="g"] { /* value ends with sufix */
    // 	background-color: yellow;
    // }
    // p[lang*="w"] { /* value contains */
    // 	background-color: brown;
    // }
    // p[lang*="w" i] { /* value contains default, lowercase, uppercase */
    // 	background-color: brown;
    // }
    // p[lang~="en-us"] { /* specific value in list */
    // 	color: red;
    // }

    // .click() - Click a DOM element.
    // .type() - Type into a DOM element.
    // .blur() - Make a focused DOM element blur.
    // .focus() - Focus on a DOM element.
    // .clear() - Clear the value of an input or textarea.
    // .check() - Check checkbox(es) or radio(s).
    // .uncheck() - Uncheck checkbox(es).
    // .select() - Select an <option> within a <select>.
    // .dblclick() - Double-click a DOM element.
    // .rightclick() - Right-click a DOM element.
  });

  // 🔥🔥🔥
  it("then and wrap methods", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // assertion - მტკიცება
    // cy.contains('nb-card', 'Using the Grid').find('[for=inputEmail1]').should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid').find('[for=inputPassword2]').should('contain', 'Password')
    // cy.contains('nb-card', 'Basic form').find('[for=exampleInputEmail1]').should('contain', 'Email address')
    // cy.contains('nb-card', 'Basic form').find('[for=exampleInputPassword1]').should('contain', 'Password')

    // სელენიუმისმაგვარის დროს იქნებოდა ასე:
    // const firstForm = cy.contains('nb-card', 'Using the Grid');
    // მაგრამ აქ ასე არ შეიძლება და უნდა იყოს ასე:
    cy.contains("nb-card", "Using the Grid").then((firstForm) => {
      const emailLabelFirst = firstForm.find("[for=inputEmail1]").text();
      const passwordLabelFirst = firstForm.find("[for=inputPassword2]").text();
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");

      // after using "then" object is saved to jquery object and then using jquery methods and chai assortions
      // cypress asynchronous
      cy.contains("nb-card", "Basic form").then((secondForm) => {
        const passwordLabelSecondText = secondForm
          .find("[for=exampleInputPassword1]")
          .text();
        expect(passwordLabelFirst).to.equal(passwordLabelSecondText);

        // back to cypress from jquery
        cy.wrap(secondForm)
          .find("[for=exampleInputPassword1]")
          .should("contain", "Password");
      });
    });
  });

  // 🔥🔥🔥
  it("invoke command", () => {
    // how to get text value
    // how to get attribute value
    // how to invoke properties
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // 1
    cy.get('[for="exampleInputEmail1"]').should("contain", "Email address");

    // 2 jquery way
    cy.get('[for="exampleInputEmail1"]').then((label) => {
      expect(label.text()).to.equal("Email address");
    });

    // 3 cypress way, variant 1
    cy.get('[for="exampleInputEmail1"]')
      .invoke("text")
      .then((text) => {
        expect(text.to.equal("Email address"));
      });

    // variant 2
    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      .should("contain", "checked");

    // or variant 3
    cy.contains("nb-card", "Basic form")
      .find("nb-checkbox")
      .click()
      .find(".custom-checkbox")
      .invoke("attr", "class")
      .then((className) => {
        expect(className.to.contain("checkbox"));
      });
  });

  // invoke variant 4
  it("assert property", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();
        // 🔥
        let dateAssert = selectDayFromCurrent(2);
        cy.get("nb-calendar-day-picker").contains("17").click();
        cy.wrap(input)
          .invoke("prop", "value")
          .should("contain", "Aug 17, 2021");
        // 🔥
        cy.wrap(input).should("have.value", dateAssert);
      });
  });

  // 🔥🔥🔥
  // checkboxes and radio buttons
  it("radio button", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("nb-card", "Using the Grid")
      .find('[type="radio"]')
      .then((radioButtons) => {
        cy.wrap(radioButtons)
          .first()
          .check({ force: true })
          .should("be.checked");

        cy.wrap(radioButtons).eq(1).check({ force: true });

        // eq(0) is the same as first()
        cy.wrap(radioButtons).eq(0).should("not.be.checked");

        cy.wrap(radioButtons).eq(2).should("be.disabled");
      });
  });

  it("checkbox", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();

    // cy.get('[type="checkbox"]').check({froce: true})
    cy.get('[type="checkbox"]').eq(0).click({ force: true });
    cy.get('[type="checkbox"]').eq(1).check({ force: true });
  });

  // 🔥🔥🔥
  // dropdown and lists
  it("lists and dropdown", () => {
    cy.visit("/");

    // cy.get("nb-layout-header nb-select").click();
    // cy.get("[ng-reflect-value='dark']").click();

    // cy.get("nav nb-select").click();
    // cy.get(".options-list").contains("Dark").click();
    // cy.get("nav nb-select").should("contain", "Dark");
    // cy.get("nb-layout-header nav").should(
    //   "have.css",
    //   "background-color",
    //   "rgb(34, 43, 69)"
    // );

    cy.get("nav nb-select").then((dropdown) => {
      cy.wrap(dropdown).click();
      cy.get(".options-list nb-option").each((listItem, index) => {
        const itemText = listItem.text().trim();

        const colors = {
          Light: "rgb(255, 255, 255)",
          Dark: "rgb(34, 43, 69)",
          Cosmic: "rgb(50, 50, 80)",
          Corporate: "rgb(255, 255, 255)",
        };

        cy.wrap(listItem).click();
        cy.wrap(dropdown).should("contain", itemText);
        cy.get("nb-layout-header nav").should(
          "have.css",
          "background-color",
          colors[itemText]
        );
        if (index < 3) {
          cy.wrap(dropdown).click();
        }
      });

      // nned to check out: https://docs.cypress.io/api/commands/select

      // https://docs.cypress.io/guides/references/assertions
    });
  });

  // 🔥🔥🔥
  // web tables
  it("web tables", () => {
    cy.visit("/");
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();

    // 1
    cy.get("tbody")
      .contains("tr", "Larry")
      .then((tableRow) => {
        cy.wrap(tableRow).find(".nb-edit").click();
        cy.wrap(tableRow).find("[placeholder='Age']").clear().type("25");
        cy.wrap(tableRow).find(".nb-checkmark").click();
        cy.wrap(tableRow).find("td").eq(6).should("contain", "25");
      });

    // 2
    cy.get("thead").find(".nb-plus").click();
    cy.get("thead")
      .find("tr")
      .eq(2)
      .then((tableRow) => {
        cy.wrap(tableRow).find("[placeholder='First Name']").type("Artem");
        cy.wrap(tableRow).find("[placeholder='Last Name']").type("Bondar");
        cy.wrap(tableRow).find(".nb-checkmark").click();
      });
    cy.get("tbody tr")
      .first()
      .find("td")
      .then((tableColumns) => {
        cy.wrap(tableColumns).eq(2).should("contain", "Artem");
        cy.wrap(tableColumns).eq(3).should("contain", "Bondar");
      });

    // 3
    cy.get("thead [placeholder='Age']").type("20");
    cy.wait(500);
    cy.get("tbody tr").each((tableRow) => {
      cy.wrap(tableRow).find("td").eq(6).should("contain", 20);
    });

    const ages = [20, 30, 40];
    cy.wrap(ages).each((age) => {
      cy.get("thead [placeholder='Age']").clear().type(age);
      cy.wait(500);
      cy.get("tbody tr").each((tableRow) => {
        cy.wrap(tableRow).find("td").eq(6).should("contain", age);
      });
    });

    const ages_2 = [20, 30, 40, 200];
    cy.wrap(ages_2).each((age) => {
      cy.get("thead [placeholder='Age']").clear().type(age);
      cy.wait(500);
      cy.get("tbody tr").each((tableRow) => {
        if (age === 200) {
          cy.wrap(tableRow).should("contain", "No data found");
        } else {
          cy.wrap(tableRow).find("td").eq(6).should("contain", age);
        }
      });
    });
  });

  // 🔥🔥🔥
  it.only("datepicker", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Datepicker").click();

    function selectDayFromCurrent(day) {
      let date = new Date();
      date.setDate(date.getDate() + day);
      let futureDay = date.getDate();
      let futureMonth = date.toLocaleString("default", { month: "short" });
      let dateAssert =
        futureMonth + " " + futureDay + ", " + date.getFullYear();

      cy.get("nb-calendar-navigation")
        .invoke("attr", "ng-reflect-date")
        .then((dateAttribute) => {
          if (!dateAttribute.includes(futureMonth)) {
            cy.get("[data-name='chevron-right']").click();
            selectDayFromCurrent(day);
          } else {
            cy.get("nb-calendar-day-picker [class='day-cell ng-star-inserted']")
              .contains(futureDay)
              .click();
          }
        });
      return dateAssert;
    }

    cy.contains("nb-card", "Common Datepicker")
      .find("input")
      .then((input) => {
        cy.wrap(input).click();

        let dateAssert = selectDayFromCurrent(300);
        cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
      });
  });
  // it.only("datepicker", () => {
  //   cy.visit("/");
  //   cy.contains("Forms").click();
  //   cy.contains("Datepicker").click();

  //   let date = new Date();
  //   date.setDate(date.getDate() + 40);
  //   let futureDay = date.getDate();
  //   let futureMonth = date.toLocaleString("default", { month: "short" });
  //   let dateAssert = futureMonth + " " + futureDay + ", " + date.getFullYear();

  //   cy.contains("nb-card", "Common Datepicker")
  //     .find("input")
  //     .then((input) => {
  //       cy.wrap(input).click();
  //       function selectDayFromCurrent() {
  //         cy.get("nb-calendar-navigation")
  //           .invoke("attr", "ng-reflect-date")
  //           .then((dateAttribute) => {
  //             if (!dateAttribute.includes(futureMonth)) {
  //               cy.get("[data-name='chevron-right']").click();
  //               selectDayFromCurrent();
  //             } else {
  //               cy.get(
  //                 "nb-calendar-day-picker [class='day-cell ng-star-inserted']"
  //               )
  //                 .contains(futureDay)
  //                 .click();
  //             }
  //           });
  //       }
  //       selectDayFromCurrent();
  //       cy.wrap(input).invoke("prop", "value").should("contain", dateAssert);
  //     });
  // });

  // 🔥🔥🔥
  // Popups and Tooltips
  it.only("tooltip", () => {
    cy.visit("/");
    cy.contains("Modal & Overlays").click();
    cy.contains("Tooltip").click();

    cy.contains("nb-card", "Colored Tooltips").contains("Default").click();
    cy.get("nb-tooltip").should("contain", "This is a tooltip");
  });
  it("dialog box", () => {
    cy.visit("/");
    cy.contains("Tables and Data").click();
    cy.contains("Smart Table").click();

    // #1
    cy.get("tbody tr").first().find(".nb-trash").click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).text.equal("Are you sure you want to delete?");
    });
    // #2
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("tbody tr")
      .first()
      .find(".nb-trash")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          "Are you sure you want to delete?"
        );
      });
  });
  // 🔥🔥🔥
  // https://docs.cypress.io/guides/references/assertions

  // 🔥🔥🔥
  // page object model

  // 🔥🔥🔥
  // commands.js
  // to use across all your tests
  // https://docs.cypress.io/api/cypress-api/custom-commands
});
