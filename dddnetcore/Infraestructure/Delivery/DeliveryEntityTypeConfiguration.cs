using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DDDSample1.Infrastructure.Delivery
{
    public class DeliveryEntityTypeConfiguration : IEntityTypeConfiguration<Delivery>
    {
        public void Configure(EntityTypeBuilder<Delivery> builder)
        {
            /*
            builder.HasKey(n => n.Id);
            builder.OwnsOne(u => u.Nome);
            builder.OwnsOne(u => u.Email);
            builder.OwnsOne(u => u.Password);
            builder.OwnsOne(u => u.DescBreve);
            builder.OwnsOne(u => u.Residencia);
            builder.OwnsOne(u => u.DataNascimento);
            builder.OwnsMany(u => u.Tags);
            builder.OwnsOne(u => u.Telefone);
            builder.OwnsOne(u => u.Avatar);
            builder.OwnsOne(u => u.PerfilLinkedin);
            builder.OwnsOne(u => u.PerfilFacebook);
            builder.OwnsOne(u => u.Estado).Property(e => e.DataEstadoEmocional);
            builder.OwnsOne(u => u.Estado).Property(emocional => emocional.Estado)
                .HasConversion(c => c.ToString(),
                    s => Enum.Parse<EstadoHumor>(s));
            builder.OwnsOne(u => u.Estado).Property(e => e.Val);
            */
        }
    }
}