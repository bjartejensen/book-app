[![Component tests](https://github.com/bjartejensen/book-app/actions/workflows/component-tests.yml/badge.svg)](https://github.com/bjartejensen/book-app/actions/workflows/component-tests.yml)

[![Linting Angular](https://github.com/bjartejensen/book-app/actions/workflows/linting.yml/badge.svg)](https://github.com/bjartejensen/book-app/actions/workflows/linting.yml)

# BookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

The application contains the following functionality:

- Build with mobile responsiveness in mind via CSS-grid and appropriate media queries.

## Testing

Testing have been conducted as `component-testing` at the UI-component level and `E2E-test` on the Feature-component level and all testing is done in Cypress.

A priliminary GitHub Actions workflow has been set up for `linting` and `component-testing`. `E2E-test` has been run locally.

## NgRx

In addition, I have strived to code up the solution as reactively and declarative as possible. By using NgRx the current solution aims at setting up a closed circuit of asynchronous data streams via NgRx. This step simplifies data stream subscription, handling of observable streams and thus readability.

The integration of NgRx has consumed some start-up time, and may not a part of the original scope of this task. However, my experience is, that it's always time well spend to set up application-wide state management, almost no matter the initial size or scope. I hope you follow my line of thinking and prioritization.

## Structure of the app

The main functionality has been set up in the weather module. (the only feature module in this project)

The module consist of four folders:

- data-access: Containing data service and NgRx store related entities
- feature: One smart component (frontpage) to tie the business logic together
- model: Interfaces, types and constants used througout the workflow
- ui: dumb-components with no, or limited, dependencies and with rendering as primary responsibility

The weather module is lazy-loaded in the app as specified in the `app-rounting.module.ts`.

## External Dependencies

- Angular Material

- NgRx - state management

- Cypress - component- and E2E testing framework
