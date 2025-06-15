'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactCTA from '../components/ContactCTA';
import FAQTab from '../components/FAQTab';

const grassCuttingFAQs = [
	{
		question: '草刈りの料金はどのように決まりますか？',
		answer:
			'面積、草の高さ、作業の難易度によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。定期的なメンテナンス契約の場合は、お得な料金プランもご用意しております。',
	},
	{
		question: '除草剤は使用しますか？安全ですか？',
		answer:
			'環境に配慮した安全な除草剤を使用しています。ご要望に応じて、除草剤を使用しない方法もご提案可能です。いずれの場合も、安全性を最優先に作業を行います。',
	},
	{
		question: '草刈り後の草の処分はどうなりますか？',
		answer:
			'刈り取った草は全て回収し、適切に処分いたします。ご要望に応じて、堆肥化のご提案も可能です。',
	},
	{
		question: '雨の日でも作業は可能ですか？',
		answer:
			'小雨の場合は作業可能ですが、大雨の場合は安全のため延期させていただく場合がございます。天候による作業の可否は、作業当日の状況を確認の上、ご連絡させていただきます。',
	},
	{
		question: '定期的なメンテナンスの頻度はどのくらいですか？',
		answer:
			'一般的に月1回のメンテナンスをお勧めしています。ただし、季節や草の成長速度によって頻度を調整させていただきます。春から夏にかけては頻度を上げることも可能です。',
	},
	{
		question: '作業時間はどのくらいかかりますか？',
		answer:
			'一般的な庭（約100㎡）の場合、1〜2時間程度です。ただし、面積や草の状態によって作業時間は変わります。現地調査時に、より具体的な作業時間をご案内させていただきます。',
	},
];

const solarMaintenanceFAQs = [
	{
		question: 'メンテナンスの頻度はどのくらいですか？',
		answer:
			'一般的に3ヶ月に1回の定期メンテナンスをお勧めしています。ただし、地域や季節によって草の成長速度が異なるため、発電所の状況に応じて最適な頻度をご提案させていただきます。春から夏にかけては頻度を上げることも可能です。',
	},
	{
		question: 'メンテナンス作業中は発電を停止する必要がありますか？',
		answer:
			'基本的に発電を停止する必要はありません。パネル周辺の草刈り作業は、発電に影響を与えることなく安全に実施できます。ただし、パネルの清掃や点検作業が必要な場合は、事前にご相談させていただきます。',
	},
	{
		question: 'パネルの清掃も行っていますか？',
		answer:
			'はい、パネルの清掃も承っております。汚れや鳥の糞などによる発電効率の低下を防ぐため、定期的な清掃をお勧めしています。清掃は専用の機材と洗剤を使用し、パネルを傷つけることなく安全に実施いたします。',
	},
	{
		question: '緊急対応は可能ですか？',
		answer:
			'はい、緊急対応も承っております。台風や大雨などの自然災害後、または雑草の急激な繁茂など、発電に影響を与える可能性がある場合は、できるだけ早く対応させていただきます。24時間以内の対応を心がけております。',
	},
	{
		question: 'メンテナンスの料金はどのように決まりますか？',
		answer:
			'発電所の規模、作業の難易度、メンテナンスの頻度によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。定期的なメンテナンス契約の場合は、お得な料金プランもご用意しております。',
	},
	{
		question: '除草剤は使用しますか？パネルへの影響はありませんか？',
		answer:
			'環境に配慮した安全な除草剤を使用しています。パネルや設備への影響を考慮し、適切な散布方法を選択します。また、ご要望に応じて除草剤を使用しない方法もご提案可能です。いずれの場合も、発電設備への影響を最小限に抑えた作業を心がけております。',
	},
];

