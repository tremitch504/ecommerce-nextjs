import Header from "../src/components/Header/Header";
import SidebarMenu from "../src/components/Header/SidebarMenu";
import PopupSearch from "../src/components/Header/PopupSearch";
import ProductSection from "../src/components/ProductPage/ProductSection"
import RecommendSection from "../src/components/ProductPage/RecommendSec";
import Footer from "../src/components/Footer/Footer";


export default function Products() {
  return (
      <div className="app">
                <Header />
                <SidebarMenu />
                 <PopupSearch />
                <ProductSection />
                <RecommendSection />
                 <Footer />
      </div>

  )

  }