import thunderIcon from "./showImageThunderIcon.svg";

function ShowImages() {
  console.log(thunderIcon);

  return (
    <div>
      <img src="./logo512.png" width="30" alt="" />
      <img src={thunderIcon} width={30} alt="" />
    </div>
  );
}

export default ShowImages;
