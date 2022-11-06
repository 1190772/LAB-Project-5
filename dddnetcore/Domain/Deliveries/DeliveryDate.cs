using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class DeliveryDate : IValueObject
    {
        public DateTime date { get; private set; }

        public DeliveryDate()
        {
        }

        public DeliveryDate(int year, int month, int day)
        {
            this.updateDate(year, month, day);

        }

        public DeliveryDate(DateTime year)
        {
            this.date = year;
        }

        public void updateDate(int year, int month, int day)
        {
            try
            {
                this.date = new DateTime(year, month, day);

            }
            catch
            {
                throw new BusinessRuleValidationException("Invalid Date.");
            }
        }
    }
}