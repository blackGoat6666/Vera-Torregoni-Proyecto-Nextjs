import { lusitana } from "../../ui/fonts";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="space-y-3 p-6 bg-white shadow-md rounded-lg max-w-md w-full">
        <div className="text-center mb-4">
          <h1 className={`${lusitana.className} text-green-500 text-3xl font-bold`}>Contactanos</h1>
        </div>
        <div className="text-center">
          <p className="w-full" style={{ textAlign: 'justify' }}>
            <br/>
            Si tenés alguna consulta, no dudes en escribirnos, nos encantaría ayudarte, si nuestra experiencia nos lo permite.
            También podés enviarnos tus propias Recetas Veganas para que las probemos y las publiquemos en nuestro Blog!
          </p>
          <p className="w-full" style={{ textAlign: 'justify' }}>
            <br/>
            Envíanos un email a <a href="mailto:info@holavegan.com" className="text-green-500 hover:underline">info@holavegan.com</a>.
            <br/>
            <br/>
            Te responderemos lo más pronto posible. Gracias!
          </p>
        </div>
      </form>
    </div>
  );
}
