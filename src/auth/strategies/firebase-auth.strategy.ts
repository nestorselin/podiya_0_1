//
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// // noinspection TypeScriptCheckImport
// import { Reflector } from "@nestjs/core";
//
// @Injectable()
// export class FirebaseAuthStrategy extends PassportStrategy(Strategy, 'firebase-auth') {
//     constructor(
//       private readonly reflector: Reflector,
//       //private readonly authRepository: AuthRepository
//     ) {
//         super({
//             //jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
//         });
//     }
//
//     async validate(token) {
//         const firebaseUser: any = await auth()
//             .verifyIdToken(token, true)
//             .catch((err) => {
//                 throw new UnauthorizedException(err.message);
//             });
//
//         return this.authRepository.findUserByFirebaseUid(firebaseUser.uid);
//     }
// }
