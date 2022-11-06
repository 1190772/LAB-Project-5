using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infrastructure.Delivery
{
    public class WarehouseEntityTypeConfiguration : IEntityTypeConfiguration<Domain.Warehouses.Warehouse>
    {
        public void Configure(EntityTypeBuilder<Domain.Warehouses.Warehouse> builder)
        {
            
            builder.HasKey(n => n.WarehouseId);
            builder.OwnsOne(u => u.WarehouseAdress);
            builder.OwnsOne(u => u.WarehouseCoordinates);
            builder.OwnsOne(u => u.WarehouseDescription);
            
        }
    }
}