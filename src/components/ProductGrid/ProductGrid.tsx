
import { Product } from '../../data/products';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.css';
import { Smartphone } from 'lucide-react';

interface Props {
  products: Product[];
  selectedProducts: Product[];
  onProductSelect: (p: Product) => void;
}

const ProductGrid = ({ products, selectedProducts, onProductSelect }:Props) => {
  if (products.length === 0) {
    return (
      <div className={styles.noResults}>
        <Smartphone size={64} />
        {/* <p>Product Not Found</p> */}
        <h3>No products found</h3>
        <p>Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => {
        const isSelected = selectedProducts.some(p => p.id === product.id);
        const isDisabled = !isSelected && selectedProducts.length >= 3;
        return (
          <ProductCard
            key={product.id}
            product={product}
            isSelected={isSelected}
            isDisabled={isDisabled}
            onProductSelect={onProductSelect}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;