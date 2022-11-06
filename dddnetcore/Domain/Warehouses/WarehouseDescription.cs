using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Warehouse
{
    [ComplextType]
    public class WarehouseDescription :IValueObject
    {
        public string warehouseDescription{get; private set;}

        public WarehouseDescription()
        {

        }

        public WarehouseDescription(string warehouseDescription)
        {
            this.updateDescription(warehouseDescription);
        }

        public void updateWarehouseDescription(string warehouseDescription){
            try{
                this.warehouseDescription=warehouseDescription;
            }catch{
                throw new BusinessRuleValidationException("Invalid description");
            }
        }
    }
}