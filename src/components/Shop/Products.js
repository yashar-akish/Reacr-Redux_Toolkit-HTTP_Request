import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {

  const DUMMY_PRODUCTS = [
    {
      id: 'p1',
      price: 7,
      title: 'The First Book',
      description: 'this is the first book which you see here'
    },
    {
      id: 'p2',
      price: 4,
      title: 'The Second Book',
      description: 'this is the second book which you see here'
    },
  ];


  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map((product) => (
            <ProductItem key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              />
            )
          )
        }
      </ul>
    </section>
  );
};

export default Products;
