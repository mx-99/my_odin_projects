import globals from 'globals';
import pluginJs from '@eslint/js';
import googleConfig from 'eslint-config-google';
// Import the Google style guide

/**
 * @type {import('eslint').Linter.Config[]}
 * ESLint configuration following the Google JavaScript
 * Style Guide in flat config format.
 */
export default [
  // Define the global variables for both browser and Node.js environments
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        // Adds browser global variables like `window`, `document`, etc.
        ...globals.node,
        // Adds Node.js global variables like `require`,`module`,`process`,etc.
      },
    },
  },

  // Use the recommended configurations from ESLint
  pluginJs.configs.recommended,

  // Include the Google JavaScript style guide configuration directly
  googleConfig,

  // Custom rules or overrides
  {
    rules: {
      'max-len': ['error', {code: 80}],
      // Enforce a maximum line length of 80 characters (can be customized)
      'require-jsdoc': 'off',
      // Disable requirement for JSDoc comments for functions
      'no-console': 'warn',
      // Warn on console statements (optional customization)
      'curly': ['error', 'all'],
      // Ensure curly braces are used for all control structures
      'valid-jsdoc': 'off',
      // Disable valid-jsdoc rule to avoid errors
    },
  },
];
