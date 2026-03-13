document.addEventListener('DOMContentLoaded', function() {
	const simpleViewBtn = document.getElementById('simple-view');
	const detailViewBtn = document.getElementById('detail-view');
	const timeline = document.getElementById('timeline');
	const timelineItems = document.querySelectorAll('.timeline-item');

	// 简洁视图
	simpleViewBtn.addEventListener('click', function() {
		timeline.classList.add('simple-view');
		simpleViewBtn.classList.add('active');
		detailViewBtn.classList.remove('active');
	});

	// 详细视图
	detailViewBtn.addEventListener('click', function() {
		timeline.classList.remove('simple-view');
		detailViewBtn.classList.add('active');
		simpleViewBtn.classList.remove('active');
	});

	// 自动按时间排序（按日期降序，最新的在前）
	function sortTimelineItems() {
		const items = Array.from(timelineItems);
		items.sort((a, b) => {
			const dateA = new Date(a.dataset.date);
			const dateB = new Date(b.dataset.date);
			return dateB - dateA;
		});

		// 重新插入排序后的元素
		items.forEach(item => timeline.appendChild(item));
	}

	// 初始化时进行排序
	sortTimelineItems();
});
