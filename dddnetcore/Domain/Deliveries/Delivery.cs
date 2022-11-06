using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.Deliveries

{

    public class Delivery : Entity<DeliveryId>, IAggregateRoot
    {
        public DeliveryDate DateOfDelivery { get; private set; }
        public DeliveryWeight Weight { get; private set; }
        public DeliveryWarehouseId WarehouseId { get; private set; }
        public DeliveryInTime PutDeliveryTime { get; private set; }
        public DeliveryOutTime TakeDeliveryTime { get; private set; }


        public Delivery(string deliveryId,  int year, int month, int day, double weight, string warehouseId, double putDeliveryTime, double takeDeliveryTime)
        {


            this.Id = new DeliveryId(Guid.NewGuid());
            this.DateOfDelivery = new DeliveryDate(year, month, day);
            this.Weight = new DeliveryWeight(weight);
            this.WarehouseId = new DeliveryWarehouseId(warehouseId);
            this.PutDeliveryTime = new DeliveryInTime(putDeliveryTime);
            this.TakeDeliveryTime = new DeliveryOutTime(takeDeliveryTime);
        }
        public Delivery(string deliveryId, DateTime date, double weight, string warehouseId, double putDeliveryTime, double takeDeliveryTime)
        {


            this.Id = new DeliveryId(Guid.NewGuid());
            this.DateOfDelivery = new DeliveryDate(date);
            this.Weight = new DeliveryWeight(weight);
            this.WarehouseId = new DeliveryWarehouseId(warehouseId);
            this.PutDeliveryTime = new DeliveryInTime(putDeliveryTime);
            this.TakeDeliveryTime = new DeliveryOutTime(takeDeliveryTime);
        }

        public void update(DeliveryDTO dto)
        {
            this.DateOfDelivery = new DeliveryDate(dto.DeliveryDate);
            this.Weight = new DeliveryWeight(dto.Weight);
            this.WarehouseId = new DeliveryWarehouseId(dto.WarehouseId);
            this.PutDeliveryTime = new DeliveryInTime(dto.PutDeliveryTime);
            this.TakeDeliveryTime = new DeliveryOutTime(dto.TakeDeliveryTime);
        }

        private Delivery()
        {
            
        }
    }
}