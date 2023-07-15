import Header from "components/Header";
import Promocoes from "components/Promocoes";
import SecaoDestaque from "components/SecaoDestaque";
import SecaoPrincipal from "components/SecaoPrincipal";

import banner1 from "assets/images/bg-banner_modastreet.jpg"
import banner2 from "assets/images/bg-banner_destaque_mes.jpg"

const Home = () => {
  return (
    <>
      <Header />
      <SecaoPrincipal />
      <Promocoes />
      <SecaoDestaque urlImage={banner1} text={"Moda Street"}/>
      <SecaoDestaque urlImage={banner2} text={"Destaque do mês"}/>
    </>
  );
};

export default Home;
