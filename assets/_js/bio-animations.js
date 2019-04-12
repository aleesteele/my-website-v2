const bioAnimations = () => {
  const replacedPhoto = document.querySelector('.replaced-photo');
  const bioLinks = Array.from(
    document.querySelectorAll('.bio-link')
  );
  const bioSlug = '/assets/images/bio/';

  bioLinks.forEach(function(link) {
    console.log('window width: ' + window.innerWidth);
    let mobileWidth = 414;
    if (window.innerWidth > mobileWidth) {
      link.addEventListener('mouseover', function() {
        let photoLink = link.getAttribute('photo_url');
        let fullPhotoSlug = bioSlug + photoLink;

        replacedPhoto.setAttribute('src', fullPhotoSlug);
      });
    } else {
      console.log('lol');
    }
  });
};

export default bioAnimations;
