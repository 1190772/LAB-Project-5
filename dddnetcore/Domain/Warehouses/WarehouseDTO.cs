using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Warehouses
{

public class WarehouseDTO 
{   
    public string WarehouseID {get; set;}
    public string WarehouseAddress {get; private set;}
    public string Coordinates {get; private set;}
    public string Description {get; private set;}


    public WarehouseDTO(string warehouseID, string street, string country, int doorNumber, 
    double longi, double lat, double alt, string description){

    this.WarehouseID = warehouseID;
    this.WarehouseAddress = new WarehouseAddress(street,country,doorNumber);
    this.Coordinates = new Coordinates(longi,lat,alt);
    this.Description = description;


    }



















}















}