import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ReservationStatus() {
  const [reservationList, setReservationList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://openAPI.seoul.go.kr:8088/6a4164715a646f6e3935726c417373/json/ListPublicReservationSport/1/10/테니스장"
      )
      .then((res) =>
        setReservationList(res.data.ListPublicReservationSport.row)
      )
      .catch((error) => console.log(error));
  }, []);

  return <Button onClick={() => console.log(reservationList)}>LIST</Button>;
}

export default ReservationStatus;
