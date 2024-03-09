import {Navigation} from '@navigation/navigation';
import {StoreMachineContext} from '@services/store';

export const Application = () => (
  <StoreMachineContext.Provider>
    <Navigation />
  </StoreMachineContext.Provider>
);
