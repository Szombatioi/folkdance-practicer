import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import {Response} from 'express';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const hashedPw = await bcrypt.hash(createUserDto.password, 12);
    return await this.userService.create({
      ...createUserDto,
      password: hashedPw,
    });
  }

  @Post('login')
  async login(
    @Body('email') email: string, 
    @Body('password') password: string, 
    @Body('username') username: string, 
    @Res({passthrough: true}) res: Response
  ) {
    let user: User | null = null;
    
    if (email) {
      user = await this.userService.findByEmail(email);
    }

    if(!user && username) //if we didn't find by email or email is not provided, we try to find by username
      user = await this.userService.findByUsername(username);
    
    if (!user) throw new BadRequestException('Invalid credentials');
    if (!await bcrypt.compare(password, user.password)) throw new BadRequestException('Invalid credentials');

    const jwt = await this.jwtService.signAsync({id: user.id});

    res.cookie('jwt', jwt, {httpOnly: true});
    return {
      message: 'Logged in successfully',
    };
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
