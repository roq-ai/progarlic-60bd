import { AdministratorInterface } from 'interfaces/administrator';
import { ClientInterface } from 'interfaces/client';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  administrator: AdministratorInterface[];
  client: ClientInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
