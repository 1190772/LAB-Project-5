using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Deliveries
{
    
public class DeliveryDTO
{
    public string DeliveryId {get;  set;}
    public DateTime DeliveryDate {get;  set;}
    public double Weight {get;  set;}
    public string WarehouseId {get;  set;}
    public double PutDeliveryTime {get;  set;}
    public double TakeDeliveryTime {get;  set;}


    public DeliveryDTO(string deliveryId, DateTime date, double weight, string warehouseId, double putDeliveryTime, double takeDeliveryTime){

    
    this.DeliveryId = deliveryId;
    this.DeliveryDate = date;
    this.Weight = weight;
    this.WarehouseId = warehouseId;
    this.PutDeliveryTime = putDeliveryTime;
    this.TakeDeliveryTime = takeDeliveryTime;
    }


}
}
