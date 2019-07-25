
  self.CONFIG = {
  "resources": {
    "<root>": {
      "modules": {
        "sesify-example-banner": true,
        "sesify-example-deep": true,
        "sesify-example-format": true,
        "sesify-example-rainbow": true
      }
    },
    "sesify-example-deep": {
      "modules": {
        "sesify-example-fetch": true,
        "sesify-example-localstorage": true
      }
    },
    "sesify-example-fetch": {
      "globals": {
        "fetch": true
      }
    },
    "sesify-example-format": {
      "globals": {
        "console.warn": true,
        "fetch": true,
        "localStorage": true
      }
    },
    "sesify-example-localstorage": {
      "globals": {
        "localStorage": true
      }
    },
    "sesify-example-rainbow": {
      "modules": {
        "sesify-example-banner": true
      }
    }
  }
};
  self.DEPS = {
  "1": {
    "deps": {
      "sesify-example-banner": 2,
      "sesify-example-deep": 3,
      "sesify-example-format": 5,
      "sesify-example-rainbow": 7
    },
    "entry": true,
    "expose": false,
    "file": "/home/xyz/Development/sesify-example/index.js",
    "id": 1,
    "index": 1,
    "indexDeps": {
      "sesify-example-banner": 2,
      "sesify-example-deep": 3,
      "sesify-example-format": 5,
      "sesify-example-rainbow": 7
    },
    "order": 0,
    "package": "<root>"
  },
  "2": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-banner/index.js",
    "id": 2,
    "index": 2,
    "indexDeps": {
    },
    "package": "sesify-example-banner"
  },
  "3": {
    "deps": {
      "sesify-example-fetch": 4,
      "sesify-example-localstorage": 6
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-deep/index.js",
    "id": 3,
    "index": 3,
    "indexDeps": {
      "sesify-example-fetch": 4,
      "sesify-example-localstorage": 6
    },
    "package": "sesify-example-deep"
  },
  "4": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-fetch/index.js",
    "id": 4,
    "index": 4,
    "indexDeps": {
    },
    "package": "sesify-example-fetch"
  },
  "5": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-format/index.js",
    "id": 5,
    "index": 5,
    "indexDeps": {
    },
    "package": "sesify-example-format"
  },
  "6": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-localstorage/index.js",
    "id": 6,
    "index": 6,
    "indexDeps": {
    },
    "package": "sesify-example-localstorage"
  },
  "7": {
    "deps": {
      "sesify-example-banner": 2
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-rainbow/index.js",
    "id": 7,
    "index": 7,
    "indexDeps": {
      "sesify-example-banner": 2
    },
    "package": "sesify-example-rainbow"
  }
};
  