import { useState } from 'react';

interface FAQItem {
	question: string;
	answer: string;
}

interface FAQTabProps {
	items: FAQItem[];
}

export default function FAQTab({ items }: FAQTabProps) {
	return (
		<div className="space-y-6">
			{items.map((item, index) => (
				<div key={index} className="bg-white rounded-lg p-6 shadow-md">
					<h3 className="text-lg font-bold mb-3 flex items-center">
						<span className="text-green-600 mr-2">Q.</span>
						{item.question}
					</h3>
					<p className="text-gray-600 leading-8 flex items-start">
						<span className="text-green-600 mr-2">A.</span>
						{item.answer}
					</p>
				</div>
			))}
		</div>
	);
}
