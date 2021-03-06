import User from '@modules/users/infra/typeorm/entities/User';
import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';

class UserController{
  async create(request: Request, response: Response){
    try{
  
      const { cpf } = request.body;  
    
        const createUser = new CreateUserService();
    
        const user = await createUser.execute({
          cpf,
        });
    
        return response.json(user);
    
     }catch(err){
       return response.status(400).json({ error: err.message});
     }
  }
}

export default UserController;