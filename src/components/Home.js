import bgImage from "../images/cristian-escobar-abkEAOjnY0s-unsplash.jpg";

const Home = () => {
  return (
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="flex h-full items-center justify-center">
          <div class="text-white">
            <h2 class="mb-4 text-4xl font-semibold">Motivate</h2>
            <h4 class="mb-6 text-xl font-semibold">
              Posters to motivate you to <strong>ACTION</strong>
            </h4>
            <span class="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
