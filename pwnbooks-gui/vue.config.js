module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: '@import "@/scss/_variables.scss"; @import "@/scss/_base.scss"; @import "@/scss/modals.scss";'
            }
        }
    }
}