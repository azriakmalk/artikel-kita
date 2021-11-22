import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "../../components";
import "./detail.scss";

const DetailArtikel = (props) => {
  const history = useHistory();
  const [artikel, setArtikel] = useState({});
  let id = props.match.params.id;
  useEffect(() => {
    Axios.get(`https://artikelkita.herokuapp.com/artikel/${id}`)
      .then((res) => {
        const data = res.data.data;
        setArtikel({ status: "sukses", data });
      })
      .catch((err) => {
        console.log(err.status);
        setArtikel({ status: "error" });
      });
  }, [id]);

  if (artikel.status === "sukses") {
    const { author, body, createdAt, image, title } = artikel.data;
    return (
      <div className="detail-artikel-page">
        <img className="img-cover" src={image.url} alt="gedung" />
        <p className="detail-title">{title}</p>
        <p className="detail-author">
          {author.name} - {createdAt.substr(0, 10)}
        </p>
        <p className="detail-body">{body}</p>
        <Link title="Kembali ke Home" onClick={() => history.push("/")} />
      </div>
    );
  }
  if (artikel.status === "error") {
    return <p>Error Page</p>;
  }
  return <p>Loading</p>;
};

export default DetailArtikel;
