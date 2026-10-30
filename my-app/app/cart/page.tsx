import Header from "../src/components/Header/Header";
import SidebarMenu from "../src/components/Header/SidebarMenu";
import PopupSearch from "../src/components/Header/PopupSearch";
import CartSection from "../src/components/Cart/CartSection";
// import OrdersSection from "@/app/src/components/AccountPage/OrdersPage/OrdersSection";
import Footer from "../src/components/Footer/Footer";


export default function CartPage() {
  return (
      <div className="app">
                <Header />
                <SidebarMenu />
                 <PopupSearch />
           <CartSection />
                 <Footer />
      </div>

  )

  }