import { client } from '@/libs/client';
import Image from 'next/image';

type Case = {
	id: string;
	title: string;
	before_img: {
		url: string;
		height: number;
		width: number;
	};
	after_img: {
		url: string;
		height: number;
		width: number;
	};
	content: string;
	category: {
		id: string;
		name: string;
	};
	publishedAt: string;
};

async function getCasePosts(category?: string) {
	const queries = category ? { filters: `category[contains]${category}` } : {}; // category が未指定なら全件取得

	const data = await client.get({
		endpoint: 'cases',
		queries,
	});

	return data.contents;
}

type Props = {
	category?: string;
};

export default async function ShowCasePosts({ category }: Props) {
	try {
		const cases = await getCasePosts(category);

		if (!cases || cases.length === 0) {
			return (
				<div className="text-center text-gray-600 py-8">
					施工事例が見つかりませんでした。
				</div>
			);
		}

		return (
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{cases.map((caseItem: Case) => (
					<div key={caseItem.id} className="group">
						<div className="relative h-64 mb-4 overflow-hidden rounded-lg">
							<Image
								src={caseItem.after_img.url}
								alt={caseItem.title}
								fill
								className="object-cover transition-transform group-hover:scale-105"
							/>
						</div>
						<h3 className="text-lg font-bold mb-2">{caseItem.title}</h3>
						<p className="text-gray-600">{caseItem.category.name}</p>
					</div>
				))}
			</div>
		);
	} catch (error) {
		console.error('施工事例の取得に失敗しました:', error);
		return (
			<div className="text-center text-red-600 py-8">
				施工事例の読み込み中にエラーが発生しました。
			</div>
		);
	}
}
