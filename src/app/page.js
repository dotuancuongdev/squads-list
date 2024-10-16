import { Space_Grotesk } from "next/font/google";
import ListSquads from "./components/ListSquads";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className="px-4 lg:px-16">
      <div>
        <div className="mt-14 lg:hidden">
          <p
            className={`text-4xl font-extrabold text-center ${spaceGrotesk.className}`}
          >
            Investment Squads
          </p>
          <p className="text-[#BCBBCA] text-base font-medium text-center mt-3">
            Create or join existing investment squads at virtually no costs.
            Multichain supported.
          </p>
        </div>
        <div className="hidden lg:block mt-14">
          <p
            className={`text-4xl font-extrabold text-center ${spaceGrotesk.className}`}
          >
            Squads
          </p>
          <p className="text-[#BCBBCA] text-base font-medium text-center mt-3 mx-auto max-w-[800px]">
            Depending on your taste, either low cap, blue chip NFTs, or even
            web3 startup, you can easily choose the right squad for you.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#6966FF] rounded text-base font-semibold">
            <p className="py-2 px-5">{`Create squad >`}</p>
          </button>
        </div>

        <ListSquads />
      </div>
    </div>
  );
};

export default Home;
