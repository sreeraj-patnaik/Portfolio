// Universal JavaScript for all pages

document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeMobileMenu = document.querySelector('.close-mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (hamburgerMenu && mobileMenuOverlay && closeMobileMenu) {
        hamburgerMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });

        closeMobileMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'var(--white)';
                header.style.boxShadow = 'var(--shadow-medium)';
            } else {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            }
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateOnScrollElements.forEach(el => {
        observer.observe(el);
    });

    // --- CodeTech Page Specific Logic ---
    if (document.body.id === 'codetech-page') { // Add an ID to your codetech.html body tag: <body id="codetech-page">
        const videosData = [
            {
                id: "WDjC9o26OYg",
                youtubeId: "WDjC9o26OYg",
                title: "Flask Tutorial in Telugu Video-1 || Server side and Client side || Backend using Python || Computech1",
                description: "Introduction to Flask, server-side and client-side concepts.",
                playlist: "Flask Tutorials",
                resources: { notes: "Notes for Flask Video 1...", code: "Code for Flask Video 1...", links: "Links for Flask Video 1..." }
            },
            {
                id: "j1oyiVwWAuY",
                youtubeId: "j1oyiVwWAuY",
                title: "Flask Tutorial in Telugu Video-2 | First Flask Website || Routes | Decorators | Backend using Python",
                description: "Building your first Flask website with routes and decorators.",
                playlist: "Flask Tutorials",
                resources: {
                    notes: `
                        <h4>Key Concepts:</h4>
                        <ul>
                            <li>Closures capture variables from their lexical scope</li>
                            <li>Useful for data privacy and factory functions</li>
                            <li>Common in callbacks and async code</li>
                        </ul>
                        <h4>Common Pitfalls:</h4>
                        <ul>
                            <li>Unexpected variable values in loops</li>
                            <li>Memory leaks from unused closures</li>
                        </ul>
                        <div class="info-box">
                            <h5>Pro Tip:</h5>
                            <p>Use closures to implement private variables and modular code patterns.</p>
                        </div>
                    `,
                    code: `
                        <div class="code-block">
                            <button class="copy-code-btn" onclick="copyCode('flaskCode')"><i class="fas fa-copy"></i> Copy</button>
                            <pre><code id="flaskCode">
app = Flask(__name__)

@app.route("/")
def hello_world():
    return "&lt;p&gt;Hello, World!&lt;/p&gt;"

@app.route("/Raj")
def raj():
    return "&lt;p&gt;hello adasfdgrti m Raj&lt;/p&gt;"

app.run(debug=True)
                            </code></pre>
                        </div>
                    `,
                    links: `
                        <div class="link-item">
                            <i class="fas fa-link icon-small"></i>
                            <div>
                                <h4>Flask Official Documentation</h4>
                                <p>flask.palletsprojects.com</p>
                            </div>
                        </div>
                    `
                }
            },
            {
                id: "yLqiPgJtdeM",
                youtubeId: "yLqiPgJtdeM",
                title: "Pointers in C || Video-1 || Introduction || Telugu || Sreeraj || #coding #clanguagetelugu",
                description: "Introduction to pointers in C programming.",
                playlist: "C Language",
                resources: { notes: "Notes for C Pointers Video 1...", code: "Code for C Pointers Video 1...", links: "Links for C Pointers Video 1..." }
            },
            {
                id: "47uxTaDoAXM",
                youtubeId: "47uxTaDoAXM",
                title: "Bootstrap tutorial in Telugu | video-2| Complete bootstrap 5 tutorial #bootstrap #webdevelopment",
                description: "Advanced Bootstrap 5 concepts and usage.",
                playlist: "Bootstrap Tutorials",
                resources: { notes: "Notes for Bootstrap Video 2...", code: "Code for Bootstrap Video 2...", links: "Links for Bootstrap Video 2..." }
            },
            {
                id: "00qQh2zfmL0",
                youtubeId: "00qQh2zfmL0",
                title: "How To Host a WEBSITE for FREE using github",
                description: "Step-by-step guide to hosting websites on GitHub Pages.",
                playlist: "Web Hosting",
                resources: {
                    notes: `
                        <h4>Key Concepts:</h4>
                        <ul>
                            <li>GitHub Pages for static site hosting</li>
                            <li>Repository setup and deployment</li>
                            <li>Custom domain configuration</li>
                        </ul>
                        <div class="info-box">
                            <h5>Pro Tip:</h5>
                            <p>Always use a <code>.gitignore</code> file to exclude sensitive information or unnecessary files from your repository.</p>
                        </div>
                    `,
                    code: `
                        <div class="code-block">
                            <button class="copy-code-btn" onclick="copyCode('githubHostCode')"><i class="fas fa-copy"></i> Copy</button>
                            <pre><code id="githubHostCode">
# .gitignore example
node_modules/
.env
build/
                            </code></pre>
                        </div>
                    `,
                    links: `
                        <div class="link-item">
                            <i class="fab fa-github icon-small"></i>
                            <div>
                                <h4>GitHub Pages Documentation</h4>
                                <p>docs.github.com/en/pages</p>
                            </div>
                        </div>
                    `
                }
            },
            {
                id: "_7kolJB1JAo",
                youtubeId: "_7kolJB1JAo",
                title: "Bootstrap tutorial in Telugu | video-1 | Complete bootstrap 5 tutorial #bootstrap #webdevelopment",
                description: "Introduction to Bootstrap 5 framework.",
                playlist: "Bootstrap Tutorials",
                resources: { notes: "Notes for Bootstrap Video 1...", code: "Code for Bootstrap Video 1...", links: "Links for Bootstrap Video 1..." }
            },
            {
                id: "PpI8KouAKJs",
                youtubeId: "PpI8KouAKJs",
                title: "C- Language ట్యుటోరియల్స్ తెలుగు లో || QUALIFIERS PART 3",
                description: "Deep dive into qualifiers in C language.",
                playlist: "C Language",
                resources: { notes: "Notes for C Qualifiers Video 3...", code: "Code for C Qualifiers Video 3...", links: "Links for C Qualifiers Video 3..." }
            },
            {
                id: "fvGoZ5jU0Ik",
                youtubeId: "fvGoZ5jU0Ik",
                title: "C- Language ట్యుటోరియల్స్ తెలుగు లో || PART 2",
                description: "Part 2 of C language tutorials.",
                playlist: "C Language",
                resources: { notes: "Notes for C Video 2...", code: "Code for C Video 2...", links: "Links for C Video 2..." }
            },
            {
                id: "ylL9rebJYpk",
                youtubeId: "ylL9rebJYpk",
                title: "C- Language ట్యుటోరియల్స్ తెలుగు లో ||  PART 1",
                description: "Part 1 of C language tutorials.",
                playlist: "C Language",
                resources: { notes: "Notes for C Video 1...", code: "Code for C Video 1...", links: "Links for C Video 1..." }
            },
            {
                id: "g6cVFw4MPnk",
                youtubeId: "g6cVFw4MPnk",
                title: "Number guessing game in Python",
                description: "Build a simple number guessing game using Python.",
                playlist: "Python Projects",
                resources: { notes: "Notes for Python Guessing Game...", code: "Code for Python Guessing Game...", links: "Links for Python Guessing Game..." }
            },
            {
                id: "9rYdlHUrGwc",
                youtubeId: "9rYdlHUrGwc",
                title: "MS DOS Commands in telugu || CLI vs GUI",
                description: "Understanding MS DOS commands and CLI vs GUI.",
                playlist: "Operating Systems",
                resources: { notes: "Notes for MS DOS...", code: "", links: "" }
            },
            {
                id: "n16U6boVc84",
                youtubeId: "n16U6boVc84",
                title: "IQOO Z9s Unboxing in telugu",
                description: "Unboxing and review of IQOO Z9s.",
                playlist: "Tech Reviews",
                resources: { notes: "", code: "", links: "" }
            },
            {
                id: "W-ZTsHbWbVU",
                youtubeId: "W-ZTsHbWbVU",
                title: "How to convert PDF to Word in telugu",
                description: "Tutorial on converting PDF to Word documents.",
                playlist: "Software Tutorials",
                resources: { notes: "", code: "", links: "" }
            },
            {
                id: "--nrRiDpG-Q",
                youtubeId: "--nrRiDpG-Q",
                title: "A Tool to make ppt in 1 click",
                description: "Discover a tool for quick PowerPoint presentations.",
                playlist: "Software Tutorials",
                resources: { notes: "", code: "", links: "" }
            },
            {
                id: "ksTUc0eIIKQ",
                youtubeId: "ksTU0eIIKQ",
                title: "MS Power Point Tutorial in Telugu - 2",
                description: "Part 2 of MS PowerPoint tutorial.",
                playlist: "Software Tutorials",
                resources: { notes: "", code: "", links: "" }
            },
            {
                id: "1e5VQeVMm0E",
                youtubeId: "1e5VQeVMm0E",
                title: "MS Power Point Tutorial in Telugu - 1",
                description: "Part 1 of MS PowerPoint tutorial.",
                playlist: "Software Tutorials",
                resources: { notes: "", code: "", links: "" }
            }
        ];

        let showAllVideos = false; // State for "View More" button

        function renderFeaturedVideos() {
            const container = document.getElementById('featuredVideosGrid');
            if (!container) return;

            let videosToRender = showAllVideos ? videosData : videosData.slice(0, 6); // Show first 6 by default

            container.innerHTML = videosToRender.map(v => `
                <div class="video-card animate-on-scroll">
                    <iframe src="https://www.youtube.com/embed/${v.youtubeId}"
                        title="${v.title}" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                    <div class="card-content">
                        <h3>${v.title}</h3>
                        <p>${v.description}</p>
                        <button class="btn btn-link" onclick="showResource('${v.id}');">View Resources <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            `).join('');

            const toggleBtn = document.getElementById('toggleVideosBtn');
            if (toggleBtn) {
                if (videosData.length > 6) {
                    toggleBtn.style.display = 'inline-flex'; // Show button if more than 6 videos
                    toggleBtn.textContent = showAllVideos ? 'View Less Videos' : 'View More Videos';
                } else {
                    toggleBtn.style.display = 'none'; // Hide if less than or equal to 6
                }
            }
        }

        function renderResourceSidebar(filter = "") {
            const sidebar = document.getElementById('videoListSidebar');
            if (!sidebar) return;

            let filteredVideos = videosData;
            if (filter.trim()) {
                const f = filter.trim().toLowerCase();
                filteredVideos = videosData.filter(v =>
                    v.title.toLowerCase().includes(f) ||
                    v.playlist.toLowerCase().includes(f) ||
                    v.description.toLowerCase().includes(f)
                );
            }

            if (filteredVideos.length === 0) {
                sidebar.innerHTML = `<p class="no-results">No videos found matching your search.</p>`;
                return;
            }

            sidebar.innerHTML = filteredVideos.map(v => `
                <div class="video-item" data-video-id="${v.id}" onclick="showResource('${v.id}')">
                    <div class="video-thumbnail-small">
                        <img src="https://img.youtube.com/vi/${v.youtubeId}/default.jpg" alt="${v.title} thumbnail">
                    </div>
                    <div class="video-info-small">
                        <h4>${v.title}</h4>
                        <p>${v.playlist}</p>
                    </div>
                </div>
            `).join('');

            // Automatically select the first video if no filter and content exists
            if (!filter && filteredVideos.length > 0) {
                const firstVideoItem = sidebar.querySelector('.video-item');
                if (firstVideoItem) {
                    firstVideoItem.classList.add('active');
                }
            }
        }

        function showResource(id) {
            const video = videosData.find(v => v.id === id);
            const resourceContent = document.getElementById('resourceContent');
            if (!video || !resourceContent) return;

            // Remove active class from all sidebar items and add to the clicked one
            document.querySelectorAll('.video-item').forEach(item => item.classList.remove('active'));
            const selectedItem = document.querySelector(`.video-item[data-video-id="${id}"]`);
            if (selectedItem) {
                selectedItem.classList.add('active');
            }

            resourceContent.innerHTML = `
                <h3>${video.title}</h3>
                <iframe src="https://www.youtube.com/embed/${video.youtubeId}"
                    title="${video.title}" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <div class="tab-buttons">
                    <button class="tab-button active" data-tab="notes">Notes</button>
                    <button class="tab-button" data-tab="code">Source Code</button>
                    <button class="tab-button" data-tab="links">Useful Links</button>
                </div>
                <div class="resource-tab-content"></div>
            `;

            const tabButtons = resourceContent.querySelectorAll('.tab-button');
            const resourceTabContent = resourceContent.querySelector('.resource-tab-content');

            function renderTabContent(tabName) {
                resourceTabContent.innerHTML = video.resources[tabName] || `<p>No ${tabName} available for this video.</p>`;
            }

            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    renderTabContent(button.dataset.tab);
                });
            });

            // Render notes tab by default
            renderTabContent('notes');
        }

        function copyCode(elementId) {
            const codeElement = document.getElementById(elementId);
            if (codeElement) {
                const codeText = codeElement.innerText;
                navigator.clipboard.writeText(codeText).then(() => {
                    alert('Code copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy code: ', err);
                });
            }
        }
        window.copyCode = copyCode; // Make it globally accessible for onclick

        // Initialize CodeTech page elements
        if (document.getElementById('codetech-page')) {
            renderFeaturedVideos();
            renderResourceSidebar();
            if (videosData.length > 0) {
                showResource(videosData[0].id); // Load first video's resources by default
            }

            const toggleVideosBtn = document.getElementById('toggleVideosBtn');
            if (toggleVideosBtn) {
                toggleVideosBtn.addEventListener('click', () => {
                    showAllVideos = !showAllVideos;
                    renderFeaturedVideos();
                });
            }

            const videoSearchInput = document.getElementById('videoSearch');
            if (videoSearchInput) {
                videoSearchInput.addEventListener('input', (e) => {
                    renderResourceSidebar(e.target.value);
                });
            }
        }
    }
});
