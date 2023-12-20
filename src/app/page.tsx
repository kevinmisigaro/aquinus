import Footer from "@/components/footer";
import Layout from "@/components/layout";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <Layout>
      <Menu />
      {/* hero section  */}
      <div className="h-[60vh] bg-red-400 flex flex-row justify-center items-center">
        <div className="text-2xl md:text-5xl font-bold text-center">
          Poultry keeping practices <br /> and services
        </div>
      </div>

      <div className="flex flex-row justify-between items-center py-20">
        <div className="basis-1/2"></div>
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
