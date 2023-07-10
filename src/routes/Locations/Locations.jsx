import { roomList } from "../../mocks/reservations";
import { useParams } from "react-router-dom";
import styles from "./Locations.module.scss";

export default function Locations() {
  const params = useParams();
  const location = roomList.filter((item) => item.id == params.id)[0];

  return (
    <div className={styles.Locations}>
      <div className={styles.text}>
        <h1 className={styles.title}>{location.name}</h1>
        <p className={styles.location}>{location.location}</p>
        <p className={styles.price}>
          <span>{location.price}€</span>/night
        </p>
        <p className={styles.description}>{location.description}</p>
        <div className={styles.amenities}>
          {location.amenities.length &&
            location.amenities.map((amenity) => (
              <span className={styles.amenity}>{amenity}</span>
            ))}
        </div>
      </div>
      <div className={styles.pics}>
        <img src={location.imageLocation} alt={location.name} />
      </div>
      <h2 className={styles.rating}>
        {location.rating} ⭐ (from {location.reviews.length} reviews)
      </h2>
      <div className={styles.reviews}>
        {location.reviews &&
          location.reviews.map((review) => (
            <div className={styles.review}>
              <p className={styles.reviewContent}>"{review.comment}"</p>
              <p className={styles.reviewAuthor}>by {review.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
