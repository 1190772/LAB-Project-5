using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Shared;


namespace DDDSample1.Domain
{
    public interface IDeliveryService
    {
        public Task<List<DeliveryDTO>> GetAllAsync();

        public Task<DeliveryDTO> GetByIdAsync(Guid deliveryId);

        public Task<DeliveryDTO> AddAsync(DeliveryDTO dto);

        public Task<DeliveryDTO> DeleteAsync(Guid deliveryId);
        public Task<DeliveryDTO> UpdateAsync(DeliveryDTO dto);
    }
}