// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './nuxt.config.ts',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#5EC4B8',
                accent: '#FFD166',
                neutral: '#F8FAFC',
                dark: '#1E293B'
            },
            fontFamily: {
                sans: ['"Nunito"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config


