import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { MdPeopleOutline, MdOutlineDateRange } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";

function CarsDetail() {
  const API_URL = "http://localhost:3005/cars/";
  const { id } = useParams();

  const [dataMobil, setDataMobil] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL + id);
      setDataMobil(res.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(dataMobil);
  return (
    <>
      <div id="show-detail">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-8">
              <p class="font-weight-bold my-3">Tentang Paket</p>
              <p>Include</p>
              <ul className="ml-3">
                <li>Apa saja yang termasuk dalam paket misal derasi 12 jam </li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
              </ul>

              <p>Exclude</p>
              <ul className="ml-3">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
              <p class="font-weight-bold">Refund, Reschedule, Overtime</p>
              <ul className="ml-3">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya RP
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
            <div className="col-lg-4">
              {loading ? (
                "masih loading"
              ) : (
                <div className="card mt-4" style={{ maxWidth: "22rem" }}>
                  <ModalImage small={dataMobil.image} large={dataMobil.image} />
                  <div className="card-body">
                    <p className="mb-1 fw-bold">{dataMobil.name}</p>
                    <div className="d-flex">
                      <div className="card-detail">
                        <MdPeopleOutline className="me-2" /> <p>4 orang</p>
                      </div>
                      <div className="card-detail">
                        <FiSettings className="me-2" /> <p>Manual</p>
                      </div>
                      <div className="card-detail">
                        <MdOutlineDateRange className="me-2" />
                        <p>Tahun 2020</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-3">
                      <p>Total</p>
                      <p className="fw-bold">Rp. {dataMobil.price}</p>
                    </div>
                    <Link
                      to={"/pagepembayaran"}
                      className="btn w-100 text-decoration-none"
                    >
                      Lanjutkan Pembayaran
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarsDetail;
