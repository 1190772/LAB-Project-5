using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;


namespace DDDSample1.Domain
{
    public interface IDeliveryService
    {
        public async Task<List<DeliveryDTO>> GetAllAsync();

        public async Task<DeliveryDTO> GetByIdAsync(Guid deliveryId);

        public async Task<DeliveryDTO> AddAsync(DeliveryDTO dto);
        
        public async Task<DeliveryDTO> DeleteAsync(Guid deliveryId); 
    }
}