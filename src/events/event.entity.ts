import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { BaseEntity } from '../common/core/base.entity';
import { FeedbackEntity } from '../feedbacks/feedback.entity';
import { MediaEntity } from '../media/media.entity';

@Entity('events')
export class EventEntity extends BaseEntity{
    @ManyToOne(() => UserEntity, user => user.events)
    user: UserEntity;

    @Column()
    userId: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    eventDate: Date;

    @Column()
    type: string;

    @Column()
    location: string;

    @Column()
    price: number;

    @Column()
    ticketUrl: string;

    @OneToMany(() => FeedbackEntity, feedback => feedback.event)
    feedbacks: FeedbackEntity[];

    @ManyToMany(() => UserEntity)
    @JoinTable({
        name: 'user_event_relationships',
        joinColumn: { name: 'eventId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'userId', referencedColumnName: 'id' },
    })
    attendees: UserEntity[];

    @ManyToMany(() => MediaEntity)
    @JoinTable({
        name: 'event_media',
        joinColumn: { name: 'eventId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'mediaId', referencedColumnName: 'id' },
    })
    media: MediaEntity[];
}
