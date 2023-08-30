[![E2E Tests](https://github.com/bjartejensen/book-app/actions/workflows/e2e-tests.yml/badge.svg)](https://github.com/bjartejensen/book-app/actions/workflows/e2e-tests.yml)

[![Component tests](https://github.com/bjartejensen/book-app/actions/workflows/component-tests.yml/badge.svg)](https://github.com/bjartejensen/book-app/actions/workflows/component-tests.yml)

[![Linting Angular](https://github.com/bjartejensen/book-app/actions/workflows/linting.yml/badge.svg)](https://github.com/bjartejensen/book-app/actions/workflows/linting.yml)

# BookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Structure of the app

The main functionality has been set up in the book-store module. (the only feature module in this project)

The module consist of four folders:

- data-access: Containing data service and NgRx store related entities
- feature: Two smart components (frontpage and book-page) to tie the business logic together
- model: Interfaces, types and constants used througout the workflow
- ui: dumb-components with no, or limited, dependencies and with rendering as primary responsibility

The book-store module is lazy-loaded in the app as specified in the `app-rounting.module.ts`.

## Solid

Throughout the application I have tried to separate responsibility between components. The SMART/DUMB component distinction is an important way to structure and delegate the responsibility, where DUMB component only receives data via @Input() and only emits data via @Output().

Leveraging Angular’s dependency injection mechanism allows for injection of interfaces rather than class instances. This is an important feature because we can provision highly tailored api’s to SMART components in need of a certain slice of a service, in turn adhering to both the Interface Segregation Principle and Dependency Inversion Principle. (and indirectly also staying in line with Liskov’s substitution principle)

## Testing

Testing have been conducted as `component-testing` at the UI-component level and `E2E-test` on the Feature-component level and all testing is done in Cypress.

A priliminary GitHub Actions workflow has been set up for `linting` and `component-testing` and `E2E-test`.

## External Dependencies

- Angular Material

- NgRx - state management

- Cypress - component- and E2E testing framework

  #### Angular Material

  I almost always use Angular Material in projects for four main reasons:

  - Angular Material components
  - Angular Material Cdk
  - Typography: Simplyfing typography and centralize styling of text, in turn simplifying the local .scss-style sheets
  - Theming: Easy to configure themes hereby enforcing a unified look and feel throughout your app

  #### NgRx

  I strive to code as reactively and declarative as possible. By using NgRx, setting up a closed circuit of asynchronous data streams is a lot more feasible than maintaining a suite of subjects and observables. The use of NgRx thus simplifies data stream subscription, handling of observable streams and in turn code readability. In my view setting up NgRx for the main async data flow is always time well spent, no matter the initial size or scope.
