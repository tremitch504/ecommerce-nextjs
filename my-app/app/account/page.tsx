import Header from "../src/components/Header/Header";
import SidebarMenu from "../src/components/Header/SidebarMenu";
import PopupSearch from "../src/components/Header/PopupSearch";
import ProfileInfo from "../src/components/AccountPage/ProfileInfo";
import Footer from "../src/components/Footer/Footer";


export default function Products() {
  return (
      <div className="app">
                <Header />
                <SidebarMenu />
                 <PopupSearch />
               <ProfileInfo />
                 <Footer />
      </div>

  )

  }