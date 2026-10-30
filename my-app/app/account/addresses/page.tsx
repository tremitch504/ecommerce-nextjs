import Header from "../../src/components/Header/Header";
import SidebarMenu from "../../src/components/Header/SidebarMenu";
import PopupSearch from "../../src/components/Header/PopupSearch";
import AddressesSection from "@/app/src/components/AccountPage/AddressesPage/AddressesSection";
import Footer from "../../src/components/Footer/Footer";


export default function AddressesPage() {
  return (
      <div className="app">
                <Header />
                <SidebarMenu />
                 <PopupSearch />
            <AddressesSection />
                 <Footer />
      </div>

  )

  }