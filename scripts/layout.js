(function () {
    async function loadFragment(targetId, url) {
        const target = document.getElementById(targetId);
        if (!target) return;

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Unable to load ${url}: ${response.status}`);
        }

        target.innerHTML = await response.text();
    }

    async function loadLayout() {
        try {
            await Promise.all([
                loadFragment('header-placeholder', './header/header.html?v=20260520-news'),
                loadFragment('footer-placeholder', './footer/footer.html')
            ]);

            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const topNav = document.getElementById('topNav');

            if (mobileMenuBtn && topNav) {
                mobileMenuBtn.addEventListener('click', function () {
                    topNav.classList.toggle('active');
                });
            }
        } catch (error) {
            console.error('Failed to load the shared site layout.', error);
        }
    }

    loadLayout();
}());
