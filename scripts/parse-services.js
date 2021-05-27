/**
 * This script finds and generates redux-saga services under src/screens/** folder recursively to src/store/_resources folder
 */
const fs = require('fs');
const path = require('path');
const { camelCase } = require('change-case');

const parseRecursive = input => {
  const services = [];
  const files = fs.readdirSync(input, { encoding: 'utf-8' });
  files.forEach(fileName => {
    const filePath = path.join(input, fileName);
    const stats = fs.lstatSync(filePath);

    if (fileName === 'services.ts') {
      const serviceName = camelCase(
        filePath.split('/store/')[0].split('/').pop() + 'Services',
      );
      services.push({ name: serviceName, path: filePath });
    } else if (stats.isDirectory()) {
      services.push(...parseRecursive(filePath));
    }
  });
  return services;
};

const screensFolder = path.join(__dirname, '..', 'src', 'screens');
const services = parseRecursive(screensFolder);

// create src/store/_resources if not exists
const resourcesPath = path.join(__dirname, '..', 'src', 'store', '_resources');
if (!fs.existsSync(resourcesPath)) {
  fs.mkdirSync(resourcesPath);
}

let generated = '// DO NOT MODIFY AUTO GENERATED FILE!\n';
generated += "import { Saga } from 'redux-saga';\n";
services.forEach(service => {
  generated += `import ${service.name} from '${service.path.replace(
    screensFolder,
    '@screens',
  )}';\n`;
});

generated += '\nexport default [\n';
services.forEach(service => {
  generated += `\t${service.name},\n`;
});
generated += '] as Saga[];\n';
generated = generated.replace(/\t/g, '  ');
fs.writeFileSync(path.join(resourcesPath, 'services.ts'), generated);
