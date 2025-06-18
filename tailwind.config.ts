
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Enhanced luxury color palette
				cream: '#FBF8F3',
				'warm-cream': '#F5F1E8',
				champagne: '#F7E7CE',
				gold: '#D4AF37',
				'rich-gold': '#B8860B',
				bronze: '#CD7F32',
				'warm-brown': '#8B4513',
				'dark-chocolate': '#3C2414',
				'soft-gray': '#F8F6F0',
				pearl: '#F0EDE5',
				// Premium brand colors
				'deep-burgundy': '#722F37',
				'rose-gold': '#E8B4A0',
				'champagne-gold': '#F7E7A3',
				'ivory': '#FFFFF0',
				'platinum': '#E5E4E2',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
				display: ['Playfair Display', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float-luxury': {
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg) rotateZ(0deg)' },
					'33%': { transform: 'translateY(-15px) rotateX(5deg) rotateZ(1deg)' },
					'66%': { transform: 'translateY(-8px) rotateX(-3deg) rotateZ(-1deg)' }
				},
				'shimmer-premium': {
					'0%': { backgroundPosition: '-300px 0', opacity: '0' },
					'50%': { opacity: '1' },
					'100%': { backgroundPosition: '300px 0', opacity: '0' }
				},
				'pulse-premium': {
					'0%, 100%': { 
						boxShadow: '0 0 30px rgba(114, 47, 55, 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 60px rgba(114, 47, 55, 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'brand-glow': {
					'0%, 100%': {
						textShadow: '0 0 30px rgba(114, 47, 55, 0.3)'
					},
					'50%': {
						textShadow: '0 0 50px rgba(114, 47, 55, 0.6), 0 0 80px rgba(232, 180, 160, 0.4)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out',
				'slide-up': 'slide-up 1s ease-out',
				'float-luxury': 'float-luxury 8s ease-in-out infinite',
				'shimmer-premium': 'shimmer-premium 4s infinite',
				'pulse-premium': 'pulse-premium 4s ease-in-out infinite',
				'brand-glow': 'brand-glow 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

