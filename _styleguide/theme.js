import remcalc from 'remcalc';

const spacing = {
  0: remcalc(0),
  0.5: remcalc(3),
  1: remcalc(6),
  1.5: remcalc(9),
  2: remcalc(12),
  2.5: remcalc(15),
  3: remcalc(18),
  3.5: remcalc(21),
  4: remcalc(24),
  4.5: remcalc(27),
  5: remcalc(30),
  5.5: remcalc(33),
  6: remcalc(36),
  6.5: remcalc(39),
  7: remcalc(42),
  7.5: remcalc(45),
  8: remcalc(48),
  8.5: remcalc(51),
  9: remcalc(54),
  9.5: remcalc(57),
  10: remcalc(60),
  10.5: remcalc(63),
  11: remcalc(66),
  11.5: remcalc(69),
  12: remcalc(72),
  12.5: remcalc(75),
  13: remcalc(78),
  13.5: remcalc(81),
  '13px': remcalc(13),
};

/** ********************************** BASE *********************************** */

export const base = {
  orange: '#fccb7e',
  blue: '#83d1fb',
  grey: '#e0e4e8',
  pink: '#fda7dc',
  green: '#a6e191',
  black: '#000',
  text: '#323232',
};

export default {
  ...base,
  spacing,
  transparent: 'transparent',
};
