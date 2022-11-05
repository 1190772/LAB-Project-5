using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infrastructure.Delivery
{
    public class DeliveryEntityTypeConfiguration : IEntityTypeConfiguration<Delivery>
    {
        public void Configure(EntityTypeBuilder<Delivery> builder)
        {
            
            builder.HasKey(n => n.Id);
            builder.OwnsOne(u => u.WarehouseAdress);
            builder.OwnsOne(u => u.WarehouseCoordinates);
            builder.OwnsOne(u => u.WarehouseDescription);
            
        }
    }
}