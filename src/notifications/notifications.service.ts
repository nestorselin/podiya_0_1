import { Injectable } from '@nestjs/common';
// import { messaging } from 'firebase-admin';

@Injectable()
export class NotificationsService {

  // async sendUserNotification(userDto, title: string, body: string) {
  //   if (userDto.fcmToken) {
  //     return messaging().sendToDevice(userDto.fcmToken, {
  //       notification: {
  //         title,
  //         body
  //       }
  //     });
  //   }
  //
  //   return null;
  // }
}
