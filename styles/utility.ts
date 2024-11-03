import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  gap5: {
    columnGap: 5,
  },
  roundedMd: {
    borderRadius: 4
  },
  bgBlue500: {
    backgroundColor: '#4285F4',
  },
  bgRed500: {
    backgroundColor: '#EF4444',
  },
  px2: {
    paddingHorizontal: 8,
  },
  px4: {
    paddingHorizontal: 16,
  },
  py2: {
    paddingVertical: 8,
  },
  textWhite: {
    color: '#FFFFFF',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
  textZinc500: {
    color: '#718096',
  }
});

export const flexRow = style.flexRow
export const gap5 = style.gap5
export const roundedMd = style.roundedMd
export const bgRed500 = style.bgRed500
export const bgBlue500 = style.bgBlue500
export const px4 = style.px4
export const px2 = style.px2
export const py2 = style.py2
export const textWhite = style.textWhite
export const itemsCenter = style.itemsCenter
export const lineThrough = style.lineThrough
export const textZinc500 = style.textZinc500
export const flex1 = style.flex1
