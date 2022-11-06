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

        public DeliveryWarehouseId (string warehouseId)
        {
            this.updateWarehouseId(warehouseId);
        }

        public void updateWarehouseId(string warehouseId){
            try{
                this.deliveryWarehouseId = warehouseId;
            } catch{
                throw new BusinessRuleValidationException("Invalid Warehouse ID.");
            }
        }
    }
}