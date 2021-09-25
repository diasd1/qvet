module.exports = {
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true,
            builderOptions: {
                productName: "QV / ET",
                appId: "qvet.tink.ga"
            },
            chainWebpackRendererProcess(config) {
                config.plugins.delete('workbox')
                config.plugins.delete('pwa')
            }
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