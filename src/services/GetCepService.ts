import { consultarCep } from "correios-brasil";
import Adress from '../entities/Adress';
import { response } from 'express';

type CepRequest = {
  cep: string;
};

export class GetCepService {
    async execute({cep}: CepRequest) {
  var result;
    await consultarCep(cep).then((adress) => {        
        
        result = adress

    }).catch(
        
    )

    return result;
  }
}
