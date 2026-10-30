import Header from "../../src/components/Header/Header";
import SidebarMenu from "../../src/components/Header/SidebarMenu";
import PopupSearch from "../../src/components/Header/PopupSearch";
import OrdersSection from "@/app/src/components/AccountPage/OrdersPage/OrdersSection";
import Footer from "../../src/components/Footer/Footer";


export default function OrdersPage() {
  return (
      <div className="app">
                <Header />
                <SidebarMenu />
                 <PopupSearch />
              <OrdersSection />
                 <Footer />
      </div>

  )

  }