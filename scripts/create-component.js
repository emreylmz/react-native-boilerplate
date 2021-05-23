const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');
const argv = require('minimist')(process.argv.slice(2));
const { pascalCase, camelCase } = require('change-case');
const componentName = pascalCase(argv._[0] || '');
const componentNameCamel = camelCase(componentName);
const componentNameScreen = `${componentName}Screen`;

/**
 * args
 * componentName
 * --style: if true create style file and import it
 * --store: if true create store folder and import related stuffs
 * --i18n: if true import related stuffs
 * usage=> npm run cc -- componentName --style --store --i18n
 */

if (componentName) {
  const screensFolder = path.join(
    process.env.INIT_CWD || process.cwd(),
    'src',
    'screens',
  );
  const componentFolder = path.join(
    process.env.INIT_CWD || process.cwd(),
    'src',
    'screens',
    componentName,
  );
  if (!fs.existsSync(componentFolder)) {
    fs.mkdirSync(componentFolder);
    // create index.ts

    const screensIndexContent = fs
      .readFileSync(path.join(screensFolder, 'index.ts'), {
        encoding: 'utf-8',
      })
      .replace(
        '// SCREENS',
        `export { ${componentNameScreen} } from './${componentName}';\n// SCREENS`,
      );
    fs.writeFileSync(path.join(screensFolder, 'index.ts'), screensIndexContent);

    // create index.ts
    fs.writeFileSync(
      path.join(componentFolder, 'index.ts'),
      `export { default as ${componentNameScreen} } from './${componentNameScreen}';\n`,
    );

    // ### starts imports ###
    let componentCode = `import React${
      argv.store ? ', { useState, useEffect }' : ''
    } from 'react';
import { View, StyleSheet } from 'react-native';${
      argv.i18n
        ? `
import { useTranslation } from 'react-i18next';`
        : ''
    }${
      argv.store
        ? `
import { useAppDispatch, useAppSelector } from '@hooks';
import { loadItems } from './store/slice';
import isEqual from 'react-fast-compare';`
        : ''
    }

interface OwnProps {}

type Props = OwnProps;

const ${componentNameScreen}: React.FC<Props> = ({}) => {${
      argv.i18n
        ? `
  const { t } = useTranslation();
`
        : ''
    }${
      argv.store
        ? `
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(1);

  const items = useAppSelector((state) => state.${componentNameCamel}.items, isEqual);
  const itemsPageSize = useAppSelector(
    (state) => state.${componentNameCamel}.itemsPageSize,
    isEqual
  );
  const loadingItems = useAppSelector(
    (state) => state.${componentNameCamel}.loadingItems,
    isEqual
  );
  const totalItems = useAppSelector((state) => state.${componentNameCamel}.totalItems, isEqual);
  
  useEffect(() => {
    dispatch(loadItems({ page, pageSize: itemsPageSize, filterParams: {} }));
  }, [page]);
`
        : ''
    }
  return <View style={styles.root} />;
};

const styles = StyleSheet.create({
  root: {},
});

export default ${componentNameScreen};
`;

    fs.writeFileSync(
      path.join(componentFolder, `${componentNameScreen}.tsx`),
      componentCode,
    );

    console.log(argv.store);
    // copy store folder
    if (argv.store) {
      fs.copySync(
        path.join(__dirname, 'templates', 'store'),
        path.join(componentFolder, 'store'),
      );
      const actionTypesContent = fs
        .readFileSync(path.join(componentFolder, 'store', 'slice.ts'), {
          encoding: 'utf-8',
        })
        .replace(/<componentName>/g, componentNameCamel);
      fs.writeFileSync(
        path.join(componentFolder, 'store', 'slice.ts'),
        actionTypesContent,
      );
    }

    // ### run store scripts
    execSync('node ./scripts/parse-reducers.js', { stdio: 'pipe' });
    execSync('node ./scripts/parse-services.js', { stdio: 'pipe' });
  } else {
    console.error(
      `${componentName} already exists at [${process.cwd()}] location`,
    );
  }
}
