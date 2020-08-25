import { StateSchemaValue } from '../../../state/interfaces/StateSchema';
import { CharacterComponent } from '../../../character/components/CharacterComponent';
import { setCharacterAnimation, checkFalling } from '../CharacterStateSchema';
import { initializeCharacterState, updateCharacterState } from '../behaviors/CharacterBaseBehaviors';
import { DefaultStateGroups } from '../CharacterStateGroups';
import { onAnimationEnded } from './onAnimationEnded';
import { IdleState } from './IdleState';
import { StartWalkForwardState } from './StartWalkForwardState';

// Idle Behavior
export const DropIdleState: StateSchemaValue = {
  group: DefaultStateGroups.MOVEMENT,
  componentProperties: {
    component: CharacterComponent,
    properties: {
      ['velocitySimulator.damping']: 0.5,
      ['velocitySimulator.mass']: 7,
      ['velocityTarget']: { x: 0, y: 0, z: 0 },
    }
  },
  onEntry: {
    any: [
      {
        behavior: initializeCharacterState
      },
      {
        behavior: setCharacterAnimation,
        args: {
          name: 'drop_idle',
          transitionDuration: 0.1
        }
      }
  ]
},
  onUpdate: [
    { behavior: updateCharacterState },
    { behavior: checkFalling },
    { behavior: checkMoving,
    args: {
      transitionToState: StartWalkForwardState
    }
  },
    { behavior: onAnimationEnded,
      args: {
        transitionToState: IdleState
      }
  }]
};


export const checkMoving: Behavior = (entity) =>
{
  const character = getComponent<CharacterComponent>(entity, CharacterComponent as any)
  if (!character.rayHasHit) console.log("Change state! Falling!")
  // old { character.setState(new Falling(character)); }
}