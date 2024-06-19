const Video = () => {
  return (
    <div className='container flex flex-col items-center justify-center gap-5 w-full'>
      <iframe
        allowFullScreen
        frameBorder='0'
        className='w-full aspect-video'
        src='https://www.youtube.com/embed/XgAykC5ywHo'
        referrerPolicy='strict-origin-when-cross-origin'
        title='Google Developer Student Clubs (GDSC) Lead Application'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;'
      ></iframe>
    </div>
  );
};

export default Video;
