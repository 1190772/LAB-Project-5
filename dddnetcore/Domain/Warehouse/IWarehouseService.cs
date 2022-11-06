using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using Microsoft.AspNetCore.Mvc;

namespace DDDSample1.Domain
{
    public interface IWarehouseService
    {
        public async Task<List<WarehouseDTO>> GetAllAsync();

        public async Task<WarehouseDTO> GetByIdAsync(Guid warehouseId);

        public async Task<WarehouseDTO> AddAsync(WarehouseDTO dto);
        
        public async Task<WarehouseDTO> DeleteAsync(Guid warehouseId); 
    }
}