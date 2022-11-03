using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Deliveries;

public class DeliveryDTO
{
    public string DeliveryID {get;  set;}
    public DateTime DeliveryDate {get;  set;}
    public double Weight {get;  set;}
    public string WarehouseID {get;  set;}
    public double PutDeliveryTime {get;  set;}
    public double TakeDeliveryTime {get;  set;}


    public DeliveryDTO(string deliveryID, int year, int month, int day, double weight, string warehouseID, double putDeliveryTime, double takeDeliveryTime){

    
    this.DeliveryID = deliveryID;
    this.DeliveryDate= new DateTime(year, month, day);
    this.Weight = weight;
    this.WarehouseID = warehouseID;
    this.PutDeliveryTime = putDeliveryTime;
    this.TakeDeliveryTime = takeDeliveryTime;
    }


}
