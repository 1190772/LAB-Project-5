using System;
using System.Collections.Generic;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Warehouse;

namespace DDDSample1.Domain.Warehouses
{

public class WarehouseDTO 
{   
    public string WarehouseID {get; set;}
    public string street {get; set;}
    public string country {get; set;}
    public int doorNumber {get; set;}
    public double longi {get; set;}
    public double lat {get; set;}
    public double alt {get; set;}
    public string Description {get; private set;}


    public WarehouseDTO(string warehouseId, string street, string country, int doorNumber, double longi, double lat, double alt, string description)
    {
        WarehouseID = warehouseId;
        this.street = street;
        this.country = country;
        this.doorNumber = doorNumber;
        this.longi = longi;
        this.lat = lat;
        this.alt = alt;
        Description = description;
    }

   
}















}