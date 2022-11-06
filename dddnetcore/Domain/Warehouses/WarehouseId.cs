using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Deliveries
{
    [ComplexType]
    public class WarehouseId : EntityID
    {
        [JsonConstructor]
        public WarehouseId(Guid value) : base(value)
        {

        }

        public WarehouseId(String value): base(value)
        {

        }

        protected Object createFromString(String text)
        {
            return new Guid(text);
        }

        public String AsString()
        {
            Guid obj=(Guid)base.ObjValue;
            return obj.ThoString();
        }
        public Guid AsGuid()
        {
            return (Gui)base.ObjValue;
        }
    }
}