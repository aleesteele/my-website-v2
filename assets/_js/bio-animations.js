const bioAnimations = () => {
  const replacedPhoto = document.querySelector('.replaced-photo');
  const bioLinks = Array.from(
    document.querySelectorAll('.bio-link')
  );
  const bioSlug = '/assets/images/bio/';

  bioLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      let photoLink = link.getAttribute('photo_url');
      let fullPhotoSlug = bioSlug + photoLink;

      replacedPhoto.setAttribute('src', fullPhotoSlug);
    });
  });
};

export default bioAnimations;
