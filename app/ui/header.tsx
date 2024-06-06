import { inter, lusitana } from '@/app/ui/fonts';

export default function Page() {
    return ( 
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 basis-10/12">
            <h2 className={`${lusitana.className} text-5xl font-bold tracking-tight text-center text-blue-600 hover:text-blue-400`}>
            Products
            </h2>
        </div>
    );
}