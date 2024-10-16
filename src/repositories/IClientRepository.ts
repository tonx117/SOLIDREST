import { IClient } from '../models/IClient';
// IClientRepository.ts
export interface IClientRepository {
  create(client: IClient): Promise<void>;
  findById(id: string): Promise<IClient | null>;
  update(id: string, client: IClient): Promise<void>;
  delete(id: string): Promise<void>;
}
