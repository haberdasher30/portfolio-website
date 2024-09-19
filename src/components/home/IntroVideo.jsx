const IntroVideo = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-5 w-full'>
      <iframe
        allowFullScreen
        frameBorder='0'
        className='w-full aspect-video'
        allow='autoplay; encrypted-media'
        referrerPolicy='strict-origin-when-cross-origin'
        title='Google Developer Student Clubs (GDSC) Lead Application'
        src='https://www.youtube.com/embed/XgAykC5ywHo?autoplay=1&loop=1&controls=0&mute=1&playlist=XgAykC5ywHo'
      />
    </div>
  );
};

export default IntroVideo;
