
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Product } from '../../data/products';
import { Battery, Monitor, Camera, Cpu, HardDrive, Smartphone } from 'lucide-react';
import styles from './ComparisonTable.module.css';

interface Props {
  selectedProducts: Product[];
  removeFromComparison: (id: number) => void;
  setShowComparison: (v: boolean) => void;
}

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

const ComparisonTable = ({ selectedProducts }:Props) => {
  const features = Object.keys(selectedProducts[0]?.features || {});

  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            {selectedProducts.map(p => (
              <TableCell key={p.id} align="center">
                <div style={{ fontWeight: 700 }}>{p.name}</div>
                <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  <img src={p.image} alt={p.name} style={{ width: 48, height: 48, borderRadius: 8, objectFit: 'cover' }} />
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {features.map(feature => (
            <TableRow key={feature}>
              <TableCell component="th" scope="row">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className={styles.featureIcon}>{getFeatureIcon(feature)}</span>
                  <span>{feature}</span>
                </div>
              </TableCell>

              {selectedProducts.map(p => {
                const val = p.features[feature];

                return (
                  <TableCell key={p.id} align="center">
                    {val}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable;