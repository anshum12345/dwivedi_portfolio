import React from 'react';

export default function Footer() {
	return (
		<footer className="bg-white text-slate-900 dark:bg-black dark:text-white mt-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
				<p className="text-gray-600 dark:text-gray-400 text-sm">
					© {new Date().getFullYear()} Anshum Dwivedi. All rights reserved. Built with ❤️ using React & Tailwind CSS.
				</p>
			</div>
		</footer>
	);
}
