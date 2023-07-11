import {FC} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { Location } from "../Component/Pages/Location/Location";
import { Apart } from "../Component/Pages/Apart/Apart";
import { Form } from "../Component/Pages/Form/Form";
import { Form1f } from "../Component/Pages/Form/Form1f";
import { Form2 } from "../Component/Pages/Form/Form2";
import { Form2f } from "../Component/Pages/Form/Form2f";
import { Form3 } from "../Component/Pages/Form/Form3";
import { Form3f } from "../Component/Pages/Form/Form3f";
import { Thanks } from "../Component/Pages/Thanks/Thanks";

const Router: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/location" element={<Location />} />
          <Route path="/apartment" element={<Apart />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form1f" element={<Form1f />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form2f" element={<Form2f />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/form3f" element={<Form3f />} />
          <Route path="/thanks" element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
