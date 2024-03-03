export interface DataAccess<T> {
  get(id: number): Promise<T>;
  getAll(): Promise<T[]>;
  add(t: T): Promise<void>;
  update(id: number, updateData: Partial<T>): Promise<void>;
  delete(id: number): Promise<void>;
}

export default DataAccess;
