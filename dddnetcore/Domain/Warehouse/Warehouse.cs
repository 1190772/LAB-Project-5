using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDNetCore.Domain.Shared;
using System.ComponentModel.DataAnnotations;

namespace DDDSample1.Domain.Warehouse

{
    public class Warehouse : Entity:<Warehouse>,IAggregateRoot
    {
        public WarehouseId WarehouseId {get;set}
        public WarehouseAdress WarehouseAdress{get;set;}
        public WarehouseCoordinates WarehouseCoordinates{get;set;}
        public WarehouseDescription WarehouseDescription{get;set;}


        public Warehouse(string warehouseID,string street,string country,int doorNumber,double long,double alt, double lat,string warehouseDescription)
        {
            this.WarehouseId= new WarehouseId(Guid.NewGuid());
            this.WarehouseAdress= new WarehouseAdress(street,country,doorNumber);
            this.WarehouseCoordinates= new WarehouseCoordinates(long,lat,alt);
            this.WarehouseDescription= new WarehouseDescription(warehouseDescription);
        }
    }
}