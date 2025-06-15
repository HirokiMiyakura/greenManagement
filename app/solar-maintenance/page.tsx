import Image from 'next/image';
import Link from 'next/link';
import LatestCases from '@/app/components/LatestCases';
import ContactCTA from '@/app/components/ContactCTA';

export default function Home() {
	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[60vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/service2.jpg"
						alt="太陽光発電所メンテナンス"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/40" />
				</div>
				<div className="container mx-auto px-4 relative z-10">
					<div className="max-w-3xl text-white">
						<h1 className="text-6xl font-bold mb-6 font-serif leading-20">
							太陽光発電所メンテナンス
						</h1>
						<p className="text-xl mb-8 leading-8">
							丁寧なメンテナンスで、発電効率を最大化します。
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり<span className="ps-4">&gt;</span>
							</Link>
							<Link
								href="/cases"
								className="bg-transparent text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center border-2 border-white"
							>
								施工事例を見る<span className="ps-4">&gt;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* サービス紹介 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						グリーンマネイジメントの太陽光発電所メンテナンスについて
					</h2>
					<div className="max-w-3xl mx-auto space-y-12">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								発電効率の維持
							</h3>
							<p className="text-gray-600 leading-relaxed">
								雑草の繁茂による発電効率の低下を防ぎます。パネル周辺の雑草を適切な高さに管理し、日射量を最大限に確保。定期的なメンテナンスにより、発電量の低下を最小限に抑え、投資回収期間の短縮を実現します。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								設備の長寿命化
							</h3>
							<p className="text-gray-600 leading-relaxed">
								雑草による湿気や害虫の発生を防ぎ、設備の劣化を抑制します。パネルや架台の腐食を防ぎ、設備の寿命を延長。定期的な点検とメンテナンスにより、長期的な安定運用をサポートします。
							</p>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-gray-900">
								安全な作業環境の確保
							</h3>
							<p className="text-gray-600 leading-relaxed">
								発電所内の安全な作業環境を維持します。雑草による視界不良や作業効率の低下を防ぎ、緊急時のアクセス性を確保。また、火災リスクの低減にも貢献し、発電所の安全性を高めます。
							</p>
						</div>

						<div className="text-center mt-8">
							<Link
								href="/contact"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								お問い合わせ<span className="ps-6">{'>'}</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 施工事例 */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						施工事例（太陽光発電所メンテナンス）
					</h2>
					<LatestCases category="solarmaintenance" />
					<div className="text-center mt-12">
						<Link
							href="/cases"
							className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
						>
							施工事例をもっと見る<span className="ps-6">&gt;</span>
						</Link>
					</div>
				</div>
			</section>

			{/* よくあるご質問 */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						よくあるご質問
					</h2>
					<div className="max-w-3xl mx-auto">
						<div className="space-y-6">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									メンテナンスの頻度はどのくらいですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									一般的に3ヶ月に1回の定期メンテナンスをお勧めしています。ただし、地域や季節によって草の成長速度が異なるため、発電所の状況に応じて最適な頻度をご提案させていただきます。春から夏にかけては頻度を上げることも可能です。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									メンテナンス作業中は発電を停止する必要がありますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									基本的に発電を停止する必要はありません。パネル周辺の草刈り作業は、発電に影響を与えることなく安全に実施できます。ただし、パネルの清掃や点検作業が必要な場合は、事前にご相談させていただきます。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									パネルの清掃も行っていますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									はい、パネルの清掃も承っております。汚れや鳥の糞などによる発電効率の低下を防ぐため、定期的な清掃をお勧めしています。清掃は専用の機材と洗剤を使用し、パネルを傷つけることなく安全に実施いたします。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									緊急対応は可能ですか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									はい、緊急対応も承っております。台風や大雨などの自然災害後、または雑草の急激な繁茂など、発電に影響を与える可能性がある場合は、できるだけ早く対応させていただきます。24時間以内の対応を心がけております。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									メンテナンスの料金はどのように決まりますか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									発電所の規模、作業の難易度、メンテナンスの頻度によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。定期的なメンテナンス契約の場合は、お得な料金プランもご用意しております。
								</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-bold mb-3 flex items-center">
									<span className="text-green-600 mr-2">Q.</span>
									除草剤は使用しますか？パネルへの影響はありませんか？
								</h3>
								<p className="text-gray-600 leading-8 flex items-start">
									<span className="text-green-600 mr-2">A.</span>
									環境に配慮した安全な除草剤を使用しています。パネルや設備への影響を考慮し、適切な散布方法を選択します。また、ご要望に応じて除草剤を使用しない方法もご提案可能です。いずれの場合も、発電設備への影響を最小限に抑えた作業を心がけております。
								</p>
							</div>
						</div>
						<div className="text-center mt-12">
							<Link
								href="/faq"
								className="inline-block bg-transparent text-green-600 hover:text-white px-12 py-4 rounded-full hover:bg-green-600 transition-colors text-center border-1"
							>
								よくあるご質問一覧を見る<span className="ps-6">&gt;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			<ContactCTA />
		</main>
	);
}
