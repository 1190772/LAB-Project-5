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
            builder.OwnsOne(u => u.DeliveryDate);
            builder.OwnsOne(u => u.DeliveryWarehouseId);
            builder.OwnsOne(u => u.DeliveryWeight);
            builder.OwnsOne(u => u.DeliveryInTime);
            builder.OwnsOne(u => u.DeliveryOutTime);
            
    
        }
    }
}