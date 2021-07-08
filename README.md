# rdmo-terms

RDMO is a tool to support the systematic planning, organisation and implementation of the data management throughout the course of a research project. On this page, we offer a search and filter interface for the central content repository for RDMO located at <https://github.com/rdmorganiser/rdmo-catalog>.


## Setup

Clone <https://github.com/rdmorganiser/rdmo-catalog> and run `python3 tools/convert.py json` to convert the xml files to json.

Clone <https://github.com/rdmorganiser/terms> (this repository) and move the `json` directory created before to `src/data`. The JSON files in the `data` directory are used in the node compilation process.

Go back to the root of this repository and install the node dependencies, we suggest to use [nvm](https://github.com/nvm-sh/nvm):

```
nvm use
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
