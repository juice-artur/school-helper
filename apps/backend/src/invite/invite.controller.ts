import { Controller, Post, Body, UseGuards, Get, Param } from '@nestjs/common';
import { InviteService } from './invite.service';
import { CreateClassInviteDto } from './dto/create-invite.dto';
import {
  ApiOperation,
  ApiOkResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { MailService } from 'src/mail/mail.service';

@Controller('invite')
export class InviteController {
  constructor(
    private readonly inviteService: InviteService,
    private readonly mailService: MailService,
  ) {}

  @Post('student')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.TEACHER)
  @ApiOperation({ summary: 'Invite student into the class' })
  @ApiOkResponse({
    type: CreateClassInviteDto,
  })
  @ApiBody({ type: CreateClassInviteDto })
  async inviteStudent(@Body() createInviteDto: CreateClassInviteDto) {
    const invitation = await this.inviteService.create(createInviteDto);
    this.mailService.sendInviteStudentToClassMail(
      invitation.id,
      createInviteDto.userEmail,
    );
    return invitation;
  }

  @Get('student/accept/:id')
  @ApiOperation({ summary: 'Accept invite into' })
  @ApiOkResponse({
    type: CreateClassInviteDto,
  })
  @ApiParam({ name: 'id', type: 'string' })
  async acceptInviteStudent(@Param('id') id: string) {
    const invitation = await this.inviteService.acceptById(id);
    return invitation;
  }
}
