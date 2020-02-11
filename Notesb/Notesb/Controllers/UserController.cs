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
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserDataService _userDataService;

        public UserController(IUserDataService userDataService)
        {
            _userDataService = userDataService;
        }


        // GET: api/User
        [HttpGet]
        public ActionResult<List<UserModel>> Get()
        {
            return _userDataService.Get();
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<UserModel> Get(string id)
        {
            return _userDataService.Get(id);
        }

        // POST: api/User
        [HttpPost]
        public ActionResult<UserModel> Post(UserModel userModel)
        {
           return _userDataService.Create(userModel);
        }

        // PUT: api/User/5
        [HttpPut]
        public ActionResult<UserModel> Put(UserModel userModel)
        {
            var user = _userDataService.Get(userModel.Id);

            if (user == null)
            {
                return NotFound();
            }

            _userDataService.Update(userModel);
            return userModel;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            _userDataService.Delete(id);
        }
    }
}
