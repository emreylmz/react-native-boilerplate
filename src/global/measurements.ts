const space: number[] = [0, 5, 10, 15, 20, 25, 30, 60, 120];

const fontSizes: number[] = [10, 12, 14, 16, 18, 22, 30, 36];

const radius: { [key: string]: number } = {
  normal: 6,
  large: 10,
  full: 999,
};

const zIndex: { [key: string]: number } = {
  default: 0,
  header: 100,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
};

export { space, fontSizes, radius, zIndex };
