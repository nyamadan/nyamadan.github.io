export type ImagePath = string & {
  width: number;
  height: number;
  __imagePath: never;
};

/* eslint-disable global-require,import/no-unresolved,@typescript-eslint/no-var-requires */
export const profile64x64: ImagePath = require("../images/icon.png?resize&sizes[]=64");
export const profile128x128: ImagePath = require("../images/icon.png?resize&sizes[]=128");
/* eslint-enable global-require,import/no-unresolved,@typescript-eslint/no-var-requires */
