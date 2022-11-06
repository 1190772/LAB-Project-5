using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Warehouse
{
    [ComplexType]
    public class WarehouseCoordinates :IValueObject
    {
        public string longi {get; private set;}
        public string lat {get; private set;}
        public string alt {get; private set;}

        public WarehouseCoordinates()
        {

        }

        public WarehouseCoordinates(string longi, string lat, string alt)
        {
            this.updateWarehouseCoordinates(longi,lat,alt);
        }

        public void updateWarehouseCoordinates(string longi, string lat, string alt){
            try{
                this.longi=longi;
                this.lat=lat;
                this.alt=alt;
            }catch{
                throw new BusinessRuleValidationException("Invalid Warehouse Coordinates");
            }
        }
    }
}