import { Expose } from 'class-transformer';

export class IBase {
  id: string;

  @Expose()
  updateDate: Date;

  @Expose()
  creationDate: Date;
}

export default IBase;
