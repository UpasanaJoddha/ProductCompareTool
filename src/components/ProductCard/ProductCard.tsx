import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Star, Battery, Monitor, Camera, Cpu, HardDrive, Smartphone } from 'lucide-react';
import { Product } from '../../data/products';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
  isSelected: boolean;
  isDisabled: boolean;
  onProductSelect: (p: Product) => void;
}

const ProductCard = ({ product, isSelected, isDisabled, onProductSelect }:Props) => {
  const getFeatureIcon = (feature: string) => {
    switch (feature) {
      case 'Battery Life':
        return <Battery size={16} />;
      case 'Screen Size':
        return <Monitor size={16} />;
      case 'Camera':
        return <Camera size={16} />;
      case 'Processor':
        return <Cpu size={16} />;
      case 'Storage':
      case 'RAM':
        return <HardDrive size={16} />;
      default:
        return <Smartphone size={16} />;
    }
  };

  return (
    <Card className={`${styles.cardRoot} ${isSelected ? styles.cardSelected : ''}`} elevation={4}>
      <Box position="relative">
        {isSelected && <div className={styles.selectionBadge}>Selected</div>}
        <CardMedia component="img" image={product.image} alt={product.name} className={styles.media} />
      </Box>

      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" color="primary">{product.brand}</Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Star size={16} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
            <Typography variant="body2">{product.rating}</Typography>
          </Box>
        </Box>

        <Typography variant="h6" noWrap gutterBottom>{product.name}</Typography>
        <Typography variant="h5" color="success.main" gutterBottom>{product.price}</Typography>

        <div className={styles.features}>
          {Object.entries(product.features).slice(0, 3).map(([k, v]) => (
            <Box key={k} display="flex" alignItems="center" gap={1}>
              {getFeatureIcon(k)}
              <Typography variant="body2" color="text.secondary">{k}:</Typography>
              <Typography variant="body2" style={{ fontWeight: 600 }}>{v}</Typography>
            </Box>
          ))}
        </div>
      </CardContent>

      <CardActions>
        <Button
          variant={isSelected ? 'contained' : 'contained'}
          color={isSelected ? 'error' : 'primary'}
          onClick={() => onProductSelect(product)}
          disabled={isDisabled}
          fullWidth
          className={styles.addBtn}
        >
          {isSelected ? 'Remove from Compare' : 'Add to Compare'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;