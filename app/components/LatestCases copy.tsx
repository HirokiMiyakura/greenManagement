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
	category: string;
	publishedAt: string;
};

// 日付整形関数を追加
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = date.getMonth() + 1; // 0始まりなので+1
	const day = date.getDate();
	return `${year}.${month}.${day}`;
};

async function getCasePosts(category?: string) {
	const queries: any = {
		fields: 'id,title,before_img,after_img,content,category,publishedAt',
		limit: 3,
	};

	// カテゴリーが指定されている場合はフィルターを追加
	if (category) {
		queries.filters = `category[equals]${category}`;
	}

	const data = await client.get({
		endpoint: 'cases',
		queries,
	});

	console.log(data);
	return data.contents;
}

export default async function ShowCasePosts({
	category,
}: {
	category?: string;
}) {
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
						<p className="text-gray-600">{caseItem.category}</p>
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
