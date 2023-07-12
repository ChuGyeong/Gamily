gsap.registerPlugin(ScrollTrigger);
gsap
   .timeline({
      scrollTrigger: {
         trigger: '.transition',
         pin: true,
         start: 'top top',
         end: '+=300%',
         scrub: 1,
      },
      defaults: {
         ease: 'none',
      },
   })
   .to(
      document.body,
      {
         delay: 0.3,
         backgroundColor: '#ffffff',
      },
      'start',
   )
   .to(
      '.upper-container h1',
      {
         scale: 5,
      },
      'start',
   )
   .to(
      '.upper-container h1',
      {
         opacity: 0,
      },
      'start',
   )
   .to(
      '.lower-container',
      {
         delay: 0.1,
         scale: 2,
      },
      'start',
   )
   .to(
      '.lower-container',
      {
         delay: 0,
         opacity: 1,
      },
      'start',
   );
