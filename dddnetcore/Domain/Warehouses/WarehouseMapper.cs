using DDDSample1.Domain.Warehouses;

namespace DDDSample1
{
    public class WarehouseMapper
    {
        public WarehouseDTO toDTO(Warehouse domain)
        {
            return new WarehouseDTO(domain.WarehouseId.Value, domain.WarehouseAdress.street, domain.WarehouseAdress.country,domain.WarehouseAdress.doorNumber,
                domain.WarehouseCoordinates.longi, domain.WarehouseCoordinates.lat, domain.WarehouseCoordinates.alt, domain.WarehouseDescription.warehouseDescription);
        }


        public Warehouse toDomain(WarehouseDTO dto)
        {
            return new Warehouse(dto.WarehouseID, dto.street, dto.country,
                dto.doorNumber, dto.longi, dto.lat, dto.alt,
                dto.Description);
        }
    }
}