import React from 'react';
import Button from '@mui/material/Button';
import { X } from 'lucide-react';
import { Product } from '../../data/products';
import styles from './ComparisonBar.module.css';

interface Props {
  selectedProducts: Product[];
  removeFromComparison: (id: number) => void;
  clearComparison: () => void;
  setShowComparison: (v: boolean) => void;
}

const ComparisonBar = ({ selectedProducts, removeFromComparison, clearComparison, setShowComparison }:Props) => {
  if (selectedProducts.length === 0) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ fontWeight: 600, color: '#1e40af' }}>Selected: {selectedProducts.length}/3</div>
          {selectedProducts.map(p => (
            <div key={p.id} className={styles.selectedTag}>
              <span>{p.name}</span>
              <button onClick={() => removeFromComparison(p.id)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          {selectedProducts.length >= 2 && (
            <Button variant="contained" color="primary" onClick={() => setShowComparison(true)}>
              Compare ({selectedProducts.length})
            </Button>
          )}
          {/* <Button variant="contained" onClick={() => setShowComparison(true)}>
              Compare Products
            </Button> */}
          <Button variant="outlined" onClick={clearComparison}>Clear All</Button>
        </div>
      </div>
    </div>
  );
};

export default ComparisonBar;