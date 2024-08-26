[![tests](https://github.com/Metadrop/ddev-unlighthouse/actions/workflows/tests.yml/badge.svg)](https://github.com/Metadrop/ddev-lighthouse/actions/workflows/tests.yml) ![project is maintained](https://img.shields.io/maintenance/yes/2024.svg)

* [What is DDEV Unlighthouse Add-on?](#what-is-ddev-lighthouse-add-on)
* [Getting started](#getting-started)
* [Configuration](#configuration)
* [Running Tests](#running-tests)
* [Interpreting Results](#interpreting-results)

## What is DDEV Lighthouse Add-on?

This is a [DDEV](https://ddev.readthedocs.io) addon to run Unlighthouse in your site. [Unlighthouse](https://unlighthouse.dev/) is a tool to scan your entire site with Google Lighthouse in 2 minutes (on average).

This is optimized for [Aljibe projects](https://github.com/Metadrop/Aljibe/), but can be used in any DDEV project.


## Getting Started

Install this addon by running the following command:

`ddev get Metadrop/ddev-unlighthouse`

Once installed, make sure to restart your ddev project:

`ddev restart`

### Configuration

This addon uses the `tests/[local|pro|....]/unlighthouse.ts` configuration file to customize tests according to your needs. You can modify this file following Unlighthouse configuration guidelines.

### Running Tests

To execute unlighthouse tests, simply access your ddev environment and run the following command:

`ddev unlighthouse <folder>[local|pre|pro...]`

Lighthouse will generate detailed reports and save them in the `reports/unlighthouse` folder of your project.

### Interpreting Results

Once unlighthouse reports are generated, you can review them to identify areas for improvement in performance, accessibility, and more of your website.

Happy optimization!

**Contributed and maintained by [@Metadrop](https://github.com/Metadrop)**