using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Warehouses

{
    public class Warehouse : Entity<WarehouseId>,IAggregateRoot
    {
        public WarehouseId WarehouseId {get;private set;}
        public WarehouseAdress WarehouseAdress{get;private set;}
        public WarehouseCoordinates WarehouseCoordinates{get;private set;}
        public WarehouseDescription WarehouseDescription{get;private set;}


        public Warehouse(string warehouseID,string street,string country,int doorNumber,double long,double alt, double lat,string warehouseDescription)
        {
            this.WarehouseId= new WarehouseId(Guid.NewGuid());
            this.WarehouseAdress= new WarehouseAdress(street,country,doorNumber);
            this.WarehouseCoordinates= new WarehouseCoordinates(longi,lat,alt);
            this.WarehouseDescription= new WarehouseDescription(warehouseDescription);
        }
    }
}