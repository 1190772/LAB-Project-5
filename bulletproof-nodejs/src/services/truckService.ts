import { Service, Inject } from 'typedi';
import config from '../../config';
import ITruckDTO from '../dto/ITruckDTO';
import { Truck } from '../domain/truck';
import ITruckRepo from './IRepos/ITruckRepo';
import ITruckService from './IServices/ITruckService';
import { Result } from '../core/logic/Result';
import { TruckMap } from '../mappers/TruckMap';

@Service()
export default class TruckService implements ITruckService {
  constructor(@Inject(config.repos.truck.name) private truckRepo: ITruckRepo) {}

  public async getTruck(truckId: string): Promise<Result<ITruckDTO>> {
    try {
      const truck = await this.truckRepo.findByDomainId(truckId);

      if (truck === null) {
        return Result.fail<ITruckDTO>('Truck not found');
      } else {
        const truckDTOResult = TruckMap.toDTO(truck) as ITruckDTO;
        return Result.ok<ITruckDTO>(truckDTOResult);
      }
    } catch (e) {
      throw e;
    }
  }

  public async getAllTrucks(): Promise<Result<ITruckDTO[]>> {
    try {
      const trucks = await this.truckRepo.findAll();
      const dtos = [];
      for (let i = 0; i < trucks.length; i++) {
        dtos.push(TruckMap.toDTO(trucks[i]));
      }
      return Result.ok(dtos);
    } catch (e) {
      throw e;
    }
  }

  public async createTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>> {
    try {
      const truckOrError = await Truck.create(truckDTO);

      if (truckOrError.isFailure) {
        return Result.fail<ITruckDTO>(truckOrError.errorValue());
      }

      const truckResult = truckOrError.getValue();

      await this.truckRepo.save(truckResult);

      const truckDTOResult = TruckMap.toDTO(truckResult) as ITruckDTO;
      return Result.ok<ITruckDTO>(truckDTOResult);
    } catch (e) {
      throw e;
    }
  }

  public async updateTruck(truckDTO: ITruckDTO): Promise<Result<ITruckDTO>> {
    try {
      const truck = await this.truckRepo.findByDomainId(truckDTO.id);

      if (truck === null) {
        return Result.fail<ITruckDTO>('Truck not found');
      } else {
        truck.licensePlate = truckDTO.licensePlate;
        truck.tare = truckDTO.tare;
        truck.maximumLoad = truckDTO.maximumLoad;
        truck.batteryCapacity = truckDTO.batteryCapacity;
        truck.autonomy = truckDTO.autonomy;
        truck.chargingTime = truckDTO.chargingTime;
        await this.truckRepo.save(truck);

        const truckDTOResult = TruckMap.toDTO(truck) as ITruckDTO;
        return Result.ok<ITruckDTO>(truckDTOResult);
      }
    } catch (e) {
      throw e;
    }
  }
}
