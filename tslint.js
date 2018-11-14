const path = require('path');

module.exports = {
  extends: "tslint-config-airbnb",
  rulesDirectory: [
    path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
    path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  "rules": {
    "variable-name": [
      true,
      "allow-pascal-case"
    ],
    "ter-arrow-parens": [
      false
    ],
    "ter-indent": [
      true,
      4,
      {
        "SwitchCase": 1
      }
    ],
    "quotemark": [
      true,
      "single",
      "jsx-single"
    ],
    "import-name": [
      false
    ],
    "no-restricted-imports": [
      1,
      "lodash",
      "ramda",
      "crypto",
      "bluebird",
      "setimmediate2",
      "pure-render-decorator",
      "ajv"
    ],
    "no-restricted-globals": [
      2,
      "find"
    ],
    "no-cond-assign": [
      1,
      "always"
    ],
    "newline-per-chained-call": false, // исправить на 2, при поддержке tslint глубины вызовов
    "prefer-template": 1, // включить
    "new-parens": 1,
    "no-plusplus": [
      1,
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "prefer-promise-reject-errors": [
      1,
      {
        "allowEmptyReject": false
      }
    ],
    "one-var": [
      1,
      "never"
    ],
    "max-line-length": [
      true,
      {
        "limit": 140,
        "ignore-pattern": "^import |^export {(.*?)}"
      }
    ],
    "max-len": [
      1,
      140,
      2,
      {
        "ignoreUrls": true,
        "ignoreComments": false
      }
    ], // включить до error
    "dot-location": [
      2,
      "property"
    ],
    "operator-linebreak": [
      2,
      "after",
      {
        "overrides": {
          ">": "before",
          ">=": "before",
          "<": "before",
          "<=": "before",
          "||": "before",
          "&&": "before",
          "+": "before",
          "-": "before"
        }
      }
    ],
    "max-statements": [
      2,
      15
    ],
    "max-depth": [
      1,
      2
    ],
    "complexity": [
      2,
      10
    ],
    "max-params": [
      1,
      3
    ],
    "max-nested-callbacks": [
      2,
      3
    ],
    "prefer-const": true,
    "no-param-reassign": [
      1,
      {
        "props": false
      }
    ],
    "no-console": true,
    "comma-dangle": [
      2,
      "never"
    ],
    "func-style": [
      2,
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "newline-after-var": [
      2,
      "always"
    ],
    "new-cap": [
      2,
      {
        "capIsNewExceptions": [
          "Nothing",
          "T",
          "F"
        ],
        "newIsCap": false
      }
    ],
    "no-unused-expressions": [
      2,
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ],
    "no-underscore-dangle": [
      2,
      {
        "allow": [
          "_exception",
          "__html"
        ]
      }
    ],
    "jsx-quotes": [
      2,
      "prefer-single"
    ],
    "react/jsx-indent": [
      4,
      "spaces"
    ],
    "react/prefer-stateless-function": [
      1,
      {
        "ignorePureComponents": true
      }
    ],
    "react/require-optimization": [
      1,
      {
        "allowDecorators": [
          "pureRender",
          "connect"
        ]
      }
    ],
    "react/forbid-prop-types": [
      2,
      {
        "forbid": [
          "any"
        ]
      }
    ],
    "quote-props": [
      1,
      "consistent-as-needed"
    ],
    "react/display-name": [
      1,
      {
        "ignoreTranspilerName": false
      }
    ],
    "react/jsx-indent-props": [
      2,
      4
    ],
    "react/no-multi-comp": [
      1,
      {
        "ignoreStateless": true
      }
    ],
    "react/jsx-handler-names": [
      1,
      {
        "eventHandlerPrefix": "handle",
        "eventHandlerPropPrefix": "on"
      }
    ],
    "react/jsx-max-props-per-line": [
      1,
      {
        "maximum": 2
      }
    ],
    "react/sort-comp": [
      2,
      {
        "order": [
          "static-methods",
          "mixins",
          "displayName",
          "actions",
          "contextTypes",
          "childContextTypes",
          "propTypes",
          "defaultProps",
          "pure",
          "statics",
          "state",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "getChildContext",
          "getStoresState",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount",
          "/^component.+$/",
          "/^get.+$/",
          "/^on.+$/",
          "/^handle.+$/",
          "everything-else",
          "/^render.+$/",
          "render"
        ]
      }
    ],
    "import/no-unresolved": [
      2,
      {
        "commonjs": true,
        "amd": false
      }
    ],
    "import/extensions": [
      1,
      "always",
      {
        "js": "never",
        "jsx": "always"
      }
    ],
    "yoda": [
      "error",
      "never",
      {
        "exceptRange": true
      }
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1
      }
    ],
    "trailing-comma": false,
    "align": {
      "minLength": 2
    },
    "no-parameter-reassignment": false,
    "no-increment-decrement": false
  }
};
