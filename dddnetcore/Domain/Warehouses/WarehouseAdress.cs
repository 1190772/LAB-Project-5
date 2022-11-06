using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DDDSample1.Domain.Warehouse
{
    
    [ComplexType]
    public class WarehouseAdress : IValueObject
    {
        public string street {get;private set;}
        public string country {get;private set;}
        public int doorNumber {get;private set;}

        public WarehouseAdress()
        {
            
        }

        public override string ToString()
        {
            return street + " " + doorNumber + "," + country;
        }

        [JsonConstructor]
        public WarehouseAdress(string street, string country, int doorNumber)
        {
            this.updateWarehouseAdress(street,country,doorNumber);
        }

        public void updateWarehouseAdress(string street,string country, int doorNumber)
        {
            try{
                this.street= street;
                this.country= country;
                this.doorNumber=doorNumber;
            }catch{
                throw new BusinessRuleValidationException("Invalid Adress");
            }
        }
    }
}


