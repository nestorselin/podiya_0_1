import { Entity, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../common/core/base.entity';
import { Roles } from '../common/constants/Roles';
import { EventEntity } from '../events/event.entity';
import { FeedbackEntity } from '../feedbacks/feedback.entity';

@Entity('users')
export class UserEntity extends BaseEntity{

    @Column({ unique: true, nullable: true })
    firebaseUid: string;

    @Column()
    fullName: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column({default: Roles.user})
    role: Roles;

    @Column()
    phone: string;

    @Column()
    fcmToken: string;

    @Column()
    birthdate: Date;

    @Column()
    bio: string;

    @Column()
    avatarPath: string;

    @Column()
    followingCount: number;

    @Column()
    followersCount: number;

    @Column()
    averageRating: number;

    @Column()
    totalRatings: number;

    @Column()
    createdEventsCount: number;

    @Column()
    visitedEventsCount: number;

    @OneToMany(() => EventEntity, event => event.user)
    events: EventEntity[];

    @OneToMany(() => FeedbackEntity, feedback => feedback.user)
    feedbacks: FeedbackEntity[];

    @ManyToMany(() => UserEntity)
    @JoinTable({
        name: 'user_follows',
        joinColumn: { name: 'followerId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'followingId', referencedColumnName: 'id' },
    })
    following: UserEntity[];

    @ManyToMany(() => UserEntity)
    @JoinTable({
        name: 'user_follows',
        joinColumn: { name: 'followingId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'followerId', referencedColumnName: 'id' },
    })
    followers: UserEntity[];
}