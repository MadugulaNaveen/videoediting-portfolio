const navBar = document.querySelector('.navbar');
const anchorTags = navBar.querySelectorAll('a');
const hiddenDivs = document.querySelectorAll('.hidden');

anchorTags.forEach(anchorTag => {
  anchorTag.addEventListener('click', () => {
    anchorTags.forEach(tag => {
      tag.classList.remove('hovered');
    });
    anchorTag.classList.add('hovered');
  });
});


window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      anchorTags.forEach(tag => {
        tag.classList.remove('hovered');
      });
      const anchorTag = navBar.querySelector(`a[href="#${section.id}"]`);
      anchorTag.classList.add('hovered');
    }
  });
});

const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
  });
});


