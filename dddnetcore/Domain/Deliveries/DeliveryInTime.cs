using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryInTime : IValueObject
    {

        public double deliveryInTime {get; private set;}

        public DeliveryInTime()
        {

        }

        public DeliveryInTime (double time)
        {
            this.updateDeliveryInTime(time);
        }

        public void updateDeliveryInTime(double time){
            try{
                this.deliveryInTime = time;
            } catch{
                throw new BusinessRuleValidationException("Invalid time.");
            }
        }
    }
}