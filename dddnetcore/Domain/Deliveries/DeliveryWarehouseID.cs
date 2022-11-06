using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryWarehouseId : IValueObject
    {

        public string deliveryWarehouseId {get; private set;}

        public DeliveryWarehouseId()
        {

        }

        public DeliveryWarehouseId (string warehouseID)
        {
            this.updateWarehouseId(warehouseId);
        }

        public void updateWarehouseId(double warehouseId){
            try{
                this.deliveryWarehouseId = warehouseId;
            } catch{
                throw new BusinessRuleValidationException("Invalid Warehouse ID.");
            }
        }
    }
}