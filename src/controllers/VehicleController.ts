
import { VehicleService } from "../services/VehicleService";
import { Request, Response } from "express";

export class VehicleController {
  constructor(private vehicleService: VehicleService) {}

  async createVehicle(req: Request, res: Response): Promise<void> {
    await this.vehicleService.createVehicle(req.body);
    res.status(201).send("Vehicle created");
  }

  async getVehicle(req: Request, res: Response): Promise<void> {
    const vehicle = await this.vehicleService.getVehicleById(req.params.id);
    if (vehicle) {
      res.status(200).json(vehicle);
    } else {
      res.status(404).send("Vehicle not found");
    }
  }


}

