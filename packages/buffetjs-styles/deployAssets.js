const fs = require('fs-extra');
const path = require('path');

const copy = async () => {
  try {
    const icons = path.resolve(__dirname, 'src', 'assets', 'icons');
    const fonts = path.resolve(__dirname, 'src', 'assets', 'fonts');
    const iconsTo = path.resolve(__dirname, 'build', 'esm', 'assets', 'icons');
    const fontsTo = path.resolve(__dirname, 'build', 'esm', 'assets', 'fonts');

    await fs.copy(icons, iconsTo);
    await fs.copy(fonts, fontsTo);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

copy();
