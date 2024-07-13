import ShelterInfo from "@/src/entities/shelters/ui/ShelterInfo";
import "./styles/ShelterPage.css";
import ShelterPosts from "@/src/entities/shelters/ui/ShelterPosts";

const ShelterPage = (): JSX.Element => {
  return (
    <div className="ShelterPage">
      <ShelterInfo />
      <ShelterPosts/>
    </div>
  );
};

export default ShelterPage;
