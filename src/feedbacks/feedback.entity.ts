import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { BaseEntity } from '../common/core/base.entity';
import { EventEntity } from '../events/event.entity';
import { MediaEntity } from '../media/media.entity';

@Entity('feedbacks')
export class FeedbackEntity extends BaseEntity{
    @ManyToOne(() => UserEntity, user => user.events)
    user: UserEntity;

    @Column()
    userId: number;

    @ManyToOne(() => EventEntity, event => event.feedbacks)
    event: UserEntity;

    @Column()
    eventId: number;

    @Column({nullable: true})
    text: string;

    @Column()
    rating: number;

    @ManyToMany(() => MediaEntity)
    @JoinTable({
        name: 'feedback_media',
        joinColumn: { name: 'eventId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'mediaId', referencedColumnName: 'id' },
    })
    media: MediaEntity[];
}
