using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain
{
    public interface IDeliveryRepository : IRepository<Delivery, DeliveryId>
    {


    }
}