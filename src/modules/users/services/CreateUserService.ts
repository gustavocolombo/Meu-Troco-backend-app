import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import { getRepository } from 'typeorm';

interface Request{
  cpf: string;
}

class CreateUserService{
  public async execute({cpf}: Request) : Promise<User>{
    const usersRepository = getRepository(User);

    const userCheckExists = await usersRepository.findOne({
      where: { cpf }
    });

    if(userCheckExists){
      throw new Error('Este CPF já está cadastrado no sistema');
    }

    const user = usersRepository.create({
      cpf,
    });

    // await usersRepository.save(user);

  return user;  
  }
}

export default CreateUserService;