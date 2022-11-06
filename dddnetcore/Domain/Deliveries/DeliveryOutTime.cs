using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryOutTime : IValueObject
    {

        public double deliveryOutTime {get; private set;}

        public DeliveryOutTime()
        {

        }

        public DeliveryOutTime (double time)
        {
            this.updateDeliveryOutTime(time);
        }

        public void updateDeliveryOutTime(double time){
            try{
                this.deliveryOutTime = time;
            } catch{
                throw new BusinessRuleValidationException("Invalid time.");
            }
        }
    }
}