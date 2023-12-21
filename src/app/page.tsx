import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <Layout>
      <Menu />
      {/* hero section  */}
      <div className="relative">
        <div className="h-[60vh] z-10 bg-red-400 flex flex-row justify-center items-center bg-center bg-[url('/images/4.jpg')] bg-cover"></div>
        <div className="bg-black z-20 top-0 left-0 h-[60vh] w-full absolute opacity-50"></div>
        <div className="text-2xl md:text-5xl font-bold text-center text-white z-50 absolute absolute inset-0 flex items-center justify-center">
          Poultry keeping practices <br /> and services
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="basis-1/2 w-full">
          <div className="w-full h-80 bg-[url('/images/2.jpg')] bg-cover hidden md:block"></div>
          <div className="w-full h-80 bg-[url('/images/3.jpg')] bg-cover"></div>
        </div>
        <div className="basis-1/2 p-20">
          <div className="text-4xl font-bold mb-4">Our Story</div>

          <p className="mb-6 text-justify">
            Aquinus Farms Limited is a reliable, respected and fastest growing
            agribusiness company in Tanzania specialized in indigenous poultry.
            The Company is founded in 2003 as a household business.
          </p>

          <p className="text-justify">
            Later it was transformed into a corporate firm with blended services
            on poultry keeping practices and poultry business advisory services.
            Currently, the Company is transformed into technological
            agribusiness on poultry business.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
