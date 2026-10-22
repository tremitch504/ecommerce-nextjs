import Image from "next/image";
import Header from "../src/components/Header/Header";
import SidebarMenu from "../src/components/Header/SidebarMenu";
import PopupSearch from "../src/components/Header/PopupSearch";
// import CollectionPromo from "./src/components/CollectionPromo/CollectionPromo";
// import PopularSection from "./src/components/PopularSection/PopularSection";
// import SalePromo from "./src/components/SalePromo/SalePromo";
// import CategoriesSec from "./src/components/CategoriesSec/CategoriesSec";
import Footer from "../src/components/Footer/Footer";;
import ProductsBanner from "../src/components/ProductsPage/ProductsBanner";
import ProductsNav from '../src/components/ProductsPage/ProductNav'
import ProductsSection from "../src/components/ProductsPage/ProductsSection/ProductsSection";


export default function Products() {
  return (
      <div className="app">
        <Header />
                <SidebarMenu />
                 <PopupSearch />
                 <ProductsBanner />
               <ProductsNav />
               <ProductsSection />
                 <Footer />
      </div>

  )

  }