module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["react-app", "shared-config"],
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"@typescript-eslint/no-shadow": ["error"],
				"no-shadow": "off",
				"no-undef": "off",
				"@typescript-eslint/interface-name-prefix": "off",
				"@typescript-eslint/explicit-function-return-type": 0,
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"@typescript-eslint/no-explicit-any": ["warn"],
				quotes: [2, "single"],
				semi: [2, "never"],
				"comma-dangle": [2, "only-multiline"],
				"no-trailing-spaces": [2],
				"jsx-quotes": ["error", "prefer-single"],
				"react/jsx-boolean-value": [0],
				"react-hooks/rules-of-hooks": "error",
				"prettier/prettier": 2,
				"space-before-function-paren": 0,
			},
		},
	],
};