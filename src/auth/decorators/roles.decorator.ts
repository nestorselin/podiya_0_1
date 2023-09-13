import { SetMetadata } from '@nestjs/common';
import { Roles } from '../../common/constants/Roles';

export const RolesAllowed = (...roles: Roles[]) => SetMetadata('roles', roles);
