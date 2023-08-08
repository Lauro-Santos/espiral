import Promocoes from "components/Promocoes";
import SecaoDestaque from "components/SecaoDestaque";
import SecaoPrincipal from "components/SecaoPrincipal";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [banners, setBanners] = useState([]);
  const urlDB =
    "https://raw.githubusercontent.com/Lauro-Santos/espiral-data/main/db.json";
  console.log(banners);

  async function fetchData() {
    try {
      const { data } = await axios.get(urlDB);
      setProdutos(data.produtos);
      setBanners(data.banners);
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main>
      <SecaoPrincipal />
      <Promocoes />
      {banners.map((banner) => {
        return (
          <SecaoDestaque
            key={banner.id}
            urlBanner={banner.imagem}
            text={banner.texto}
            span={banner.span}
            data={produtos}
            limit={8}
          />
        );
      })}
    </main>
  );
};

export default Home;
