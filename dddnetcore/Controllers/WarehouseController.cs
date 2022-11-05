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
    public class WarehouseController : ControllerBase
    {
        private readonly IWarehouseService _service;
        public DeliveryController( IDeliveryService service)
        {
            this._service = service;
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WarehouseDTO>>> GetAll()
        {
            return Ok(await _service.GetAllAsync());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<>> GetById(Guid id)
        {
           var warehouse = await _service.GetByIdAsync(id);
           if (warehouse == null){
            return NotFound();
           }
           return Ok(warehouse);
        }

        [HttpPost]
        public async Task<ActionResult<WarehouseDTO>> Create(WarehouseDTO dto)
        {
            try
            {
                var warehouseId = await _service.GetById(dto.Id);
              
                if (!(warehouseId== null))
                {
                    throw new BusinessRuleValidationException("The warehouse already exists");
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

        [HttpPut("{id}")]
        public async Task<ActionResult<WarehouseDTO>> Update(Guid id, WarehouseDTO dto)
        {
            if (id != dto.Id)
            {
                return BadRequest();
            }

            try
            {
                var cat = await_service.UpdateAsync(dto);

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
        public async Task<ActionResult<>> Delete(Guid id)
        {
            var warehouse = await _service.DeleteAsync(id);
           if (warehouse == null){
            return NotFound();
           }
           return Ok(warehouse);
        }

    }
}