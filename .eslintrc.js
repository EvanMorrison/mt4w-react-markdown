module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
    }
  },
  "plugins": [
      "emotion",
      "standard",
      "react",
      "react-hooks",
  ],
  "rules": {
    "comma-dangle": "off",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"],
    "no-template-curly-in-string": "off",
    "no-unused-vars": ["error", {"vars": "all", "varsIgnorePattern": "React|^_$", "args": "none", "ignoreRestSiblings": false}],
    "object-curly-spacing": "off",
    "react/jsx-uses-vars": [2],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "standard/no-callback-literal": "off"
  },
  "settings": {
    "react": {
        "pragma": "React",
        "version": "16.9.0"
    }
}
};
