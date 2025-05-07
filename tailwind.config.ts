import { siteConfig } from './site.config'

export default {
    content: ['./components/**/*.{vue,js}', './pages/**/*.vue', './app.vue'],
    theme: {
        extend: {
            colors: {
                primary: siteConfig.theme.primaryColor,
                secondary: siteConfig.theme.secondaryColor,
                accent: siteConfig.theme.accentColor
            },
            fontFamily: {
                sans: siteConfig.theme.fontFamily
            },
            borderRadius: {
                custom: siteConfig.theme.borderRadius
            }
        }
    }
}