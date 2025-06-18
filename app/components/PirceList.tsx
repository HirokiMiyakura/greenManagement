import Link from 'next/link';

<section className="py-20 bg-gray-50">
	<div className="container mx-auto px-4">
		<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
			料金プラン
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{/* お試し利用 */}
			<div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
				<div className="p-6">
					<h3 className="text-xl font-bold mb-4">お試し利用</h3>
					<p className="text-gray-500 mb-4">はじめてご利用のお客さま</p>
					<div className="text-2xl font-bold text-green-600 mb-6">¥5,000~</div>
					<ul className="space-y-3 mb-6">
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>初回限定料金でご案内</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>LINE友達登録で特典</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>この機会にお試しください</span>
						</li>
					</ul>
					<Link
						href="/estimate"
						className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
					>
						初回限定料金で利用する
					</Link>
				</div>
			</div>

			{/* 通常利用 */}
			<div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-green-600 transform scale-105">
				<div className="p-6">
					<h3 className="text-xl font-bold mb-4">通常利用</h3>
					<p className="text-gray-500 mb-4">2回目以降ご利用のお客さま</p>
					<div className="text-2xl font-bold text-green-600 mb-6">¥15,000~</div>
					<ul className="space-y-3 mb-6">
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>面積に応じた割引</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>刈高等の調整可能</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>詳細は別途ご相談</span>
						</li>
					</ul>
					<Link
						href="/contact"
						className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
					>
						お問い合わせ
					</Link>
				</div>
			</div>

			{/* サブスクリプション */}
			<div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
				<div className="p-6">
					<h3 className="text-xl font-bold mb-4">サブスクリプション</h3>
					<p className="text-gray-500 mb-4">定期利用のお客さま</p>
					<div className="text-2xl font-bold text-green-600 mb-6">
						¥100,000~
					</div>
					<ul className="space-y-3 mb-6">
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>定期的な保守管理</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>時間的コストを削減</span>
						</li>
						<li className="flex items-start">
							<svg
								className="h-5 w-5 text-green-600 mr-2 mt-1"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
							<span>雑草の高さを管理</span>
						</li>
					</ul>
					<Link
						href="/contact"
						className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
					>
						お問い合わせ
					</Link>
				</div>
			</div>
		</div>
	</div>
</section>;
