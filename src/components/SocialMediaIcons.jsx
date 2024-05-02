const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        href='https://www.linkedin.com/in/dhareppa-halli-3b681623b/'
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/linkedin.png'
          alt='linkedin-link'
        />
      </a>
      <a
        href='https://twitter.com/HalliDhare39910'
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/twitter.png'
          alt='twitter-link'
        />
      </a>
      {/* <a
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-500"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/facebook.png" alt="facebook-link" />
      </a> */}
      <a
        href='https://instagram.com/dhareppa_halli3108'
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/instagram.png'
          alt='instagram-link'
        />
      </a>
      <a
        href='https://github.com/DhareppaHalli310807'
        className='hover:opacity-50 transition duration-500'
        target='_blank'
        rel='noreferrer'
      >
        <img
          src='../assets/github-logo.png'
          alt='github-link'
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
