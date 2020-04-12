export default function stickyTrigger(direction) {
  const lastTopElement = document.getElementById('breadcrumb') || document.getElementById('sub-header');

  if (lastTopElement !== null) {
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
