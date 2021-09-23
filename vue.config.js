module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                productName: "QV / ET",
                appId: "qvet.tink.ga"
            },
        },
    },
    pwa: {
        themeColor: '#1e1e1e',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
        manifestPath: 'manifest.json',
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: './public/sw.js',
        }
    },
    configureWebpack: {
        performance: {
            hints: false
        },
        optimization: {
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
            }
        }
    }
};