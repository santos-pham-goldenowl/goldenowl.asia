export default function stickyTrigger(direction) {
  const lastTopElement = document.getElementById('breadcrumb') || document.getElementById('sub-header');

  if (lastTopElement) {
    const sticky = lastTopElement.offsetTop;

    const fixedBreadcrumb = document.getElementById('fixed-top-breadcrumb');
    const fixedHeader = document.getElementById('fixed-top-header');

    if (window.pageYOffset >= sticky) {
      if (fixedBreadcrumb) {
        if (direction === 'down') {
          fixedBreadcrumb.classList.remove('d-none');
          fixedHeader.classList.add('d-none');
        } else {
          fixedBreadcrumb.classList.add('d-none');
          fixedHeader.classList.remove('d-none');
        }
      } else fixedHeader.classList.remove('d-none');
    } else {
      if (fixedBreadcrumb) fixedBreadcrumb.classList.add('d-none');
      fixedHeader.classList.add('d-none');
    }
  }
}

export function stickyTOCTrigger(isMobile) {
  if (!isMobile) {  
    const stickyTopTrigger = document.getElementById('toc-sticky-top-trigger')
    const stickyBotTrigger = document.getElementById('toc-sticky-bot-trigger')

    const tocContainer = document.getElementById('toc-container')

    if (stickyTopTrigger && stickyBotTrigger) {
      const stickyTop = stickyTopTrigger.getBoundingClientRect().top + window.scrollY - stickyTopTrigger.offsetHeight*2;
      const stickyBot = stickyBotTrigger.getBoundingClientRect().top + window.scrollY - document.getElementById('footer').offsetHeight / 2 - stickyBotTrigger.offsetHeight;

      const toc = document.getElementById('toc');

      console.log(window.pageYOffset >= stickyTop && window.pageYOffset < stickyBot)
      console.log(window.pageYOffset, stickyTop, stickyBot)

      
      if (window.pageYOffset >= stickyTop && window.pageYOffset < stickyBot) 
        {
          toc.classList.add('fixed-toc');
          toc.classList.remove('mt-auto', 'mb-auto');
          tocContainer.classList.add('justify-content-between')
      } else if (window.pageYOffset < stickyTop) {
          toc.classList.remove('fixed-toc', 'mt-auto');
          toc.classList.add('mb-auto');
          tocContainer.classList.remove('justify-content-between')
        } 
        else if (window.pageYOffset >= stickyBot) {
          toc.classList.remove('fixed-toc', 'mb-auto');
          toc.classList.add('mt-auto');
          tocContainer.classList.remove('justify-content-between')
        }
  }}
}
