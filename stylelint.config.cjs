module.exports = {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
	rules: {
		'color-hex-length': 'long',
		'declaration-empty-line-before': 'never',
		'no-descending-specificity': null,
		'scss/no-global-function-names': null,
		'selector-class-pattern': null,
		'keyframes-name-pattern': null,
		'scss/dollar-variable-empty-line-before': null,
		'value-keyword-case': null,
		'media-feature-range-notation': 'prefix',
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['export'] }]
	}
};
