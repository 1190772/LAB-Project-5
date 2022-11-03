using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryWeight : IValueObject
    {

        public double deliveryWeight {get; private set;}

        public DeliveryWeight()
        {

        }

        public DeliveryWeight (double deliveryWeight)
        {
            this.updateDeliveryWeight(deliveryWeight);
        }

        public void updateDeliveryWeight(double weight){
            try{
                this.deliveryWeight = weight;
            } catch{
                throw new BusinessRuleValidationException("Invalid weight.");
            }
        }
    }
}