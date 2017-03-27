const yargs = require('yargs').argv;

module.exports = () => {
    const sourcePath = './src',
        deployPath = './build',
        config = {
            sourcePath: sourcePath,
            deployPath: deployPath,
            url: (yargs.url) ? yargs.url : deployPath,
            styles: {
                source: `${sourcePath}/sass/**/*.{scss, sass}`,
                build: `${deployPath}/styles`
            },
            html: {
                source: `${sourcePath}/**/*.jade`,
                build: `${deployPath}/`
            },
            scripts: {
                source: `${sourcePath}/scripts/**/*.js`,
                build: `${deployPath}/scripts`
            },
            images: {
                source: `${sourcePath}/images/**/*.*`,
                build: `${deployPath}/images`
            },
            options: {
                api: {
                    port: 8000
                },
                babel: {
                    presets: ['es2015']
                },
                browser: {
                    // proxy: config.url,
                    server: {
                        baseDir: './build',
                    },
                    port: 4000,
                    open: "local",
                    ghostMode: {
                        clicks: true,
                        location: true,
                        forms: true,
                        scroll: true
                    },
                    injectChanges: true,
                    notify: true,
                    reloadDelay: 0
                }
            }
        };

    return config;
}
