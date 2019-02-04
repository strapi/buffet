import colors from './Colors';

export const mixins = (color = colors.lightGrey) => ({
  bbox:
    'box-sizing: border-box;\n' +
    '-moz-box-sizing: border-box;\n' +
    '-webkit-box-sizing: border-box;',
  bshadow:
    `-webkit-box-shadow: inset 0 0 30px ${color};\n` +
    `-moz-box-shadow: inset 0 0 30px ${color};\n` +
    `box-shadow: inset 0 0 30px ${colors};`,
  overlay:
    `-webkit-box-shadow: inset 1px 1px 3px 0px ${color};\n` +
    `-moz-box-shadow: inset 1px 1px 3px 0px ${color};\n` +
    `box-shadow: inset 1px 1px 3px 0px ${colors};`,
});

export default mixins;
