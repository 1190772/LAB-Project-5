using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Warehouse
{
    [ComplexType]
    public class WarehouseCoordinates :IValueObject
    {
        public double long {get; private set;}
        public double lat {get; private set;}
        public double alt {get; private set;}

        public WarehouseCoordinates()
        {

        }

        public WarehouseCoordinates(double long, double lat, double alt)
        {
            this.updateWarehouseCoordinates(long,lat,alt);
        }

        public void updateWarehouseCoordinates(double long, double lat, double alt){
            try{
                this.long=long;
                this.lat=lat;
                this.alt=alt;
            }catch{
                throw new BusinessRuleValidationException("Invalid Warehouse Coordinates");
            }
        }
    }
}