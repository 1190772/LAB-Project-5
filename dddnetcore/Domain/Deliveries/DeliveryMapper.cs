namespace DDDSample1
{

    public class DeliveryMapper
    {

        public DeliveryDTO toDTO(Delivery domain)
        {
            return new DeliveryDTO(domain.id, domain.DateOfDelivery,
             domain.Weight, domain.WarehouseId, domain.PutDeliveryTime, domain.TakeDeliveryTime);
        }

        public Delivery toDomain(DeliveryDTO dto)
        {
            return new Delivery(dto.id, dto.DeliveryDate, dto.Weight, dto.WarehouseId, dto.PutDeliveryTime, dto.TakeDeliveryTime);
        }

    }


}


