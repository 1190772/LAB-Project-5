using System;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;


namespace DDDSample1.Domain.Deliveries
{


    [ComplexType]
    public class DeliveryId : EntityId
    {

        [JsonConstructor]
        public DeliveryId(Guid value) : base(value)
        {

        }

        public DeliveryId(String value) : base(value)
        {

        }

        protected Object createFromString(String text)
        {
            return new Guid(text);
        }


        public String AsString()
        {
            Guid obj = (Guid)base.ObjValue;
            return obj.ToString();
        }

        public Guid AsGuid()
        {
            return (Guid)base.ObjValue;
        }

    }


}