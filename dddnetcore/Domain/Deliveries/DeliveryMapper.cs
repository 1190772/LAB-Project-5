using DDDSample1.Domain.Deliveries;

namespace DDDSample1
{

    public class DeliveryMapper
    {

        public DeliveryDTO toDTO(Delivery domain)
        {
            return new DeliveryDTO(domain.Id.Value, domain.DateOfDelivery.date,
             domain.Weight.deliveryWeight, domain.WarehouseId.deliveryWarehouseId, domain.PutDeliveryTime.deliveryInTime, domain.TakeDeliveryTime.deliveryOutTime);
        }

        public Delivery toDomain(DeliveryDTO dto)
        {
            return new Delivery(dto.DeliveryId, dto.DeliveryDate, dto.Weight, dto.WarehouseId, dto.PutDeliveryTime, dto.TakeDeliveryTime);
        }

    }


}


