import  { useEffect, useMemo, useState } from 'react';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header/Header';
import ComparisonBar from './components/ComparisonBar/ComparisonBar';
import ProductGrid from './components/ProductGrid/ProductGrid';
import ComparisonTable from './components/ComparisonTable/ComparisonTable';

import { productsData,Product } from './data/products';


function App(){
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleProductSelect = (product: Product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(prev => prev.filter(p => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts(prev => [...prev, product]);
    }
  };

  const removeFromComparison = (productId: number) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setSelectedProducts([]);
    setShowComparison(false);
  };

  const toggleDarkMode = () => setDarkMode(v => !v);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showComparison) setShowComparison(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showComparison]);

  const theme = useMemo(() => createTheme({ palette: { mode: darkMode ? 'dark' : 'light', primary: { main: '#2563eb' }, secondary: { main: '#f59e0b' } } }), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <ComparisonBar selectedProducts={selectedProducts} removeFromComparison={removeFromComparison} clearComparison={clearComparison} setShowComparison={setShowComparison} />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {!showComparison ? (
          <ProductGrid products={filteredProducts} selectedProducts={selectedProducts} onProductSelect={handleProductSelect} />
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h2>Product Comparison</h2>
              <button onClick={() => setShowComparison(false)} style={{ padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.12)' }}>Back to Products</button>
            </div>
            <ComparisonTable selectedProducts={selectedProducts} removeFromComparison={removeFromComparison} setShowComparison={setShowComparison} />
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default App;