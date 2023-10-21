/* eslint-disable no-undef */

import { Map } from "../components/map";
import { SideBar } from "../outLets/sidBar";
export const Apps = () => {
  return (
    <div className="h-screen flex">
      <SideBar />
      <Map />
    </div>
  );
};
