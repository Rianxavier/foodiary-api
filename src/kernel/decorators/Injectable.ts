import { Registry } from '@kernel/di/Registry';
import { Constructor } from 'src/shared/types/Contructor';

export function Injectable(): ClassDecorator {
  return (target) => {
    Registry.getInstance().register(target as unknown as Constructor);
  };
}
