using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Notesb.Models;
using Notesb.Services;

namespace Notesb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDataService _userDataService;

        public UserController(UserDataService userDataService)
        {
            _userDataService = userDataService;
        }


        // GET: api/User
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/User
        [HttpPost]
        public ActionResult<UserModel> Post(UserModel userModel)
        {
           return _userDataService.Create(userModel);
        }

        // PUT: api/User/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
