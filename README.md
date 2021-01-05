# rdmo-terms

RDMO is a tool to support the systematic planning, organisation and implementation of the data management throughout the course of a research project. On this page, we offer a search and filter interface for the central content repository for RDMO located at <https://github.com/rdmorganiser/rdmo-catalog>.


## Setup

Install the node dependencies, we suggest to use [nvm](https://github.com/nvm-sh/nvm):

```
nvm use
npm install
```

Clone <https://github.com/rdmorganiser/rdmo-catalog> and run `python3 tools/convert.py json` to convert the xml files to json. Move the created `json` directory to `srv/data`. The `data` directory is used in the node compilation process.

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
