const fs = require('fs-extra');
const path = require('path');

const copy = async () => {
  try {
    // await fs.copy('/src/assets/icons/icon_select', '/build/esm/assets/icons/');
    // const exists = await fs.pathExists('/src/assets/icons/icon_select.svg');
    const icons = path.resolve(__dirname, 'src', 'assets', 'icons');
    const fonts = path.resolve(__dirname, 'src', 'assets', 'fonts');
    const iconsTo = path.resolve(__dirname, 'build', 'esm', 'assets', 'icons');
    const fontsTo = path.resolve(__dirname, 'build', 'esm', 'assets', 'fonts');

    await fs.copy(icons, iconsTo);
    await fs.copy(fonts, fontsTo);
  } catch (err) {
    console.log(err);
  }
};

copy();
