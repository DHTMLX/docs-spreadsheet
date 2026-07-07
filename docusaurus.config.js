const path = require('path');
const fs = require('fs');

const AT_NOTATION_KEYS = {
    short: 'Short',
    type: 'Type',
    descr: 'Descr',
    changelog: 'Changelog',
    signature: 'Signature',
    params: 'Params',
    returns: 'Returns',
    values: 'Values'
};

const COMPONENTS_PATH = '@site/src/components';

// let components = { Disqus: "Disqus" };
let components = {};
let metaDescription = '';

const wrapDataWithComponent = (data, componentName) => {
    return componentName ? `\n<${componentName}>\n${data}\n\n</${componentName}>\n\n` : data;
}

const onAtNotationMatch = (data, { key }) => {
    const componentName = AT_NOTATION_KEYS[key];
    if (componentName) {
        components[componentName] = componentName;
    }

    switch(key) {
        case 'default':
            return `<strong>Default value: </strong> ${data}`;
        case 'example':
            return `**Example**\n~~~js\n${data.replace(/^(?:\n*)([^]+?)(?:\n*)$/g, '$1')}\n~~~`;
        case 'metadescr':
            metaDescription = data.replace(/^(?:\n*)(.+)(?:\n|.)*/, '$1');
            return '';
        // TODO: remove later
        case 'relatedsample':
            return data;
        default:
            return componentName
                ? wrapDataWithComponent(data, componentName)
                : data;
    }
};

const onAtNotationFunctionMatch = (data, { key, fullMatch, dir }) => {
    if (data.indexOf('.md') !== -1 || data.indexOf('.mdx') !== -1 || data.indexOf('.') === -1) {
        const result = readFileFromPath(dir, data);
        return result ? /@short: (.*)/g.exec(result)[1] : fullMatch;
    }
    return fullMatch;
}

const onBraceNotationMatch = (data, { key, fullMatch }) => {
    switch(key) {
        case 'note':
            return `:::note\n${data}\n:::`;
        case 'pronote':
            return `:::tip Pro version only\n${data}\n:::`;
        case 'editor':
            return data;
        default:
            return fullMatch;
    }
};

const readFile = (workingDir, filePath) => {
    workingDir = workingDir.replace(/\\/g, '/');
    filePath = filePath.replace(/\\/g, '/');
    let finalPath = workingDir + '/' + filePath;

    if (finalPath.indexOf('.') === -1) {
        finalPath += !fs.existsSync(finalPath + '.md') ? '.mdx' : '.md';
    }

    if (!fs.existsSync(finalPath)) {
        const clippedFilePath = filePath.split('/');
        clippedFilePath.shift();
        if (!clippedFilePath.length) {
            return false;
        }
        return readFile(workingDir, clippedFilePath.join('/'));
    }

    return fs.readFileSync(path.normalize(finalPath), 'utf8');
};

// Returns the locale content root (i18n/<locale>/.../current) for a file living under a
// translated docs tree, or null for files under docs/. Used so cross-links in a translated
// page can resolve the target's sidebar_label from the localized copy first.
const getLocaleContentRoot = (dir) => {
    const normalizedDir = dir.replace(/\\/g, '/');
    const currentIndex = normalizedDir.indexOf('/current/');
    if (currentIndex !== -1 && normalizedDir.includes('/i18n/')) {
        return normalizedDir.substring(0, currentIndex + '/current'.length);
    }
    return null;
};

// Reads a referenced file, supporting both page-relative (../foo.md) and docs-root-relative
// (api/foo.md) links. For a translated page the localized copy is tried first, then it falls
// back to docs/ (English) when no translation exists yet.
const readFileFromPath = (dir, filePath) => {
    const result = readFile(dir, filePath);
    if (result) return result;

    if (!filePath.startsWith('.')) {
        const localeRoot = getLocaleContentRoot(dir);
        if (localeRoot) {
            const localeResult = readFile(localeRoot, filePath);
            if (localeResult) return localeResult;
        }
        const docsDir = path.join(__dirname, 'docs').replace(/\\/g, '/');
        return readFile(docsDir, filePath);
    }

    return false;
};

