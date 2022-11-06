using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infrastructure.Delivery
{
    public class DeliveryEntityTypeConfiguration : IEntityTypeConfiguration<Domain.Deliveries.Delivery>
    {
        public void Configure(EntityTypeBuilder<Domain.Deliveries.Delivery> builder)
        {
            
            builder.HasKey(n => n.Id);
            builder.OwnsOne(u => u.DateOfDelivery);
            builder.OwnsOne(u => u.WarehouseId);
            builder.OwnsOne(u => u.Weight);
            builder.OwnsOne(u => u.PutDeliveryTime);
            builder.OwnsOne(u => u.TakeDeliveryTime);
            
    
        }
    }
}