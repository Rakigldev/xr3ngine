import { Behavior } from '../../common/interfaces/Behavior';
import { StateAlias } from '../types/StateAlias';
import { StateGroupAlias } from '../types/StateGroupAlias';
import { ComponentConstructor } from '../../ecs/interfaces/ComponentInterfaces';

export interface StateSchemaValue {
    group?: StateGroupAlias
    component?: any
    blockedBy?: StateAlias
    overrides?: StateAlias
    canFindVehiclesToEnter?: boolean;
    canEnterVehicles?: boolean;
    canLeaveVehicles?: boolean
    componentProperties?: {
      component: any
      properties: {
        [key: string]: any
      }
    }
    onEntry?: {
      any: BehaviorArrayAlias
      [key: string]: BehaviorArrayAlias
    }
    onChanged?: BehaviorArrayAlias
    onUpdate?: BehaviorArrayAlias
    onLateUpdate?: BehaviorArrayAlias
    onExit?: {
      any: BehaviorArrayAlias
      [key: string]: BehaviorArrayAlias
    }
}

export interface BehaviorArrayAlias {
  behavior: Behavior
  args?: any
}[]

export interface StateSchema {
  groups: {
    [key: number]: {
      exclusive: boolean
      states: StateAlias[]
      default?: StateAlias
    }
  }
  states: {
    [key: number]: StateSchemaValue
  }
}