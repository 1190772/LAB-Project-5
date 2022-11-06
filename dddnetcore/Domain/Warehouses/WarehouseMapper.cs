namespace DDDSample1
{

    public class WarehouseMapper
    {

        public WarehouseDTO toDTO (Warehouse domain)
        {

            return new WarehouseDTO(domain.id, domain.WarehouseAddress,
             domain.WarehouseCoordinates, domain.WarehouseDescription);
        }


        public Warehouse toDomain (WarehouseDTO dto )
        {

            return new Warehouse(dto.id, dto.WarehouseAddress, dto.Coordinates, dto.Description);


        }
    }


}