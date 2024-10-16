
import express, { Application } from "express";
import { VehicleController } from "../src/controllers/VehicleController";
import { VehicleService } from "../src/services/VehicleService";
import { MongoVehicleRepository } from "./repositories/MongoDB";

export class Server {
  private app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());

    const vehicleRepository = new MongoVehicleRepository();
    const vehicleService = new VehicleService(vehicleRepository);
    const vehicleController = new VehicleController(vehicleService);

    this.routes(vehicleController);
  }

  private routes(vehicleController: VehicleController): void {
    this.app.post(
      "/vehicles",
      vehicleController.createVehicle.bind(vehicleController)
    );
    this.app.get(
      "/vehicles/:id",
      vehicleController.getVehicle.bind(vehicleController)
    );

  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}


const server = new Server();
server.listen(3000);
