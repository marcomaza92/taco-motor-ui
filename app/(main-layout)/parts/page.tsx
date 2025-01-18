import type { Part } from "@/types/part";
import styles from "./page.module.css";
import partsApi from "@/services/api/parts";
import { addPart } from "./actions";

const Parts = async () => {
  const parts = await partsApi.getAll();
  return (
    <>
      <section className={styles.listSection}>
        <h1>Parts</h1>
        <h3>All the parts</h3>
        {parts.data ? (
          <ul>
            {parts.map((part: Part) => (
              <li key={part.id}>{part.name}</li>
            ))}
          </ul>
        ) : (
          <p>No parts available</p>
        )}
      </section>
      <section>
        <form action={addPart}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" name="name" required />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </section>
    </>
  );
};

export default Parts;
