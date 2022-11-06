using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Warehouses;


namespace DDDSample1.Domain
{
    public interface IWarehouseService
    {
        public Task<List<WarehouseDTO>> GetAllAsync();

        public Task<WarehouseDTO> GetByIdAsync(Guid warehouseId);

        public Task<WarehouseDTO> AddAsync(WarehouseDTO dto);

        public Task<WarehouseDTO> DeleteAsync(Guid warehouseId);
        Task<WarehouseDTO> UpdateAsync(WarehouseDTO dto);
    }
}