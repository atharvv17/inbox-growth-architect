
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom midnight trust theme
				midnight: {
					background: '#0F0F10',
					surface: '#1A1B1F',
					primary: '#00CFFF',
					accent: '#1EAEDB',
					text: '#FFFFFF',
					subtext: '#A3A3A3',
					success: '#00C896',
					warning: '#FFB547'
				},
				// Logo-based colors
				logo: {
					blue: '#00CFFF',
					lightBlue: '#7EEAFF',
					darkBlue: '#0095B8',
				},
				// New futuristic neon colors
				neon: {
					blue: '#00AAFF',
					purple: '#9D00FF',
					green: '#00FF66',
					pink: '#FF00AA',
					yellow: '#FFCC00',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px 0 rgba(0, 170, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(0, 170, 255, 0.7)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
				'shimmer': {
					'100%': { transform: 'translateX(100%)' },
				},
				'grid-flow': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-right': 'fade-in-right 0.5s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'flow': 'flow 15s linear infinite alternate',
				'shimmer': 'shimmer 2s infinite',
				'grid-flow': 'grid-flow 20s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'cyber-grid': 'linear-gradient(var(--muted) 1px, transparent 1px), linear-gradient(to right, var(--muted) 1px, transparent 1px)',
				'glow-conic': 'conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)) 0deg, hsl(var(--secondary)) 180deg, hsl(var(--accent)) 360deg)',
			},
			backgroundSize: {
				'cyber-grid': '40px 40px',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
