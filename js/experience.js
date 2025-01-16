document.addEventListener('DOMContentLoaded', function() {
    // 取得所有的工作經驗項目
    var experienceItems = document.querySelectorAll('.experience-item');
    // 設置初始的延遲時間
    var delay = 0;
    // 對每個工作經驗項目應用淡入效果
    experienceItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add('visible');
        }, delay);
        // 增加下一個項目的延遲時間
        delay += 200; // 每個項目之間的延遲時間為 200 毫秒
    });
});

function toggleDetails(id) {
    var details = document.getElementById('details' + id);
    var container = details.parentElement;
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        container.classList.remove('expanded');
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        container.classList.add('expanded');
    }
}
