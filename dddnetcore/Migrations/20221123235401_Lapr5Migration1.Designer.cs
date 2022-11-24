﻿// <auto-generated />
using System;
using DDDSample1.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDDNetCore.Migrations
{
    [DbContext(typeof(DDDSample1DbContext))]
    [Migration("20221123235401_Lapr5Migration1")]
    partial class Lapr5Migration1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("DDDSample1.Domain.Categories.Category", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("DDDSample1.Domain.Deliveries.Delivery", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("DDDSample1.Domain.Families.Family", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Families");
                });

            modelBuilder.Entity("DDDSample1.Domain.Products.Product", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<bool>("Active")
                        .HasColumnType("bit");

                    b.Property<string>("CategoryId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("DDDSample1.Domain.Warehouses.Warehouse", b =>
                {
                    b.Property<string>("WarehouseId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("WarehouseId");

                    b.ToTable("Warehouses");
                });

            modelBuilder.Entity("DDDSample1.Domain.Deliveries.Delivery", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.Deliveries.DeliveryDate", "DateOfDelivery", b1 =>
                        {
                            b1.Property<string>("DeliveryId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<DateTime>("date")
                                .HasColumnType("datetime2");

                            b1.HasKey("DeliveryId");

                            b1.ToTable("Deliveries");

                            b1.WithOwner()
                                .HasForeignKey("DeliveryId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Deliveries.DeliveryInTime", "PutDeliveryTime", b1 =>
                        {
                            b1.Property<string>("DeliveryId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<double>("deliveryInTime")
                                .HasColumnType("float");

                            b1.HasKey("DeliveryId");

                            b1.ToTable("Deliveries");

                            b1.WithOwner()
                                .HasForeignKey("DeliveryId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Deliveries.DeliveryOutTime", "TakeDeliveryTime", b1 =>
                        {
                            b1.Property<string>("DeliveryId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<double>("deliveryOutTime")
                                .HasColumnType("float");

                            b1.HasKey("DeliveryId");

                            b1.ToTable("Deliveries");

                            b1.WithOwner()
                                .HasForeignKey("DeliveryId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Deliveries.DeliveryWarehouseId", "WarehouseId", b1 =>
                        {
                            b1.Property<string>("DeliveryId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("deliveryWarehouseId")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("DeliveryId");

                            b1.ToTable("Deliveries");

                            b1.WithOwner()
                                .HasForeignKey("DeliveryId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Deliveries.DeliveryWeight", "Weight", b1 =>
                        {
                            b1.Property<string>("DeliveryId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<double>("deliveryWeight")
                                .HasColumnType("float");

                            b1.HasKey("DeliveryId");

                            b1.ToTable("Deliveries");

                            b1.WithOwner()
                                .HasForeignKey("DeliveryId");
                        });

                    b.Navigation("DateOfDelivery");

                    b.Navigation("PutDeliveryTime");

                    b.Navigation("TakeDeliveryTime");

                    b.Navigation("WarehouseId");

                    b.Navigation("Weight");
                });

            modelBuilder.Entity("DDDSample1.Domain.Warehouses.Warehouse", b =>
                {
                    b.OwnsOne("DDDSample1.Domain.Warehouse.WarehouseAdress", "WarehouseAdress", b1 =>
                        {
                            b1.Property<string>("WarehouseId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("country")
                                .HasColumnType("nvarchar(max)");

                            b1.Property<int>("doorNumber")
                                .HasColumnType("int");

                            b1.Property<string>("street")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("WarehouseId");

                            b1.ToTable("Warehouses");

                            b1.WithOwner()
                                .HasForeignKey("WarehouseId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Warehouse.WarehouseCoordinates", "WarehouseCoordinates", b1 =>
                        {
                            b1.Property<string>("WarehouseId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<double>("alt")
                                .HasColumnType("float");

                            b1.Property<double>("lat")
                                .HasColumnType("float");

                            b1.Property<double>("longi")
                                .HasColumnType("float");

                            b1.HasKey("WarehouseId");

                            b1.ToTable("Warehouses");

                            b1.WithOwner()
                                .HasForeignKey("WarehouseId");
                        });

                    b.OwnsOne("DDDSample1.Domain.Warehouse.WarehouseDescription", "WarehouseDescription", b1 =>
                        {
                            b1.Property<string>("WarehouseId")
                                .HasColumnType("nvarchar(450)");

                            b1.Property<string>("warehouseDescription")
                                .HasColumnType("nvarchar(max)");

                            b1.HasKey("WarehouseId");

                            b1.ToTable("Warehouses");

                            b1.WithOwner()
                                .HasForeignKey("WarehouseId");
                        });

                    b.Navigation("WarehouseAdress");

                    b.Navigation("WarehouseCoordinates");

                    b.Navigation("WarehouseDescription");
                });
#pragma warning restore 612, 618
        }
    }
}
