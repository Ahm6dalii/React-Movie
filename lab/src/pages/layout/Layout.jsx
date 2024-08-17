import { Outlet } from "react-router-dom";
import Navebar from './../../components/navebar/Navebar';
import Footer from './../../components/footer/Footer';


export default function Layout() {
  return (
    <>
      <Navebar />
      <div className="mvh-70 px-2 sm:px-10 md:px-15 lg-px20 mx-auto pb-[160px] py-2 text-slate-900  dark:bg-gray-900 dark:text-slate-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
