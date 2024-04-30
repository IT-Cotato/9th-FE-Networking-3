export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen mx-auto text-white bg-black">
      <div className="flex flex-col w-screen max-w-3xl gap-4 p-5 my-5">
        <h1 className="title">내가 보고싶은 영화들</h1>
        <form className="flex flex-col gap-3">
          <input
            placeholder="영화 제목"
            className="w-2/5 text-white bg-transparent border-none rounded-md ring-1 ring-white focus:ring-2 focus:ring-white"
          />

          <button className="primary-btn">Add Movie</button>
        </form>

        <h1 className="title">내가 봤던 영화들</h1>

        <h1 className="title">내가 좋아하는 영화들</h1>
      </div>
    </div>
  );
}
