using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryWarehouseID : IValueObject
    {

        public string deliveryWarehouseID {get; private set;}

        public DeliveryWarehouseID()
        {

        }

        public DeliveryWarehouseID (string warehouseID)
        {
            this.updateWarehouseID(warehouseID);
        }

        public void updateWarehouseID(double warehouseID){
            try{
                this.deliveryWarehouseID = warehouseID;
            } catch{
                throw new BusinessRuleValidationException("Invalid Warehouse ID.");
            }
        }
    }
}