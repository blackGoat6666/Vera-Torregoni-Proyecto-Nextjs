import { Recetas } from "../../ui/home/recetas";
import Welcome from "../../ui/home/welcome";

export default function Page() {
    return (
    <div className="flex flex-col">
      <Welcome/>
      <br></br>
      <h1 className="text-2xl font-black text-gray-600 p-10">Recetas para inspirarte</h1>
      <Recetas></Recetas>
    </div>
    );
  }