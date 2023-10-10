import Header from "./Header";
import CartOverview from "./../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {/* it will render if somewhere in the app something is loading */}
      {isLoading && <Loader />}

      <Header />

      <main>
        {/* render content of a nested route inside another route */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
