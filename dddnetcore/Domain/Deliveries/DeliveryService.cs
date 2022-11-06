using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain
{
    public class DeliveryService
    {
        private readonly IDeliveryRepository _repo;
        private readonly IUnitOfWork _unitOfWork;


        public DeliveryService(IUnitOfWork unitOfWork, IDeliveryRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<List<DeliveryDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<DeliveryDTO> listDto = list.ConvertAll<DeliveryDTO>(d => deliveryMapper.toDTO(d));

            return listDto;
        }

        public async Task<DeliveryDTO> GetByIdAsync(Guid deliveryId)
        {
            var delivery = await this._repo.GetByIdAsync(new DeliveryId(deliveryId));

            if (delivery == null)
                return null;

            return deliveryMapper.toDTO(delivery);
        }

        public async Task<DeliveryDTO> AddAsync(DeliveryDTO dto)
        {
            var delivery = deliveryMapper.toDomain(dto);

            await this._repo.AddAsync(delivery);

            await this._unitOfWork.CommitAsync();
            return deliveryMapper.toDTO(delivery);

        }
      
        public async Task<DeliveryDTO> DeleteAsync(Guid deliveryId)
        {
            var delivery = await this._repo.GetByIdAsync(new DeliveryId(deliveryId));
            if (delivery == null)
            {
                return null;
            }
            DeliveryDTO dto = deliveryMapper.toDTO(delivery);
            this._repo.Remove(delivery);
            await this._unitOfWork.CommitAsync();
            return dto;
        }
      
    }
}
 