
  self.CONFIG = {
  "resources": {
    "<root>": {
      "modules": {
        "sesify-example-deep": true,
        "sesify-example-format": true
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
    }
  }
};
  self.DEPS = {
  "1": {
    "deps": {
      "foe": 6,
      "friend": 7,
      "sesify-example-deep": 2,
      "sesify-example-format": 4
    },
    "entry": true,
    "expose": false,
    "file": "/home/xyz/Development/sesify-example/index.js",
    "id": 1,
    "index": 1,
    "indexDeps": {
      "foe": 6,
      "friend": 7,
      "sesify-example-deep": 2,
      "sesify-example-format": 4
    },
    "order": 0,
    "package": "<root>"
  },
  "2": {
    "deps": {
      "sesify-example-fetch": 3,
      "sesify-example-localstorage": 5
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-deep/index.js",
    "id": 2,
    "index": 2,
    "indexDeps": {
      "sesify-example-fetch": 3,
      "sesify-example-localstorage": 5
    },
    "package": "sesify-example-deep"
  },
  "3": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-fetch/index.js",
    "id": 3,
    "index": 3,
    "indexDeps": {
    },
    "package": "sesify-example-fetch"
  },
  "4": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-format/index.js",
    "id": 4,
    "index": 4,
    "indexDeps": {
    },
    "package": "sesify-example-format"
  },
  "5": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/node_modules/sesify-example-localstorage/index.js",
    "id": 5,
    "index": 5,
    "indexDeps": {
    },
    "package": "sesify-example-localstorage"
  },
  "6": {
    "deps": {
      "friend": 7
    },
    "file": "/home/xyz/Development/sesify-example/src/foe.js",
    "id": 6,
    "index": 6,
    "indexDeps": {
      "friend": 7
    },
    "package": "<root>"
  },
  "7": {
    "deps": {
    },
    "file": "/home/xyz/Development/sesify-example/src/friend.js",
    "id": 7,
    "index": 7,
    "indexDeps": {
    },
    "package": "<root>"
  }
};
  