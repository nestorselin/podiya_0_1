import { Controller, Get, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { RolesGuard } from '../auth/guards/roles.guard';
import { RolesAllowed } from '../auth/decorators/roles.decorator';
import { Roles } from '../common/constants/Roles';

@Controller("user")
@UseGuards(RolesGuard)
export class EventController {
  constructor(private readonly userService: EventService) {}

  @Get()
  @RolesAllowed(Roles.user, Roles.admin)
  getHello(): string {
    return this.userService.getHello();
  }
}
