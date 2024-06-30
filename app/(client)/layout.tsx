import CustomSideNav from "../ui/customers/customersidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row">
          <div className="w-full">
            {children}
          </div>
          <div className="flex flex-grow-0 basis-2/24">
            <CustomSideNav />
          </div>
        </div>
    );
}