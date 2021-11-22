import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { ArtikelItem, Button, Gap } from "../../components";
import ReactLoading from "react-loading";
import "./home.scss";
import { getArtikel } from "../../config/Redux/getApi";
import { Store } from "../../config/Redux/store";

const Home = () => {
  const dataArtikel = useSelector((state) => state);
  const [page, setPage] = useState(1);
  useEffect(() => {
    Store.dispatch(getArtikel(page));
  }, [page]);
  const kurang = (page) => {
    let min = 1;
    if (page === 0) {
      toast.info("Ini Halaman Pertama");
    } else if (page > 0) {
      setPage(page);
    } else {
      setPage(min);
    }
  };

  const tambah = (page) => {
    let max = Math.ceil(dataArtikel.total_data / 10);
    if (page === max + 1) {
      toast.info("Ini Halaman Terakhir");
    } else if (page < max) {
      setPage(page);
    } else {
      setPage(max);
    }
  };
  return (
    <div className="home-page">
      <Gap height={20} />
      <div className="content-wrapper">
        {dataArtikel.artikel ? (
          dataArtikel.artikel.map((artikel) => {
            return (
              <ArtikelItem
                key={artikel._id}
                image={artikel.image}
                title={artikel.title}
                body={artikel.body}
                author={artikel.author.name}
                date={artikel.createdAt}
                id={artikel._id}
              />
            );
          })
        ) : (
          <ReactLoading type="spin" color="grey" />
        )}
      </div>
      <div className="pagination-wrapper">
        <Button title="Previous" onClick={() => kurang(page - 1)} />
        <Gap width={10} />
        <Button title="Next" onClick={() => tambah(page + 1)} />
      </div>
      <Gap height={20} />
      <ToastContainer />
    </div>
  );
};

export default Home;
