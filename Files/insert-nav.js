document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
        <nav>
            <div class="nav-container">
                <a href="./index.html" class="nav-logo">MyLogo</a>
                <ul class="nav-links">
                    <li><a href="./index.html">我的主页</a></li>
                    <li><a href="./视频索引.html">视频索引</a></li>
                    <li><a href="./更新日志.html">更新日志</a></li>
                    <li><a href="./材料下载.html">材料下载</a></li>
                </ul>
            </div>
        </nav>
    `;
    document.querySelector('header').innerHTML = navHTML;
});
