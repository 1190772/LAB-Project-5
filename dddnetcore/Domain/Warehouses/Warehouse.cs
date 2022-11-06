using System;
using System.Collections.Generic;
using System.Threading.Channels;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Warehouse;

namespace DDDSample1.Domain.Warehouses

{
    public class Warehouse : Entity<WarehouseId>,IAggregateRoot
    {
        public WarehouseId WarehouseId {get;private set;}
        public WarehouseAdress WarehouseAdress{get;private set;}
        public WarehouseCoordinates WarehouseCoordinates{get;private set;}
        public WarehouseDescription WarehouseDescription{get;private set;}


        public Warehouse(string warehouseID,string street,string country,int doorNumber,double longi,double alt, double lat,string warehouseDescription)
        {
            this.WarehouseId= new WarehouseId(Guid.NewGuid());
            this.WarehouseAdress= new WarehouseAdress(street,country,doorNumber);
            this.WarehouseCoordinates= new WarehouseCoordinates(longi,lat,alt);
            this.WarehouseDescription= new WarehouseDescription(warehouseDescription);
        }

        public void update(WarehouseDTO dto)
        {
            this.WarehouseId = new WarehouseId(dto.WarehouseID);
            this.WarehouseAdress = new WarehouseAdress(dto.street,dto.country,dto.doorNumber);
            this.WarehouseCoordinates = new WarehouseCoordinates(dto.longi,dto.lat,dto.alt);
            this.WarehouseDescription = new WarehouseDescription(dto.Description);
        }

        private Warehouse()
        {
            
        }
    }
}