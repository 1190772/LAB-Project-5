using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDNetCore.Domain.Shared;
using System.ComponentModel.DataAnnotations;

namespace DDDSample1.Domain.Deliveries

{

    public class Delivery : Entity<DeliveryID>, IAggregateRoot
    {
        public DeliveryDate DateOfDelivery { get; private set; }
        public DeliveryWeight Weight { get; private set; }
        public DeliveryWarehouseID WarehouseID { get; private set; }
        public DeliveryInTime PutDeliveryTime { get; private set; }
        public DeliveryOutTime TakeDeliveryTime { get; private set; }


        public Delivery(string deliveryID,  int year, int month, int day, double weight, string warehouseID, double putDeliveryTime, double takeDeliveryTime)
        {


            this.Id = new DeliveryID(Guid.NewGuid());
            this.DateOfDelivery = new DeliveryDate(year, month, day);
            this.Weight = new DeliveryWeight(weight);
            this.WarehouseID = new DeliveryWarehouseID(warehouseID);
            this.PutDeliveryTime = new DeliveryInTime(putDeliveryTime);
            this.TakeDeliveryTime = new DeliveryOutTime(takeDeliveryTime);
        }
    }
}