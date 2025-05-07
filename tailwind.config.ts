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
                primary: '#5EC4B8',  // soft teal
                accent: '#FFD166',   // warm yellow
                neutral: '#F8FAFC',  // off white
                dark: '#1E293B'      // navy/blue-gray
            },
            fontFamily: {
                sans: ['"Nunito"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config


