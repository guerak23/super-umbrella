console.log(
    "%c Dur Yolcu! ✋",
    "color: #06b6d4; font-size: 24px; font-weight: bold; text-shadow: 2px 2px #000;"
);
console.log(
    "%c Kodları incelediğini görüyorum. Eğer bir açık bulursan contact@burakfidan.com.tr adresinden bana ulaşabilirsin, Tahaya TEŞEKKÜRLER.",
    "color: #94a3b8; font-size: 14px;"
);
console.log(
    "%c PGP Key: https://burakfidan.dev/public_key.asc",
    "color: #3b82f6; font-size: 12px;"
);

// Geliştirilmiş Proje Listesi (Erasmus+, Yazılım ve Tasarım)


const projects = [

    {
        id: 1,
        title: "tbtsocial Social Media Agency",
        description: "Sosyal medya yönetimi, video prodüksiyon, grafik tasarım ve Python tabanlı otomasyon çözümleri sunan dijital ajans. Kurucu olarak ekip yönetimi ve müşteri ilişkileri.",
        tags: ["Founder", "Social Media", "Python Automation", "Content Strategy"],
        demo: "https://socialtbt.com.tr/",
        github: ""
    },
    {
        id: 2,
        title: "Digitopia: Green Code",
        description: "6 ülkeden katılımcıyla gerçekleştirilen Erasmus+ KA152 Gençlik Değişimi. E-atık yönetimi ve dijital karbon ayak izi üzerine proje koordinatörlüğü ve proje yazarlığı.",
        tags: ["Project Coordinator", "Project Author", "Erasmus+ KA152", "6 Countries"],
        demo: "https://www.youthpass.eu/verify/Z3JM-PN3J-M6DW-MEVK",
        github: ""
    },
    {
        id: 3,
        title: "Spor Politikalarına Genç Bakış (National Summit)",
        description: "Anadolu Parsı Gençlik ve Spor Kulübü tarafından düzenlenen Ulusal Zirve. Gençlerin spor politikalarına katılımı üzerine savunuculuk ve politika geliştirme çalışmaları.",
        tags: ["Policy Making", "Youth Participation", "Advocacy", "National Summit"],
        demo: "https://www.youthpass.eu/verify/86MZ-T6RJ-XZNA-WQAC",
        github: ""
    },
    {
        id: 4,
        title: "Spor Politikalarına Genç Bakış (Regional Workshop)",
        description: "Karar alma mekanizmalarına gençlik katılımı ve aktif vatandaşlık üzerine bölgesel çalıştay. Spor politikalarını şekillendirmek için yerel düzeyde analizler.",
        tags: ["Active Citizenship", "Workshop", "Sports Policy", "Non-formal Edu."],
        demo: "https://www.youthpass.eu/verify/KMVF-G5US-3Z11-D9JY",
        github: ""
    },
    {
        id: 5,
        title: "Creative Design Portfolio",
        description: "MİMCE (Milli Mühendisler Cemiyeti) ve Genç EHAD için hazırlanan kurumsal kimlik çalışmaları, sosyal medya tasarımları ve etkinlik afişleri. (Canva & Photoshop)",
        tags: ["Graphic Design", "Adobe Photoshop", "Brand Identity", "Social Media"],
        demo: "https://www.behance.net/burakfday",
        github: ""
    },
    {
        id: 6,
        title: "Against Internet Slang",
        description: "Dünya Yazarlar ve Aydınlar Derneği tarafından düzenlenen, dijital çağda dilin korunması üzerine eğitim kursu. Premiere Pro ile içerik üretimi ve ekip koordinasyonu.",
        tags: ["Erasmus+", "Content Creator", "Premiere Pro", "Team Lead"],
        demo: "https://www.youthpass.eu/verify/B26S-M94E-WH3Y-LDQL",
        github: ""
    },
    {
        id: 7,
        title: "Youth: Find Your \"Self\"",
        description: "Mersin Üniversitesi tarafından düzenlenen Erasmus+ eğitim kursu. Gençlerin kişisel gelişim süreçlerini destekleme, motivasyon ve geleceğe umutla bakış odaklı çalışmalar.",
        tags: ["Erasmus+ KA153", "Youth Work", "Personal Development", "Intercultural"],
        demo: "https://www.youthpass.eu/verify/ST34-T2UK-F2RT-MCXK",
        github: ""
    },
    {
        id: 8,
        title: "Planning My Career",
        description: "Eğitimde Görme Engelliler Derneği projesi. Engelli ve engelsiz gençlerin istihdamda karşılaştığı zorlukları ele alan, kapsayıcı politika geliştirme odaklı ulusal zirve.",
        tags: ["Erasmus+", "Inclusive Employment", "Policy Advocacy", "Active Citizenship"],
        demo: "https://www.youthpass.eu/verify/2AA7-JBBZ-Z12Q-AC9J",
        github: ""
    },
    {
        id: 9,
        title: "Aerospace and Space Camp",
        description: "TÜBİTAK ve Gençlik Bakanlığı iş birliğiyle düzenlenen seçici kampa katılım. Savunma teknolojileri, astronomi ve uzay ekosistemi üzerine uzman oturumları.",
        tags: ["TÜBİTAK", "Aerospace", "Defense Tech", "Selected Participant"],
        demo: "",
        github: ""
    },
    {
        id: 10,
        title: "Employment 5.0: Integrating Young People into the Digital Future",
        description: "Gençlerin dijital ekonomiye ve geleceğin iş dünyasına entegrasyonunu konu alan Erasmus+ projesi.",
        tags: ["Erasmus+", "Digital Economy", "Future of Work", "Youth"],
        demo: "", // Sertifika gelince buraya youthpass linki ekle
        github: ""
    },
    {
        id: 11,
        title: "Dijital Çağda İnsani Yardım Zirvesi",
        description: "Trabzon Gençlik Merkezleri projesi. İnsani yardım süreçlerinde dijitalleşme, çevrimiçi güvenlik ve siber zorbalık konularında atölye çalışmaları.",
        tags: ["Humanitarian Aid", "Digital Security", "Erasmus+", "Volunteering"],
        demo: "https://www.youthpass.eu/verify/3F5H-144W-PE3V-XHTV",
        github: ""
    },
    {
        id: 12,
        title: "ODTÜ Teknokent - İMPARK",
        description: "Programcı stajyeri olarak çoklu departmanlara IT desteği sağlandı, yazılım kurulumları ve dokümantasyon süreçleri yönetildi.",
        tags: ["IT Support", "System Doc.", "Troubleshooting", "Internship"],
        demo: "https://www.impark.com.tr",
        github: ""
    },

];

