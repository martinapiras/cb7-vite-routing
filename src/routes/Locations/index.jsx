import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { roomList } from "../../mocks/reservations.js";
import styles from "./index.module.scss";

export default function () {
  const navigate = useNavigate();

  const onHandleClick = (id) => navigate(`/locations/${id}`);

  return (
    <div className={styles.Locations}>
      {roomList?.map((item) => (
        <Card key={item.id} data={item} onHandleClick={onHandleClick} />
      ))}
    </div>
  );
}
