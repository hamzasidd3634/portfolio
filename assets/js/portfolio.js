

(function() {
  "use strict";

  const portfolioData = {
    1: {
      title: "Speed VPN",
      description: "SpeedVPN, Best Free VPN client.",
      image: "assets/img/portfolio/1.webp",
      images: [
        "assets/img/portfolio/sp1.webp",
        "assets/img/portfolio/sp2.webp",
        "assets/img/portfolio/sp3.webp",
        "assets/img/portfolio/sp4.webp",
      ],
      website: "https://speed-vpn.org/",
      details: "SpeedVpn is a free VPN application that provides a fast and unlimited connection. The servers are located all over the world and are updated daily.\nLooking for a fast, secure, and reliable VPN app? Look no further than SpeedVPN! Our virtual private network app provides you with the ultimate solution for anonymous browsing, unblocking websites, and online security. With our no-log VPN, your online activities will always remain private and protected. Our fast VPN technology ensures efficient and lightning-fast internet access, so you can stream, browse, and download without any restrictions."
    },
    2: {
      title: "Safeword",
      description: "Safeword is a mobile application designed to provide swift and discreet assistance in emergency situations.",
      image: "assets/img/portfolio/2.webp",
      images: [
        "assets/img/portfolio/s1.webp",
        "assets/img/portfolio/s2.webp",
        "assets/img/portfolio/s3.webp",
        "assets/img/portfolio/s4.webp",
      ],
      website: "https://play.google.com/store/apps/details?id=com.gologonow.safewords&hl=en",
      details: "Safeword is a mobile application designed to provide swift and discreet assistance in emergency situations. With Safeword, users can proactively set up trigger words like 'help' or 'safe' which, when spoken, activate the app's emergency response feature. The app utilizes the device's background microphone to capture audio, converting the spoken words into text-based emergency alerts using speech-to-text technology. Simultaneously, Safeword tracks the user's real-time location and includes this vital information in the emergency message."
    },
    3: {
      title: "Shark Skillz",
      description: "SharkSkillz is the ultimate platform for mastering essential skills in business, finance, cryptocurrency, artificial intelligence, and life skillz.",
      image: "assets/img/portfolio/3.webp",
      images: [
        "assets/img/portfolio/sk1.webp",
        "assets/img/portfolio/sk2.webp",
        "assets/img/portfolio/sk3.webp",
        "assets/img/portfolio/sk4.webp",
      ],
      website: "https://www.sharkskillz.com/",
      details: "Envision a cutting-edge educational tool at your fingertips – SharkSkillz, a dynamic web and mobile application compatible with both iOS and Android devices. Designed to empower schools and individuals alike, SharkSkillz is the ultimate platform for mastering essential skills in business, finance, cryptocurrency, artificial intelligence, and life skillz."
    },
    4: {
      title: "Star Bazaar",
      description: "StarBazaar is an online platform with the mission to have a centralised and accessible place where fans can connect with their favourite Stars for personalised video shoutouts for any occasion.",
      image: "assets/img/portfolio/4.webp",
      images: [
        "assets/img/portfolio/st1.webp",
        "assets/img/portfolio/st2.webp",
        "assets/img/portfolio/st3.webp",
        "assets/img/portfolio/st4.webp",
      ],
      website: "https://www.starbazaar.pk/home",
      details: "StarBazaar is an online platform with the mission to have a centralised and accessible place where fans can connect with their favourite Stars for personalised video shoutouts for any occasion.\n\nWe at StarBazaar believe in expressing love and affection by creating beautiful moments with personalised shoutout that you can cherish with you loved ones."
    }
  };

  /**
   * Portfolio display function
   */
  function populatePortfolioDetails() {
    const params = getQueryParams();
    const portfolioId = params.id;
  
    if (!portfolioId || !portfolioData[portfolioId]) {
      document.querySelector(".main").innerHTML =
        "<h2 class='text-center'>Portfolio item not found.</h2>";
      return;
    }
  
    const data = portfolioData[portfolioId];
    
    // Update project information
    document.querySelector(".portfolio-info ul").innerHTML = `
      <li><strong>Title</strong>: ${data.title}</li>
      <li><strong>Description</strong>: ${data.description}</li>
       
      <li><strong>Website</strong>: <a href="${data.website}" target="_blank"><strong>Website</strong></a></li>
      <li><strong>Details</strong>: ${data.details}</li>
    `;
  
    // Update project description
    // document.querySelector(".portfolio-description h2").textContent = data.title;
    // document.querySelector(".portfolio-description p").textContent =
    //   data.description;
  
    // Update slider images
    const sliderWrapper = document.querySelector(".swiper-wrapper");
    sliderWrapper.innerHTML = data.images
      .map((image) => `<div class="swiper-slide"><img src="${image}" alt=""></div>`)
      .join("");
  
    // Reinitialize Swiper after DOM changes
    const swiperConfig = JSON.parse(
      document.querySelector(".swiper-config").textContent
    );
    new Swiper(".init-swiper", swiperConfig);
  }
  
  // Initialize the page
  document.addEventListener("DOMContentLoaded", populatePortfolioDetails);

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      id: params.get('id'),
    };
  }
})();