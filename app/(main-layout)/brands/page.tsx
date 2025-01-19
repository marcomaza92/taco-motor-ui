import type { Brand } from "@/types/brand";
import { addBrand, deleteBrand } from "./actions";
import styles from "./page.module.css";
import brandsApi from "@/services/api/brands";
import Actions from "@/components/Actions/Actions";

const Brands = async () => {
  const brands = await brandsApi.getAll();
  console.log(brands);
  const actions = [
    {
      name: "Delete",
      fn: deleteBrand,
    },
  ];
  return (
    <>
      <section className={styles.listSection}>
        <h1>Brands</h1>
        <h3>All the brands</h3>
        {brands.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand: Brand) => (
                <tr key={brand.id}>
                  <td>{brand.id}</td>
                  <td>{brand.name}</td>
                  <td>
                    <Actions actions={actions} elementId={brand.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
