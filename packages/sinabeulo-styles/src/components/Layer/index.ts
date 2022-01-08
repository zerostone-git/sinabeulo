import { composeClassNames } from '@sinabeulo/utils';
import layerClassNames, { LayerClassNames } from './Layer.scss';

const classNamesForLayer = (
  ...composite: (Partial<LayerClassNames> | undefined)[]
): LayerClassNames => composeClassNames(layerClassNames, ...composite);

export { layerClassNames, classNamesForLayer };
export type { LayerClassNames };
