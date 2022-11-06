using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain
{

    private readonly IWarehouseRepository _repo;
    private readonly IUnitOfWork _unitOfWork;


    public WarehouseService(IUnitOfWork unitOfWork, IWarehouseRepository repo)
    {
        this._unitOfWork = unitOfWork;
        this._repo = repo;
    }


    public async Task<List<WarehouseDTO>> GetAllAsync()
    {
        var list = await this._repo.GetAllAsync();

        List<WarehouseDTO> listDto = list.ConvertAll<WarehouseDTO>(d => warehouseMapper.toDTO(d));

        return listDto;
    }


    public async Task<WarehouseDTO> GetByIdAsync(Guid warehouseId)
    {
        var warehouse = await this._repo.GetByIdAsync(new WarehouseId(warehouseId));

        if (warehouse == null)
            return null;

        return warehouseMapper.toDTO(warehouse);
    }



    public async Task<WarehouseDTO> AddAsync(WarehouseDTO dto)
    {
        var warehouse = warehouseMapper.toDomain(dto);

        await this._repo.AddAsync(warehouse);

        await this._unitOfWork.CommitAsync();
        return warehouseMapper.toDTO(warehouse);

    }

    public async Task<WarehouseDTO> DeleteAsync(Guid warehouseId)
        {
            var warehouse = await this._repo.GetByIdAsync(new WarehouseId(warehouseId));
            if (warehouse == null)
            {
                return null;
            }
            WarehouseDTO dto = warehouseMapper.toDTO(warehouse);
            this._repo.Remove(warehouse);
            await this._unitOfWork.CommitAsync();
            return dto;
        }














}

