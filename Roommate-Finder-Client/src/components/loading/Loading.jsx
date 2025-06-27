

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-[999] flex items-center justify-center w-full h-screen">
      <span className="loading loading-spinner loading-xl bg-primary"></span>
    </div>
  );
};

export default Loading;
