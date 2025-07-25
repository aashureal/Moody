const Home = () => {
  return (
    <div className="w-[94%] bg-zinc-0">
      {/* Video Container */}
      <div className="video__container">
        <div className="video bg-red-500 w-full aspect-video rounded-2xl"></div>
        <button className="text-xl uppercase w-full bg-zinc-800 py-5 rounded-2xl my-7">
          Detact Mood
        </button>
      </div>

      {/* Music Container */}
      <div className="music__container">
        <div className="header py-5 border-y border-zinc-800">
          <h2 className="heading text-3xl font-semibold">Songs</h2>
        </div>

        {/* Songs */}
        <div className="songs"></div>
      </div>
    </div>
  );
};

export default Home;
