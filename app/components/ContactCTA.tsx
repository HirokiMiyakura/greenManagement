import Link from 'next/link';

interface ContactCTAProps {
	title?: string;
	description?: string;
	className?: string;
}

export default function ContactCTA({
	title = 'お問い合わせ',
	description = '無料でお見積り・ご相談を承っております。\nお庭のことでお困りの際は、ぜひご連絡ください。',
	className = 'py-20 bg-gray-50',
}: ContactCTAProps) {
	return (
		<section className={className}>
			<div className="container mx-auto px-4">
				<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
					{title}
				</h2>
				<p className="text-lg text-center text-gray-600 mb-8 whitespace-pre-line">
					{description}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="/contact"
						className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
					>
						お問い合わせ<span className="ps-4">&gt;</span>
					</Link>
					<Link
						href="/estimate"
						className="bg-transparent text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center border-2 border-gray-300 hover:border-gray-400"
					>
						簡単お見積もり<span className="ps-4">&gt;</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
