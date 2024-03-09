import {createActorContext} from '@xstate/react';
import {storeMachine} from './store.machine';

export const StoreMachineContext = createActorContext(storeMachine);
