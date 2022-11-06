using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DDDSample1.Domain;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Warehouses;
using Microsoft.AspNetCore.Mvc;

namespace DDDSample1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {
        private readonly IWarehouseService _service;
        public WarehouseController( IWarehouseService service)
        {
            this._service = service;
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<WarehouseDTO>>> GetAll()
        {
            return Ok(await _service.GetAllAsync());
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<WarehouseDTO>> GetById(Guid id)
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
                var warehouseId = await _service.GetByIdAsync(new Guid(dto.WarehouseID));
              
                if (!(warehouseId== null))
                {
                    throw new BusinessRuleValidationException("The warehouse already exists");
                }
                else
                {
                    var u = await _service.AddAsync(dto);
                    return CreatedAtAction(nameof(Create), new {id = u.WarehouseID}, u);
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
            if (id.ToString() != dto.WarehouseID)
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
        public async Task<ActionResult<WarehouseDTO>> Delete(Guid id)
        {
            var warehouse = await _service.DeleteAsync(id);
           if (warehouse == null){
            return NotFound();
           }
           return Ok(warehouse);
        }

    }
}