const artificialGrassFAQs = [
	{
		question: '人工芝の寿命はどのくらいですか？',
		answer:
			'一般的に8〜10年程度です。ただし、使用頻度やメンテナンス状況によって変わります。当社では高品質な人工芝を使用し、適切な施工を行うことで、より長い寿命を実現しています。また、定期的なメンテナンスにより、美しさと機能性を長く保つことができます。',
	},
	{
		question: '下地工事は必要ですか？',
		answer:
			'はい、適切な下地工事は必須です。水はけの悪い下地では、人工芝の寿命が短くなったり、カビが発生したりする可能性があります。当社では、現地調査を行い、最適な下地工事を提案させていただきます。砂利や砕石を使用した排水層の構築など、丁寧な下地処理を行います。',
	},
	{
		question: 'ペットを飼っていますが、問題ありませんか？',
		answer:
			'問題ありません。当社の人工芝は、ペットの爪や排泄物にも強い耐久性を持っています。また、適切な下地処理により、においや汚れも気になりにくい設計になっています。ペットと一緒に快適に過ごせる空間づくりをサポートいたします。',
	},
	{
		question: 'メンテナンスは必要ですか？',
		answer:
			'天然芝と比べて大幅にメンテナンスの手間は減りますが、長持ちさせるためには定期的なケアが推奨されます。主なメンテナンスは、ブラッシングによる芝の立ち上げ、落ち葉やゴミの除去、必要に応じた洗浄などです。当社では、メンテナンス方法のご説明や、定期的なメンテナンスサービスも提供しております。',
	},
	{
		question: '施工期間はどのくらいかかりますか？',
		answer:
			'一般的な庭（約20㎡）の場合、下地工事を含めて2〜3日程度です。ただし、敷地面積や地形、下地の状態によって期間は変わります。現地調査時に、より具体的な施工期間をご案内させていただきます。また、天候によっては工期が変更になる場合もございます。',
	},
	{
		question: '料金はどのように決まりますか？',
		answer:
			'敷地面積、使用する人工芝の種類、下地工事の内容によって料金が変わります。まずは無料で現地調査を行い、お見積りをご提示させていただきます。高品質な人工芝と丁寧な施工で、長くお楽しみいただける空間づくりをご提案いたします。',
	},
];

export default function Home() {
	const [activeTab, setActiveTab] = useState('grass-cutting');

	return (
		<main>
			{/* ヒーローセクション */}
			<section className="relative h-[60vh] flex items-center">
				<div className="absolute inset-0 z-0">
					<Image
						src="/faq.jpg"
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
							よくあるご質問
						</h1>
						<p className="text-xl mb-8 leading-8">
							皆様から寄せられた質問をまとめております
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/contact"
								className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-center border-2 border-green-600 hover:border-green-700"
							>
								無料見積もり<span className="ps-4">&gt;</span>
							</Link>
							<Link
								href="/case-studies"
								className="bg-transparent text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-center border-2 border-white"
							>
								施工事例を見る<span className="ps-4">&gt;</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* FAQセクション */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-green-600 text-3xl font-bold text-center mb-12 font-serif">
						よくあるご質問
					</h2>
					<div className="max-w-3xl mx-auto">
						{/* タブ */}
						<div className="flex justify-center mb-8">
							<div className="inline-flex">
								<button
									onClick={() => setActiveTab('grass-cutting')}
									className={`px-8 py-2 rounded-md text-lg font-medium ${
										activeTab === 'grass-cutting'
											? 'bg-white text-green-600 shadow-sm'
											: 'text-gray-500 hover:text-gray-700'
									}`}
								>
									草刈り
								</button>
								<button
									onClick={() => setActiveTab('solar-maintenance')}
									className={`px-8 py-2 rounded-md text-lg font-medium ${
										activeTab === 'solar-maintenance'
											? 'bg-white text-green-600 shadow-sm'
											: 'text-gray-500 hover:text-gray-700'
									}`}
								>
									太陽光発電所メンテナンス
								</button>
								<button
									onClick={() => setActiveTab('artificial-grass')}
									className={`px-8 py-2 rounded-md text-lg font-medium ${
										activeTab === 'artificial-grass'
											? 'bg-white text-green-600 shadow-sm'
											: 'text-gray-500 hover:text-gray-700'
									}`}
								>
									人工芝施工
								</button>
							</div>
						</div>

						{/* FAQコンテンツ */}
						<div className="mt-8">
							{activeTab === 'grass-cutting' && (
								<FAQTab items={grassCuttingFAQs} />
							)}
							{activeTab === 'solar-maintenance' && (
								<FAQTab items={solarMaintenanceFAQs} />
							)}
							{activeTab === 'artificial-grass' && (
								<FAQTab items={artificialGrassFAQs} />
							)}
						</div>
					</div>
				</div>
			</section>

			<ContactCTA />
		</main>
	);
}
