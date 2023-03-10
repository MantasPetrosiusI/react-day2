import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const MyFooter = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="#">
          Mantas Bookshop
        </a>
      </div>
    </MDBFooter>
  );
};
export default MyFooter;
