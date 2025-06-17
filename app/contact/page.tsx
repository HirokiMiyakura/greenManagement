'use client';

import Image from 'next/image';

export default function ContactPage() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[60vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/contact.jpg"
						alt="庭のメンテナンス"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" />
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-2xl text-white">
						<h1 className="text-6xl font-bold mb-6 font-serif leading-20">
							お問い合わせ
						</h1>
						<p className="text-xl mb-8 leading-8">
							お庭のことでお困りの際は、お気軽にお問い合わせください。
							<br />
							無料でお見積り・ご相談を承っております。
						</p>
					</div>
				</div>
			</section>

			{/* お問い合わせフォーム */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSe5HsatNu7vcRi32Z-fCRskwnciygReYYMz6IkgzYlPA0NP5Q/viewform?embedded=true"
							width="100%"
							height="1325"
							// frameBorder="0"
							// marginHeight={0}
							// marginWidth={0}
						>
							読み込んでいます…
						</iframe>
					</div>
				</div>
			</section>

			{/* お問い合わせ方法 */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold text-center mb-12 font-serif">
						その他のお問い合わせ方法
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<h3 className="text-lg font-bold mb-4">お電話でのお問い合わせ</h3>
							<p className="text-gray-600 mb-4">営業時間: 9:00 - 18:00</p>
							<a
								href="tel:080-1234-5678"
								className="text-green-600 hover:text-green-500 font-bold"
							>
								080-1234-5678
							</a>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm">
							<h3 className="text-lg font-bold mb-4">LINEでのお問い合わせ</h3>
							<p className="text-gray-600 mb-4">24時間受付</p>
							<a
								href="https://page.line.me/773gofea?oat_content=url&openQrModal=true"
								className="text-green-600 hover:text-green-500"
								target="_blank"
								rel="noopener noreferrer"
							>
								LINE友達追加
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
