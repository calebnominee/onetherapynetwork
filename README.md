# Craft CMS 5 Project

This is a [Craft CMS 5.x](https://github.com/craftcms/cms) project for OTN.

## The Stack

- [Craft CMS 5.x](https://craftcms.com) Content management system
- [DDEV](https://ddev.com) Local development environment
- [Servd](https://servd.host) Craft CMS hosting provider

**Note:** While Vite, Tailwind CSS, and Alpine.js are configured in the project, the current build uses static CSS/JS files from `/web/assets` instead of the frontend build system.

## Requirements

- [Docker](https://www.docker.com)
- [DDEV](https://ddev.com)

## Features

- Templates
    - Layout templates setup with header and footer globals
    - Exception templates for 404, offline/maintenance and generic errors
    - Page templates setup for use with matrix fields
    - Email template for system emails
- Config
    - Configs for all Craft CMS plugins
    - Customised general config with required features that hook in to .env vars
- Env
    - Customised .env file with Servd configuration
- Servd
    - Setup to be used with Servd hosting platform
    - Asset storage and helpers configured
- Frontend Assets
    - Static CSS and JS files in `/web/assets/`
    - Pre-built styles and scripts

## Plugins

### Craft CMS

The following plugins are currently configured:

- CKEditor - Rich text editing
- Freeform - Form builder (replaced Formie)
- Minify - HTML/CSS/JS minification
- SEOMatic - SEO management
- Servd Assets and Helpers - Asset storage and hosting integration
- Sprig - Reactive components
- Vite - Asset building (configured but not currently in use)

**Note:** Some plugins (Blitz, Imager X, Mailgun) have been removed from the project.

## Install

### 1. Clone the Repository

Clone this repository to your local machine:

```shell
git clone [repository-url]
cd craft-otn
```

### 2. Start DDEV, Install Craft CMS and dependencies

Firstly, edit `.ddev/config.yaml` and change the `name` to your project name.

Then, there are a few CLI commands ([See more](#cli-commands)) we've created that allow starting DDEV, installing Craft CMS and installing dependencies (Node particularly). The one to get you started:

```shell
make install
```

### 3. Frontend Assets

This project uses static CSS and JS files located in `/web/assets/`. While Vite is configured, it's not currently used for the build process. The frontend assets are:

- `/web/assets/css/style.css` - Main stylesheet
- `/web/assets/js/script.js` - Main JavaScript file
- `/web/assets/css/css-additions.css` - Additional styles

If you need to use the Vite build system in the future:

```shell
make dev  # For development with HMR
```

## Production

The project is configured for deployment to Servd. Since static assets are used instead of the Vite build system, there's no build step required for production deployment. 

If you decide to use the Vite build system in the future, you would need to add a build script to package.json and run:

```shell
npm run build
```

## CLI commands

Several commands are available to make development easier. All these commands are run in terminal:

| Command | Description |
| -------- | ------- |
| `make install` | Starts DDEV, installs Craft CMS and dependencies (Note: may need updating to match current plugins). |
| `make setup` | Use when starting to work on your project, especially if working in a team. |
| `make start` | Starts DDEV and Vite development process (if using Vite). |
| `make dev` | Starts Vite development process (not currently used for frontend). |
| `make prod` | Runs Vite build process (not currently used). |
| `make clean` | Removes composer and node files ready for a clean install. |
| `make clean-logs` | Removes log files from /storage/logs for easier debugging. |
| `make update` | Runs `ddev exec php craft update all`. |
| `make up` | Runs project config apply and migrations apply. |
| `make pull-db` | Pulls a database dump from a remote Servd environment into the local database. |
| `make tp` | Launches TablePlus. |
| `make l` | Launches the site. |

## Nice to know

### Database

To access the database inside the DDEV environment, you can use TablePlus. You can use the following command to open TablePlus to export/import:

```shell
ddev tableplus 
or 
make tp
```

### HTTPS recommended

Always use HTTPS with DDEV for the best development experience:

```shell
ddev stop --all
mkcert -install
ddev start
ddev launch
```

## Plugin Discrepancy Note

The Makefile's `make install` command includes references to plugins that have been removed from composer.json (Blitz, Imager X, Mailgun). The Makefile may need updating to reflect the current plugin configuration.

## Project Notes

- This project was originally based on the MadeByShape Craft CMS starter but has been customized for OTN
- Frontend assets use static files in `/web/assets/` rather than the Vite build system
- Form handling uses Freeform instead of Formie
- The project is configured for deployment to Servd hosting
