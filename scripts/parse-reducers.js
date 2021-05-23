/**
 * This script finds and generates redux reducers under src/screens/** folder recursively to src/store/_resources folder
 */
const fs = require('fs');
const path = require('path');
const { camelCase } = require('change-case');

const parseRecursive = input => {
  const reducers = [];
  const files = fs.readdirSync(input, { encoding: 'utf-8' });
  files.forEach(fileName => {
    const filePath = path.join(input, fileName);
    const stats = fs.lstatSync(filePath);

    if (fileName === 'slice.ts') {
      const reducerName = camelCase(
        filePath.split('/store/')[0].split('/').pop() + 'Reducer',
      );
      reducers.push({ name: reducerName, path: filePath });
    } else if (stats.isDirectory()) {
      reducers.push(...parseRecursive(filePath));
    }
  });
  return reducers;
};

const screensFolder = path.join(__dirname, '..', 'src', 'screens');
const reducers = parseRecursive(screensFolder);

// create src/store/_resources if not exists
const resourcesPath = path.join(__dirname, '..', 'src', 'store', '_resources');
if (!fs.existsSync(resourcesPath)) {
  fs.mkdirSync(resourcesPath);
}

let generated = '// DO NOT MODIFY AUTO GENERATED FILE!\n';
reducers.forEach(reducer => {
  generated += `import ${reducer.name} from '${reducer.path.replace(
    screensFolder,
    '@screens',
  )}';\n`;
});

generated += '\nexport default {\n';
reducers.forEach(reducer => {
  generated += `\t${reducer.name.split('Reducer')[0]}: ${reducer.name},\n`;
});
generated += '};\n';
generated = generated.replace(/\t/g, '  ');
fs.writeFileSync(path.join(resourcesPath, 'reducers.ts'), generated);
