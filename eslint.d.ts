declare module 'eslint-config-pyroarsonist';

import { FlatConfig } from 'typescript-eslint';

export declare const recommended: FlatConfig.ConfigArray;

export declare const typescript: FlatConfig.ConfigArray;

declare const _default: {
  configs: {
    recommended: typeof recommended;
    typescript: typeof typescript;
  };
};

export default _default;
