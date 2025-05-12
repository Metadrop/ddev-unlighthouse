[![tests](https://github.com/Metadrop/ddev-unlighthouse/actions/workflows/tests.yml/badge.svg)](https://github.com/Metadrop/ddev-unlighthouse/actions/workflows/tests.yml) ![project is maintained](https://img.shields.io/maintenance/yes/2025.svg)
![GitHub Release](https://img.shields.io/github/v/release/Metadrop/ddev-unlighthouse)

* [What is DDEV Unlighthouse Add-on?](#what-is-ddev-unlighthouse-add-on)
* [Getting started](#getting-started)
* [Configuration](#configuration)
* [Running Tests](#running-tests)
* [Interpreting Results](#interpreting-results)

## What is DDEV Unlighthouse Add-on?

This is a [DDEV](https://ddev.readthedocs.io) addon to run Unlighthouse in your site. [Unlighthouse](https://unlighthouse.dev/) is a tool to scan your entire site with Google Lighthouse in 2 minutes (on average).

This is optimized for [Aljibe projects](https://github.com/Metadrop/Aljibe/), but can be used in any DDEV project.


## Getting Started

Install this addon:

For DDEV v1.23.5 or above run

```sh
ddev add-on get Metadrop/ddev-unlighthouse
```

For earlier versions of DDEV run

```sh
ddev get Metadrop/ddev-unlighthouse
```

Once installed, make sure to restart your ddev project:

```sh
ddev restart
```

### Configuration

This addon uses the `tests/[local|pro|....]/unlighthouse.ts` configuration file to customize tests according to your needs. You can modify this file following Unlighthouse configuration guidelines.

### Running Tests

To execute unlighthouse tests, simply access your ddev environment and run any of this commands:

* `unlighthouse`: Run tests and browse them live at `https://$DDEV_HOSTNAME:5678`
* `unlighthouse-ci`: Run tests and generate a static report in `reports/unlighthouse` folder

`ddev [unlighthouse|unlighthouse-ci] <folder>[local|pre|pro...]`


### Accessing reports

Because of CORS restrictions, reports must be accessed via an HTTP server. To do this, you need to adjust the unlighthouse configuration and provide ddev's URL. See [`unlighthouse/unlighthouse.ts`](./unlighthouse/unlighthouse.ts) for reference.

### Interpreting Results

Once unlighthouse reports are generated, you can review them to identify areas for improvement in performance, accessibility, and more of your website.

Happy optimization!

**Contributed and maintained by [@Metadrop](https://github.com/Metadrop)**
