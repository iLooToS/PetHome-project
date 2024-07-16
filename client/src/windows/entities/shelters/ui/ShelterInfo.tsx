import { RootState } from "@/src/windows/app/store/store";
import Loader from "@/src/windows/widgets/Loader/Loader";
import CreatePetModal from "@/src/windows/widgets/Modal/CreatePetModal";
import CreatePostModal from "@/src/windows/widgets/Modal/CreatePostModal";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const ShelterInfo = (): JSX.Element => {
  const router = useRouter();
  const path = usePathname();
  const { currentShelter } = useSelector((state: RootState) => state.shelters);
  const { user } = useSelector((state: RootState) => state.auth);

  if (!currentShelter) return <Loader />;
  return (
    <div className="shelter-content-wrapper">
      <div className="shelter-info-wrapper">
        <div className="shelter-image-wrapper">
          {currentShelter?.logo && (
            <Image
              src={currentShelter?.logo}
              alt="Shelter Image"
              width={150}
              height={150}
            />
          )}
        </div>
        <div className="shelter-text-wrapper">
          <h2>{currentShelter?.name}</h2>
          <p>
            {currentShelter?.Location?.city}{" "}
            {currentShelter?.Location?.streetName}
          </p>
          <div className="shelter-button-wrapper">
            <button
              type="button"
              onClick={() => router.push(`http://localhost:3001/${path}/pets`)}
            >
              Show pets
            </button>
            <button type="button">Reviews</button>
            {currentShelter.userId === user?.id && (
              <div>
                <CreatePetModal shelterId={currentShelter.id} />
                <CreatePostModal shelterId={currentShelter.id} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="shelter-description-wrapper">
        <p>{currentShelter?.description}</p>
      </div>
    </div>
  );
};

export default ShelterInfo;
