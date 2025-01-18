import type { Brand } from "@/types/brand";
import { addBrand } from "./actions";
import styles from "./page.module.css";
import brandsApi from "@/services/api/brands";

const Brands = async () => {
  const brands = await brandsApi.getAll();
  return (
    <>
      <section className={styles.listSection}>
        <h1>Brands</h1>
        <h3>All the brands</h3>
        {brands ? (
          <ul>
            {brands.map((brand: Brand) => (
              <li key={brand.id}>{brand.name}</li>
            ))}
          </ul>
        ) : (
          <p>No brands available</p>
        )}
      </section>
      <section>
        <form action={addBrand}>
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

export default Brands;
