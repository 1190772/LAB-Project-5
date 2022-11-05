using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Infrastructure.Shared;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Infrastructure.Warehouse
{
    public class WarehouseRepository : BaseRepository<Warehouse, WarehouseId>, IWarehouseRepository
    {
        public WarehouseRepository(DDDSample1DbContext context) : base(context.Warehouse)
        {
        }


    }
}