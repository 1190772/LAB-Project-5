using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain
{
    public class DeliveryService: IDeliveryService
    {
        private readonly IDeliveryRepository _repo;
        private readonly IUnitOfWork _unitOfWork;
        private readonly DeliveryMapper _mapper;


        public DeliveryService(IUnitOfWork unitOfWork, IDeliveryRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._mapper = new DeliveryMapper();
        }

        public async Task<List<DeliveryDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<DeliveryDTO> listDto = list.ConvertAll<DeliveryDTO>(d => _mapper.toDTO(d));

            return listDto;
        }

        public async Task<DeliveryDTO> GetByIdAsync(Guid deliveryId)
        {
            var delivery = await this._repo.GetByIdAsync(new DeliveryId(deliveryId));

            if (delivery == null)
                return null;

            return _mapper.toDTO(delivery);
        }

        public async Task<DeliveryDTO> AddAsync(DeliveryDTO dto)
        {
            var delivery = _mapper.toDomain(dto);

            await this._repo.AddAsync(delivery);

            await this._unitOfWork.CommitAsync();
            return _mapper.toDTO(delivery);

        }
      
        public async Task<DeliveryDTO> DeleteAsync(Guid deliveryId)
        {
            var delivery = await this._repo.GetByIdAsync(new DeliveryId(deliveryId));
            if (delivery == null)
            {
                return null;
            }
            DeliveryDTO dto = _mapper.toDTO(delivery);
            this._repo.Remove(delivery);
            await this._unitOfWork.CommitAsync();
            return dto;
        }

        public async Task<DeliveryDTO> UpdateAsync(DeliveryDTO dto)
        {
            var delivery = await this._repo.GetByIdAsync(new DeliveryId(dto.DeliveryId));
            if (delivery == null)
            {
                return null;
            }

            delivery.update(dto);
            await _unitOfWork.CommitAsync();
            return _mapper.toDTO(delivery);
        }
    }
}
 