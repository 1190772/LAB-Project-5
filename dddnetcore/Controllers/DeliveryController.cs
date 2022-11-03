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
        public async Task<ActionResult<DeliveryDTO>> GetAll()
        {
            return await _service.GetAll
            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<>> GetById(Guid id)
        {
           
        }

        
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<>> Delete(Guid id)
        {
            
        }
        
    }