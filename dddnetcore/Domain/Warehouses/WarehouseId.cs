using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class WarehouseId : EntityId
    {
        [JsonConstructor]
        public WarehouseId(Guid value) : base(value)
        {

        }

        public WarehouseId(String value): base(value)
        {

        }

        protected override Object createFromString(String text)
        {
            return new Guid(text);
        }

        public override String AsString()
        {
            Guid obj=(Guid)base.ObjValue;
            return obj.ToString();
        }
        public Guid AsGuid()
        {
            return (Guid)base.ObjValue;
        }
    }
}