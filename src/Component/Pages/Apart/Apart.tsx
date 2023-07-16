import { FC } from "react";
import { Nav } from "../Location/Nav/Nav";
import { Box1 } from "./Boxs/Box1";
import { Box2 } from "./Boxs/Box2";
import { Box3 } from "./Boxs/Box3";
import { Footer } from "../../Footer/Footer";
import { Box2f } from "./Boxs/Box2f";
import { Box2f1 } from "./Boxs/Box2f1";

export const Apart: FC = () => {
  return (
    <>
      <Nav />
      <Box1 />
      <div className="flex flex-col gap-[10px] py-[50px]">
        <Box2 />
        <Box2f />
        <Box2f1 />
      </div>
      <Box3 />
      <Footer />
    </>
  );
};