const onEmptyLinkMatch = (data, { key, fullMatch, dir }) => {
    const filePath = fullMatch.substring(fullMatch.indexOf('(') + 1, fullMatch.length - 1);
    if (filePath.indexOf('.md') !== -1 || filePath.indexOf('.mdx') !== -1 || filePath.indexOf('.') === -1) {
        // Links are written root-relative (e.g. api/spreadsheet_addrow_method.md). Resolve the
        // target's sidebar_label from the localized copy first (for translated pages), falling
        // back to the docs root (English) when the target is not yet translated.
        const fileContent = readFileFromPath(dir, filePath);
        if (!fileContent) return fullMatch;
        const labelMatch = /sidebar_label: (.+)/.exec(fileContent);
        if (!labelMatch) return fullMatch;
        // Emit a root-absolute href without the .md/.mdx extension, matching how the
        // build-time loader rewrites ordinary links (Docusaurus prepends baseUrl itself).
        const href = '/' + filePath.replace(/^\.?\/+/, '').replace(/\.(md|mdx)(?=$|#)/, '');
        return `[${labelMatch[1].trim()}](${href})`;
    }
    return fullMatch;
};

const onAfterDataTransformation = (data) => {
    const allAvailableComponents = Object.values(components);
    let transformedData = data;

    if (allAvailableComponents.length !== 0) {
        const imports = `import { ${allAvailableComponents.join(', ')} } from '${COMPONENTS_PATH}';\n\n`;
        const isTitles = /---((?:\r?\n|\r)|.)+?---/.test(transformedData);
        transformedData = isTitles
            ? (transformedData.replace(/^(---((?:\s*\n)|.)+?---)/, `$1\n\n${imports}`))
            : imports + transformedData;
    }

    if (metaDescription) {
        transformedData = transformedData.replace(/^(---\s*\n)((?:\n|.)+?)(---\s*?\n*)/,  (fullMatch, groupA, groupB, groupC) => {
            const isDocusaurusDescriptionExist = /^description: *.*\n/m.test(fullMatch);
            if (!isDocusaurusDescriptionExist) {
                return `${groupA}description: ${metaDescription}\n${groupB}${groupC}`;
            }
            return fullMatch;
        });
    }

    //components = { Disqus: "Disqus" };
    metaDescription = '';

    return transformedData;
};

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'de', 'zh', 'ko'],
        localeConfigs: {
            en: { label: 'English', htmlLang: 'en-US' },
            ru: { label: 'Русский', htmlLang: 'ru' },
            de: { label: 'Deutsch', htmlLang: 'de' },
            zh: { label: '简体中文', htmlLang: 'zh-CN' },
            ko: { label: '한국어', htmlLang: 'ko' },
        },
    },
    title: 'DHTMLX JavaScript Spreadsheet Docs',
    tagline: 'DHTMLX JavaScript Spreadsheet Docs',
    url: 'https://docs.dhtmlx.com',
    baseUrl: '/spreadsheet/',
    onBrokenLinks: 'warn',
    // onBrokenMarkdownLinks: 'warn', // deprecated in v3.9.1
    onBrokenAnchors: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'DHTMLX', // Usually your GitHub org/user name
    projectName: 'docs-spreadsheet', // Usually your repo name
    trailingSlash: true,
    markdown: {
		hooks: {
			onBrokenMarkdownLinks: 'warn',
		}
	},
    themeConfig: {
        image: 'img/og-default-spreadsheet.png',
        metadata: [
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'DHTMLX Spreadsheet Docs' },
            { property: 'og:locale', content: 'en_US' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@dhtmlx' }
        ],
        algolia: {
            // This is a read-only, search-only key served directly by the front-end, managed by Algolia via their
            // free DocSearch program. The key is not sensitive. See https://docsearch.algolia.com/ for more details.
            appId: '2K8B21DY4C',
            apiKey: '17912b97c00b5b6f67fae50ff3de853e',
            indexName: 'spreadsheet',

            // Optional: see doc section bellow
            contextualSearch: true,

            // Optional: Algolia search parameters
            searchParameters: {}

            //... other Algolia params
        },
        prism: {
            //theme: require('prism-react-renderer/themes/github'),
            //darkTheme: require('prism-react-renderer/themes/dracula'),
        },
        navbar: {
            title: 'JavaScript Spreadsheet Documentation',
            logo: {
                alt: 'DHTMLX Spreadsheet Documentation',
                src: 'img/dhtmlx_logo.svg',
                href: 'https://docs.dhtmlx.com/'
            },
            items: [{
                    label: 'Examples',
                    href: 'https://snippet.dhtmlx.com/ihtkdcoc?tag=spreadsheet',
                    position: 'right'
                },
                {
                    label: 'Forum',
                    href: 'https://forum.dhtmlx.com/c/spreadsheet/',
                    position: 'right'
                },
                {
                    label: 'Support',
                    href: 'https://dhtmlx.com/docs/technical-support.shtml',
                    position: 'right'
                },
                {
                    label: 'Download',
                    href: 'https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml',
                    position: 'right'
                }
            ,
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Development center',
                    items: [{
                            label: 'Download Spreadsheet',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/download.shtml',
                            position: 'right'
                        },
                        {
                            label: 'Examples',
                            href: 'https://snippet.dhtmlx.com/ihtkdcoc?tag=spreadsheet',
                            position: 'right'
                        },
                        {
                            label: 'Blog',
                            href: 'https://dhtmlx.com/blog/?s=spreadsheet'
                        },
                        {
                            label: 'Forum',
                            href: 'https://forum.dhtmlx.com/c/spreadsheet/',
                            position: 'right'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'GitHub',
                            href: 'https://github.com/DHTMLX'
                        },
                        {
                            label: 'Youtube',
                            href: 'https://www.youtube.com/user/dhtmlx'
                        },
                        {
                            label: 'Facebook',
                            href: 'https://www.facebook.com/dhtmlx'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/dhtmlx'
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/groups/3345009/'
                        }
                    ]
                },
                {
                    title: 'Company',
                    items: [{
                            label: 'About us',
                            href: 'https://dhtmlx.com/docs/company.shtml'
                        },
                        {
                            label: 'Contact us',
                            href: 'https://dhtmlx.com/docs/contact.shtml'
                        },
                        {
                            label: 'Licensing',
                            href: 'https://dhtmlx.com/docs/products/dhtmlxSpreadsheet/#editions-licenses'
                        }
                    ]
                }
            ]
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    //editUrl: 'https://github.com/DHTMLX/docs-spreadsheet/edit/master/',
                    routeBasePath: '/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
                sitemap: {
                    changefreq: 'daily',
                    priority: 0.5
                }
            }
        ]
    ],
    plugins: [
        'docusaurus-plugin-sass',
        [
            path.resolve(__dirname, './plugins/dhx-md-data-transformer-plugin'),
            {
                onBraceNotationMatch,
                onAtNotationMatch,
                onAtNotationFunctionMatch,
                onEmptyLinkMatch,
                onAfterDataTransformation
            }
        ],
        [
            require.resolve('docusaurus-gtm-plugin'),
            {
              id: 'GTM-5M5RCSJ'
            }
        ]
    ]
};
