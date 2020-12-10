import User from "../entities/User";
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import User from '@modules/users/infra/typeorm/entities/User'
import { getRepository, Repository } from 'typeorm';

class UserAppointment{
  private ormRepository: Repository<User>

  constructor(){
    this.ormRepository = getRepository(User);
  }
  
  public async create({cpf}: ICreateUserDTO): Promise<User>{
    const user = this.ormRepository.create({cpf});

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserAppointment;