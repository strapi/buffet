module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-styled-components',
    // TODO enable it
    // 'stylelint-config-rational-order',
  ],
  rules: {
    'color-hex-length': null,
    'declaration-no-important': true,
    'declaration-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': [
      true,
      { severity: 'warning' },
    ],
    'no-descending-specificity': [true, { severity: 'warning' }],
    'selector-max-specificity': ['0,2,0', { severity: 'warning' }],
    // TODO
    'selector-max-type': null,
    // TODO
    // 'selector-pseudo-element-colon-notation': [
    //   'double',
    //   { severity: 'warning' },
    // ],
    'property-no-vendor-prefix': null,
    'selector-pseudo-element-colon-notation': null,
    'value-keyword-case': null,
  },
};
