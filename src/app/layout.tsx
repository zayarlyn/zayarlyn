import { BackgroundBeamsWithCollision } from '@components/aceternity'
import { Heading, Nav } from '@components/ui'
import { Analytics } from '@vercel/analytics/react'
import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const title = 'Zayar Lin | The Honored One'

export const metadata: Metadata = {
	title,
	description: 'A programmer with latent potential',
	openGraph: {
		title,
		description: 'A programmer with latent potential',
		// description: 'Through heaven and earth, I alone am the honored one',
		siteName: title,
		// images: ['/favicon.svg'],
	},
}

const rubik = Rubik({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const shouldInjectToolbar = process.env.NODE_ENV === 'development'

	return (
		<html lang='en' className=''>
			<body className={`${rubik.className} antialiased dark:text-white text-black`}>
				<BackgroundBeamsWithCollision className='-z-10 fixed top-0 left-0 h-screen md:h-screen' />
				<section className='max-w-2xl mx-auto w-11/12 px-1 pt-8' tabIndex={-1}>
					<Heading />
				</section>
				<Nav />
				<main className='max-w-2xl mx-auto w-11/12 pb-8  px-1'>{children}</main>
				<Analytics />
				{shouldInjectToolbar && <VercelToolbar />}
			</body>
		</html>
	)
}