// Matrix rain effect
function initMatrix() {
    const canvas = document.getElementById('matrix');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }
    
function draw() {
        // Arka plan izi (Hafif lacivert iz bırakır)
        ctx.fillStyle = 'rgba(2, 6, 23, 0.1)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // HARF RENGİ: NEON BUZ MAVİSİ (CYAN)
        // Artık sarı yok, tam siber güvenlikçi mavisi var
        ctx.fillStyle = '#06b6d4'; 
        
        ctx.font = fontSize + 'px JetBrains Mono';
        
        for (let i = 0; i < drops.length; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 100);
}

// Projeleri Render Etme (Behance ve Youthpass Destekli)
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const countEl = document.getElementById('projectCount');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (countEl) {
        countEl.textContent = projects.length;
    }

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.draggable = true;
        
        // Link türüne göre buton metni ve ikonunu belirle
        let demoButtonText = "Live Demo";
        let demoIcon = "↗";
        let buttonClass = "project-link"; // Varsayılan stil
        
        if (project.demo) {
            if (project.demo.includes("youthpass.eu")) {
                demoButtonText = "Verify Certificate";
                demoIcon = "✓";
            } else if (project.demo.includes("behance.net")) {
                demoButtonText = "View on Behance";
                demoIcon = "🎨"; // Sanat paleti ikonu (veya isteğe göre değişebilir)
            } else if (project.demo.includes("impark") || project.demo.includes("instagram")) {
                demoButtonText = "Visit Page";
            }
        }

        projectCard.innerHTML = `
            <div class="project-header drag-handle">
                <div class="project-dots">
                    <div class="terminal-dot dot-red"></div>
                    <div class="terminal-dot dot-yellow"></div>
                    <div class="terminal-dot dot-green"></div>
                </div>
                <div class="drag-icon">⋮⋮</div>
            </div>
            <div class="project-body">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-stack">
                    ${project.tags.map(tag => `<span class="stack-item">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo ? `<a href="${project.demo}" class="${buttonClass}" target="_blank">${demoButtonText} ${demoIcon}</a>` : ''}
                    ${project.github ? `<a href="${project.github}" class="project-link" target="_blank">Source Code ↗</a>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(projectCard);
    });

    initDragAndDrop();
}

function initDragAndDrop() {
    const cards = document.querySelectorAll('.project-card');
    let draggedElement = null;

    cards.forEach(card => {
        card.addEventListener('dragstart', function(e) {
            draggedElement = this;
            this.style.opacity = '0.5';
            e.dataTransfer.effectAllowed = 'move';
        });

        card.addEventListener('dragend', function(e) {
            this.style.opacity = '1';
            cards.forEach(c => c.classList.remove('drag-over'));
        });

        card.addEventListener('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
            if (this !== draggedElement) this.classList.add('drag-over');
            return false;
        });

        card.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });

        card.addEventListener('drop', function(e) {
            e.stopPropagation();
            e.preventDefault();
            if (draggedElement !== this) {
                const grid = document.getElementById('projects-grid');
                const allCards = [...grid.children];
                const draggedIndex = allCards.indexOf(draggedElement);
                const targetIndex = allCards.indexOf(this);
                if (draggedIndex < targetIndex) {
                    this.parentNode.insertBefore(draggedElement, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(draggedElement, this);
                }
            }
            this.classList.remove('drag-over');
            return false;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initMatrix();
    renderProjects();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (!header) return;
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 15, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 15, 0.95)';
        }
    });

    window.addEventListener('resize', function() {
        const canvas = document.getElementById('matrix');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    });

});
