import { useHistory } from "react-router-dom";
import PillButton from "../components/extra/pill-button";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";

const NotFound = () => {
  const history = useHistory();

  return (
    <div className="bg-gray-background h-full">
      <Header></Header>
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl mt-5">Not Found</p>
      </div>
      <div className="flex justify-center w-8/12 sm:w-6/12 font-bold text-2xl mx-auto p-4 mt-6 rounded-full border round border-gray-primary bg-white hover:bg-type-flying shadow-xl">
        <PillButton
          text="Go to Home Page"
          customClickEvent={() => history.push(ROUTES.DASHBOARD)}
        ></PillButton>
      </div>
    </div>
  );
};

export default NotFound;
