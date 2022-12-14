using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDSample1.Domain;
using DDDSample1.Domain.Deliveries;
using DDDSample1.Domain.Shared;
using Microsoft.AspNetCore.Mvc;

namespace DDDSample1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveryController : ControllerBase
    {
        
        private readonly IDeliveryService _service;
       

        public DeliveryController( IDeliveryService service)
        {
            this._service = service;
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeliveryDTO>>> GetAll()
        {
            return Ok(await _service.GetAllAsync());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DeliveryDTO>> GetById(Guid id)
        {
           var delivery = await _service.GetByIdAsync(id);
           if (delivery == null){
            return NotFound();
           }
           return Ok(delivery);
        }

        [HttpPost]
        public async Task<ActionResult<DeliveryDTO>> Create(DeliveryDTO dto)
        {
            try
            {
                var deliveryId = await _service.GetByIdAsync(new Guid(dto.DeliveryId));
              
                if (!(deliveryId== null))
                {
                    throw new BusinessRuleValidationException("The delivery already exists");
                }
                else
                {
                    var u = await _service.AddAsync(dto);
                    return CreatedAtAction(nameof(Create), new {id = u.DeliveryId}, u);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new {Message = ex.Message});
            }
        }


        [HttpPut("{id}")]
        public async Task<ActionResult<DeliveryDTO>> Update(Guid id, DeliveryDTO dto)
        {
            if (id.ToString() != dto.DeliveryId)
            {
                return BadRequest();
            }

            try
            {
                var cat = await _service.UpdateAsync(dto);

                if (cat == null)
                {
                    return NotFound();
                }
                return Ok(cat); 
            }
            catch(BusinessRuleValidationException ex)
            {
                return BadRequest(new {Message = ex.Message});
            }
        }
      

      
        [HttpDelete("{id}")]
        public async Task<ActionResult<DeliveryDTO>> Delete(Guid id)
        {
            var delivery = await _service.DeleteAsync(id);
           if (delivery == null){
            return NotFound();
           }
           return Ok(delivery);
        }
        
    }
}