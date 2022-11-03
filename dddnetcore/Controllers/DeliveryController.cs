using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDDNetCore.Domain.DTO;
using DDDSample1.Domain.Introducao;
using DDDSample1.Domain.Ligacao;
using DDDSample1.Domain.Shared;
using LAPR5_3DJ_1190387_1190434_1190560_1191014.Domain;
using LAPR5_3DJ_1190387_1190434_1190560_1191014.Domain.DTO;
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
        public async Task<ActionResult<>> GetById(Guid id)
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
                var deliveryId = await _service.GetById(dto.Id);
              
                if (!(deliveryId== null))
                {
                    throw new BusinessRuleValidationException("The delivery already exists");
                }
                else
                {
                    var u = await _service.AddAsync(dto);
                    return CreatedAtAction(nameof(Create), new {id = u.Id}, u);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new {Message = ex.Message});
            }
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<>> Delete(Guid id)
        {
            var delivery = await _service.DeleteAsync(id);
           if (delivery == null){
            return NotFound();
           }
           return Ok(delivery);
        }
        
    }
}