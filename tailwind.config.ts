import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'ping-slow': {
                    '75%, 100%': {
                        transform: 'scale(1.35)',
                        opacity: '0.75',
                    },
                },
            },
            animation: {
                'ping-slow': 'ping-slow 4.25s ease-in-out infinite',
            },
        },
    },
    plugins: [require('daisyui')],
}
export default config
