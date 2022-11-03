using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DDDSample1.Domain.Deliveries

{

    public class Delivery : Entity<DeliveryID>, IAggregateRoot
    {
        public DateTime DateOfDelivery { get; set; }
        public double Weight { get; set; }
        public string WarehouseID { get; set; }
        public double PutDeliveryTime { get; set; }
        public double TakeDeliveryTime { get; set; }


        public CreatingDeliveryDTO(string deliveryID, int year, int month, int day, double weight, string warehouseID, double putDeliveryTime, double takeDeliveryTime)
        {


            this.DeliveryID = deliveryID;
            this.DateOfDelivery = new DateTime(year, month, day);
            this.Weight = weight;
            this.WarehouseID = warehouseID;
            this.PutDeliveryTime = putDeliveryTime;
            this.TakeDeliveryTime = takeDeliveryTime;
        }
    }
}