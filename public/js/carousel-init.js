console.log(
  "Carousel init script execution started. jQuery availability:",
  typeof jQuery !== "undefined",
);

function initializeOwlCarousels() {
  const $ = jQuery;
  if (typeof $ === "undefined" || !$.isFunction($.fn.owlCarousel)) {
    console.warn("Owl Carousel plugin NOT available yet.");
    return;
  }

  console.log("Owl Carousel plugin is available. Checking for elements...");

  const config = {
    ".suggested-caro": {
      items: 3,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    },
    ".soundnik-featured": {
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      center: false,
      animateOut: "fadeOut",
      animateIn: "fadein",
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    },
    ".books-caro": {
      items: 5,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: false,
      responsiveClass: true,
      responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 5 } },
    },
    ".market-categories": {
      items: 5,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: false,
      responsiveClass: true,
      responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 5 } },
    },
    ".event-browse": {
      items: 5,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: false,
      responsiveClass: true,
      responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 5 } },
    },
    ".student-review": {
      items: 3,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      center: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    },
    ".page-caro": {
      items: 6,
      loop: true,
      margin: 0,
      autoplay: false,
      autoplayTimeout: 2500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      responsiveClass: true,
      responsive: { 0: { items: 5 }, 600: { items: 5 }, 1000: { items: 6 } },
    },
    ".rec-grp-caro": {
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: true,
      animateOut: "fadeOut",
      animateIn: "fadein",
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    },
    ".welcome-caro": {
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      animateOut: "fadeOut",
      animateIn: "fadein",
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    },
    ".sug-caro": {
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: false,
      dots: true,
      animateOut: "fadeOut",
      animateIn: "fadein",
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } },
    },
    ".chat-rooms": {
      items: 4,
      loop: false,
      margin: 15,
      autoplay: false,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 4 } },
    },
    ".videos-caro": {
      items: 3,
      loop: true,
      margin: 15,
      autoplay: false,
      video: true,
      lazyLoad: true,
      center: true,
      merge: true,
      videoWidth: true,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
    },
    ".sponsored-caro": {
      items: 2,
      loop: true,
      margin: 15,
      autoplay: false,
      video: true,
      lazyLoad: true,
      center: true,
      merge: true,
      videoWidth: true,
      autoplayTimeout: 4500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } },
    },
    ".badge-caro": {
      items: 6,
      loop: true,
      margin: 30,
      autoplay: false,
      autoplayTimeout: 1500,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      center: true,
      responsiveClass: true,
      responsive: { 0: { items: 3 }, 600: { items: 4 }, 1000: { items: 6 } },
    },
  };

  Object.keys(config).forEach((selector) => {
    const $elements = $(selector);
    if ($elements.length > 0) {
      console.log(
        `Found ${$elements.length} elements for ${selector}. Initializing...`,
      );
      // Avoid double initialization
      $elements.trigger("destroy.owl.carousel").owlCarousel(config[selector]);
    } else {
      // console.log(`No elements found for ${selector}`);
    }
  });
}

// Initial run on document ready
jQuery(document).ready(function ($) {
  console.log("jQuery ready fired. Initializing carousels...");
  initializeOwlCarousels();
});

// Deferred run to handle React rendering delays
window.addEventListener("load", function () {
  console.log("Window load fired. Re-initializing carousels...");
  initializeOwlCarousels();
});

// Diagnostic polling
let pollCount = 0;
const pollId = setInterval(() => {
  pollCount++;
  console.log(
    `Polling Check #${pollCount} for .suggested-caro:`,
    jQuery(".suggested-caro").length,
  );
  if (jQuery(".suggested-caro").length > 0) {
    console.log("Elements found during polling! Initializing...");
    initializeOwlCarousels();
  }
  if (pollCount >= 10) clearInterval(pollId); // Stop after 10 tries
}, 1000);
