import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { BaseEntity } from '../common/core/base.entity';
import { MediaType } from './media.enum';

@Entity('media')
export class MediaEntity extends BaseEntity{

    @Column()
    type: MediaType;

    @Column()
    payload: string;

    @Column()
    format: string;

    @Column()
    mimeType: string;

    @Column()
    originalName: string;

    @Column()
    generatedName: string;

    @Column({nullable: true})
    eventId: number

    @Column({nullable: true})
    feedbackId: number
}
