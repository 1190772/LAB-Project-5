using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DDDSample1.Domain.Warehouse
{
    [ComplexType]
    public class WarehouseCoordinates :IValueObject
    {
        public double longi {get; private set;}
        public double lat {get; private set;}
        public double alt {get; private set;}

        public WarehouseCoordinates()
        {

        }

        [JsonConstructor]
        public WarehouseCoordinates(double longi, double lat, double alt)
        {
            this.updateWarehouseCoordinates(longi,lat,alt);
        }

        public void updateWarehouseCoordinates(double longi, double lat, double alt){
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