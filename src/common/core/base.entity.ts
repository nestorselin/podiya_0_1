import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
export class BaseEntity {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
