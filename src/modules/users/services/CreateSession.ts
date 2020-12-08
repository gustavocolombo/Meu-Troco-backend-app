import User from '../models/User';
import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import auth from '../config/auth';
import AppError from '../errors/AppError';


interface Request {
  cpf: string;
  password: string;
}

interface Response{
  user: User;
  token: string;
}

class CreateSessionUserService {
  public async execute({ cpf, password }: Request): Promise <Response>{
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where : { cpf }
    });

    if(!user){
      throw new AppError ('Combinação de cpd e senha incorretas', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if(!passwordMatched){
      throw new AppError ('Combinação de cpf e senha incorretas', 401);
    } 

    const token = sign({}, auth.jwt.secret , {
      subject: user.id,
      expiresIn: auth.jwt.expiresIn
    })

    return {
      user,
      token
    }

  }
}

export default CreateSessionUserService;