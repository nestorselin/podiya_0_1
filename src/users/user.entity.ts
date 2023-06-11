import {
    Column,
    Entity,
} from 'typeorm';
import { BaseEntity } from '../common/core/base.entity';
import { Roles } from '../common/constants/Roles';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {

    @Column({ unique: true, nullable: true })
    firebaseUid: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    username: string;

    @Column()
    email: string;

    @Column()
    emailVerificationToken: string;

    @Column({ nullable: true })
    fcmToken: string;

    @Column({ default: Roles.USER })
    roles: number;
}
