async function GetInstructionFromReceta(id: number) { 
    try {
        const receta = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id)
        .then((res) => res.json())
        return receta.meals[0].strInstructions
    } catch(error) {
        console.log(error)
    }
}

async function GetRecetas() {
    try {
        const recetas = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan")
        .then((res) => res.json())
        return recetas.meals
    } catch(error) {
        console.log(error)
    }
    
}

export async function Recetas() {
    try {
        const recetas = await GetRecetas() as unknown as Array<any>
        for (let i = 0; i < recetas.length; i++) {
            recetas[i].strInstructions = await GetInstructionFromReceta(recetas[i].idMeal)
        }
        return (
            <div className="grid grid-cols-3 gap-5 w-11/12 pl-5">
                {recetas.map((receta) => (
                    <div className="group p-8 bg-gray-100 rounded-lg flex flex-col items-center" key={receta.idMeal} style={{ maxHeight: '50rem', overflowY: 'auto', marginBottom: '1rem' }}>
                        <img className="rounded-lg" src={receta.strMealThumb} alt={receta.strMeal} style={{ maxWidth: '350px' }}/>
                        <h2 className="text-center pt-5 text-gray-800">{receta.strMeal}</h2>
                        <p className="pt-4 font-bold">Instrucciones:</p>
                        <p className="text-justify" style={{ textAlign: 'justify' }}>{receta.strInstructions}</p>
                    </div>
                ))}
            </div>
        );
    } catch(error) {
        console.log(error)
    }
}