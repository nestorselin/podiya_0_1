import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { RolesAllowed } from '../auth/decorators/roles.decorator';
import { Roles } from '../common/constants/Roles';

@Controller("user")
//@UseGuards(RolesGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  //@RolesAllowed(Roles.user, Roles.admin)
  getHello(): string {
    return this.userService.getHello();
  }
}
