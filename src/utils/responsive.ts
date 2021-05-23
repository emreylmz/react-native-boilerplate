import dimensions from '@global/dimensions';

const BaseWidth = 414;

const scale = (size: number) => (dimensions.deviceWidth / BaseWidth) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;

export default {
  size: (size: number) => moderateScale(size),
  wpercent: (percent: number) =>
    Math.round((percent * dimensions.deviceWidth) / 100),
  number: (n: number) => moderateScale(n),
};
