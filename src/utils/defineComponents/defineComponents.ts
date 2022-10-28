import tagPrefix from "../../config/tagPrefix";
import { ComponentName, Components } from "../../types/components";

const defineComponents = (
  allComponents: CustomElementConstructor[],
  components: Components
): Components => {
  const definedComponents = components;

  allComponents.forEach((Component: CustomElementConstructor) => {
    const componentName = Component.name.toLowerCase() as ComponentName;

    definedComponents[componentName] = {
      ...definedComponents[componentName],
      class: componentName,
      tag: `${tagPrefix}${componentName}`,
      Component,
    };
  });

  return definedComponents;
};

export default defineComponents;
