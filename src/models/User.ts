import express from 'express';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;  

  @Column()
  password: string;

  @Column()
  birthday: string;
}

export default User;