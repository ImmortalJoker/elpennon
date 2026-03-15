export const FRAME_TYPES = [
  { id: 'alu-negro-mate', labelES: 'Aluminio negro mate', labelDE: 'Aluminium schwarz matt', labelEN: 'Black matte aluminium', pricePerMeter: 13.13 },
  { id: 'alu-negro-brillo', labelES: 'Aluminio negro brillo', labelDE: 'Aluminium schwarz glänzend', labelEN: 'Black gloss aluminium', pricePerMeter: 13.13 },
  { id: 'alu-plata', labelES: 'Aluminio plata', labelDE: 'Aluminium silber', labelEN: 'Silver aluminium', pricePerMeter: 14.50 },
  { id: 'alu-oro', labelES: 'Aluminio oro', labelDE: 'Aluminium gold', labelEN: 'Gold aluminium', pricePerMeter: 15.00 },
] as const;

export const GLASS_TYPES = [
  { id: 'brillo', labelES: 'Cristal brillo', labelDE: 'Glas glänzend', labelEN: 'Glossy glass', pricePerM2: 75.00 },
  { id: 'mate', labelES: 'Cristal mate', labelDE: 'Glas matt', labelEN: 'Matte glass', pricePerM2: 90.00 },
] as const;

export const BACKING_PRICE_PER_M2 = 0; // included in glass price

export const MIN_SIDE_CM = 10;
export const MAX_SIDE_CM = 200;
