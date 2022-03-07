import { InsertDoctorSpecialtiesService } from "../services/InsertDoctorSpecialtiesService";
import { Request, Response } from "express";

export class InsertDoctorSpecialtiesControlller {
  async handle(request: Request, response: Response) {
    const { id_doctor, id_specialties } = request.body;

    console.log(id_doctor, id_specialties);

    const service = new InsertDoctorSpecialtiesService();

    const result = await service.execute({
      id_doctor,
      id_specialties,
    });

    return response.json(result);
  }
}




