/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
        './src/widgets/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'inter': 'Inter'
            },
            colors: {
                'btns-dark': '#212B31',
                'btns-light': '#DADEDF',
                'links-blue': '#036FC7',
                'black': '#212B31',
                'gray': '#72787D'
            },
        },
        plugins: [],
    }
}
