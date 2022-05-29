import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function Search() {
  return (
    <>
      <div id="search-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center content-search">
              <div className="item-search">
                <p className="category">Tipe Driver</p>
                <select className="form-control btn-driver">
                  <option value="null">Pilih Tipe Driver</option>
                  <option value="true">Dengan Sopir</option>
                  <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                </select>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div className="item-search">
                <p className="category">Tanggal</p>
                <div className="btn-date">
                  <input
                    type="date"
                    className="form-control px-2"
                    placeholder="Pilih Tanggal"
                  />
                </div>
                <i className="fa-regular fa-calendar-check"></i>
              </div>
              <div className="item-search">
                <p className="category">Waktu Jemput/Ambil</p>
                <select className="form-control btn-time">
                  <option value="">Pilih Waktu</option>
                  <option value="1">08.00 WIB</option>
                  <option value="2">09.00 WIB</option>
                  <option value="2">10.00 WIB</option>
                  <option value="2">11.00 WIB</option>
                  <option value="2">12.00 WIB</option>
                </select>
                <i class="fa-regular fa-clock"></i>
              </div>
              <div className="item-search">
                <p className="category ">Jumlah Penumpang (optional)</p>
                <form className="form-penumpang" action="">
                  <label className="input-penumpang">
                    <input
                      type="text"
                      placeholder="Jumlah Penumpang"
                      style={{
                        width: "160px",
                        border: "none",
                        fontSize: "12px",
                      }}
                    />
                    <MdPeopleOutline className="collapsed" />
                  </label>
                </form>
              </div>
              <div className="button-search">
                <Link className="btn" to={"#"}>
                  Cari Mobil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Search;
